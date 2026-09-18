import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    createContext,
    useEffect,
    useState
} from "react";

const CLAVE_RESERVAS = "@reservas_ingles";

export const ReservasContext = createContext(null);

export function ReservaProvider({ children }) {
  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(true);

  //Cargar las reservas que se tienen guardadas, si no se tiene nada, se devuelve un arreglo vacio
  useEffect(() => {
    const cargar = async () => {
      try {
        const guardado = await AsyncStorage.getItem(CLAVE_RESERVAS);
        if (guardado !== null) {
          setReservas(JSON.parse(guardado));
        }
      } catch (error) {
        console.log("Error leyendo las reservas: ", error);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);
}

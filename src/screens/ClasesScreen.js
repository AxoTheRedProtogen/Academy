import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

import {
  useSafeAreaInsets
} from "react-native-safe-area-context";
import NivelFiltro from "../components/NivelFiltro";
import { NIVELES } from "../data/clases";

export default function ClasesScreen({ navigation }) {
  // const {columnas, paddingHorizontal} = useResponsive()
  const insets = useSafeAreaInsets();
  const [nivel, setNivel] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  return (
    <View>
      <View>
        <Text>Aplicacion de clases de ingles</Text>
        <View>
          <Ionicons name="search" size={18} />
          <TextInput
            placeholder="Buscar por nivel o profesor"
            value={busqueda}
            onChangeText={setBusqueda}
            autoCorrect={false}
            autoComplete="off"
          />

          {busqueda.length > 0 && (
            <Ionicons
              name="close-circle"
              size={18}
              onPress={() => setBusqueda("")}
            />
          )}
        </View>

        <ScrollView horizontal style={{ flexGrow: 0 }}>
          {NIVELES.map((item) => (
            <NivelFiltro
              key={item}
              etiqueta={item}
              activo={nivel === item}
              onPress={() => setNivel(item)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

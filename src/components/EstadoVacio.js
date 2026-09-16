import React from "react";
import { View, Text, Pressable, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius } from "../theme";

export default function EstadoVacio({icono= 'search-outline', titulo, mensaje, textoAccion, onAction }){
    return(
        <View style={style.contenedor}>
            <View style={style.circulo}>
                <Ionicons name={icono} size={30} color= {colors.primario}/>

            </View>
            <Text style={style.titulo}>{titulo}</Text>
            <Text style={style.mensaje}>{mensaje}</Text>
            {onAction && (
              <Pressable
                accessibilityRole="button"
                onPress={onAction}
                style={({pressed}) => [style.boton, pressed && style.botonPresionado]}
              >
                <Text style={style.textoBoton}>{textoAccion}</Text>
              </Pressable>
            )}

        </View>
    )

}
const style = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  circulo: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.superficie,
  },
  titulo: {
    marginTop: spacing.md,
    color: colors.texto,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  mensaje: {
    marginTop: spacing.xs,
    color: colors.textoSecundario,
    textAlign: 'center',
  },
  boton: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.sm,
    backgroundColor: colors.primario,
  },
  botonPresionado: {
    opacity: 0.75,
  },
  textoBoton: {
    color: colors.superficie,
    fontWeight: '700',
  },
});

import React, { useState, useMemo, useLayoutEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Alert, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import useResponsive from "../hooks/useResponsive";
import { colors, spacing, sombra, typography, radius } from "../theme";
import { formatearPrecio } from "../data/clases";

export default function DetalleClaseScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const { clase } = route.params;
  const { isTable } = useResponsive();
  useLayoutEffect(() => {
  navigation.setOptions({ title: clase.titulo });
  }, [navigation, clase.titulo]);

  return (
    <View style={styles.pantalla}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: clase.imagen }}
          style={[styles.portada, { height: isTable ? 300 : 200 }]}
          resizeMode="cover"
        />

        <View style={styles.contenido}>
          <View style={styles.profesor}>
            <Image
              source={{ uri: clase.profesor.foto }}
              accessibilityLabel={`Foto de ${clase.profesor.nombre}`}
              style={styles.avatar}
            />
            <Text style={styles.profesorNombre}>{clase.profesor.nombre}</Text>
          </View>

          <Text style={styles.descripcion}>{clase.descripcion}</Text>

          <View style={styles.datos}>
            <View style={styles.dato}>
              <Text style={styles.datoEtiqueta}>Precio</Text>
              <Text style={[styles.datoValor, styles.precio]}>
                {formatearPrecio(clase.precio)}
              </Text>
            </View>

            <View style={styles.dato}>
              <Text style={styles.datoEtiqueta}>Duración</Text>
              <Text style={styles.datoValor}>{clase.duracion} minutos</Text>
            </View>

            <View style={styles.dato}>
              <Text style={styles.datoEtiqueta}>Cupos disponibles</Text>
              <Text style={styles.datoValor}>{clase.cupos}</Text>
            </View>

            <View style={styles.dato}>
              <Text style={styles.datoEtiqueta}>Horario</Text>
              <Text style={styles.datoValor}>
                {clase.horarios?.join('\n') ?? 'Por confirmar'}
              </Text>
            </View>
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={() => {}}
            style={({ pressed }) => [
              styles.botonReserva,
              pressed && styles.botonPresionado,
            ]}
          >
            <Text style={styles.textoBoton}>Realizar reserva</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  portada: { width: '100%', backgroundColor: colors.borde },
  contenido: { padding: spacing.lg, gap: spacing.md },
  datos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: spacing.sm,
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  dato: {
    width: '48%',
    gap: spacing.xs,
    padding: spacing.md,
    backgroundColor: colors.fondo,
    borderRadius: radius.md,
  },
  datoEtiqueta: { fontSize: 12, color: colors.textoSecundario },
  datoValor: { fontSize: 16, fontWeight: '800', color: colors.texto },
  botonReserva: {
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.primario,
    borderRadius: radius.md,
  },
  botonPresionado: { opacity: 0.75 },
  textoBoton: { color: colors.superficie, fontSize: 16, fontWeight: '700' },
  profesor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.borde },
  profesorNombre: { fontSize: 15, fontWeight: '700', color: colors.texto },
  descripcion: { fontSize: 15, color: colors.textoSecundario, lineHeight: 22, marginTop: spacing.sm },
  barra: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.superficie,
    borderTopWidth: 1,
    borderTopColor: colors.borde,
    paddingVertical: spacing.lg,
    paddingTop: spacing.lg
  },
  precio: { fontSize: 18, fontWeight: '800', color: colors.primario },
});

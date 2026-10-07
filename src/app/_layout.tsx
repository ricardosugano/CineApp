import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="catalogo" options={{ title: "Catálogo" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
      <Stack.Screen name="sobre" options={{ title: "Sobre" }} />
    </Stack>
  );
}

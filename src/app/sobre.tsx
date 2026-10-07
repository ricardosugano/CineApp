import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Botao from "../components/Botao";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CineApp</Text>
      <Text style={styles.texto}>
        Aplicativo feito para mostrar um catálogo de filmes, com detalhes de cada um e a opção de favoritar.
      </Text>
      <Text style={styles.texto}>Versão: 1.0.0</Text>
      <Text style={styles.texto}>Disciplina: Programação para Dispositivos Móveis I</Text>
      <Text style={styles.texto}>Fatec Registro</Text>
      <Botao titulo="Voltar ao catálogo" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1e1e2e",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 8,
  },
});

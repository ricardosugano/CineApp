import { ScrollView, Text, Image, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Botao from "../components/Botao";

export default function Detalhes() {
  const { titulo, genero, ano, imagem, sinopse } = useLocalSearchParams<{
    titulo: string;
    genero: string;
    ano: string;
    imagem: string;
    sinopse: string;
  }>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.info}>Gênero: {genero}</Text>
      <Text style={styles.info}>Ano: {ano}</Text>
      <Text style={styles.sinopse}>{sinopse}</Text>
      <Botao titulo="Voltar" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1e1e2e",
  },
  imagem: {
    width: 200,
    height: 300,
    borderRadius: 8,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: "#ccc",
  },
  sinopse: {
    fontSize: 15,
    color: "#ddd",
    textAlign: "center",
    marginVertical: 15,
  },
});

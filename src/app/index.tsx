import { View, Text, Image, StyleSheet } from "react-native";
import { router } from "expo-router";
import Botao from "../components/Botao";

export default function Inicio() {
  return (
    <View style={styles.container}>
    
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.titulo}>CineApp</Text>
      <Text style={styles.descricao}>
        Veja uma lista de filmes, confira os detalhes e marque seus favoritos.
      </Text>
      <Botao titulo="Ver catálogo" onPress={() => router.push("/catalogo")} />
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  descricao: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginVertical: 15,
  },
});

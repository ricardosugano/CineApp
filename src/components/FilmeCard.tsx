import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

type Props = {
  titulo: string;
  genero: string;
  ano: number;
  imagem: string;
  onPress: () => void;
};

export default function FilmeCard({ titulo, genero, ano, imagem, onPress }: Props) {
  const [favorito, setFavorito] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressionado]}
    >
      <Image source={{ uri: imagem }} style={styles.imagem} />

      <View style={styles.info}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.texto}>{genero}</Text>
        <Text style={styles.texto}>{ano}</Text>

        <Pressable
          onPress={() => setFavorito(!favorito)}
          style={({ pressed }) => [styles.botaoFavorito, pressed && { opacity: 0.5 }]}
        >
          <Text style={styles.textoFavorito}>
            {favorito ? "★ Favorito" : "☆ Favoritar"}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#2b2b3d",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    width: "100%",
  },
  cardPressionado: {
    backgroundColor: "#3a3a52",
  },
  imagem: {
    width: 80,
    height: 120,
    borderRadius: 6,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  texto: {
    color: "#ccc",
  },
  botaoFavorito: {
    marginTop: 8,
  },
  textoFavorito: {
    color: "#f5c518",
    fontSize: 16,
  },
});

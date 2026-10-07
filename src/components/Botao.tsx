import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  titulo: string;
  onPress: () => void;
};

export default function Botao({ titulo, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#e50914",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  botaoPressionado: {
    backgroundColor: "#a3060e",
  },
  texto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

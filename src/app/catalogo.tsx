import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
import FilmeCard from "../components/FilmeCard";
import Botao from "../components/Botao";

const filmes = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficção Científica",
    ano: 2014,
    imagem: "https://placehold.co/200x300/png?text=Interestelar",
    sinopse: "Um grupo de astronautas viaja por um buraco de minhoca procurando um novo planeta para a humanidade.",
  },
  {
    id: 2,
    titulo: "O Rei Leão",
    genero: "Animação",
    ano: 1994,
    imagem: "https://placehold.co/200x300/png?text=Rei+Leao",
    sinopse: "Simba, um jovem leão, precisa assumir seu lugar como rei depois da morte do pai.",
  },
  {
    id: 3,
    titulo: "Vingadores: Ultimato",
    genero: "Ação",
    ano: 2019,
    imagem: "https://placehold.co/200x300/png?text=Vingadores",
    sinopse: "Os heróis que sobraram se juntam para tentar desfazer o estalo de Thanos.",
  },
  {
    id: 4,
    titulo: "Toy Story",
    genero: "Animação",
    ano: 1995,
    imagem: "https://placehold.co/200x300/png?text=Toy+Story",
    sinopse: "O boneco Woody fica com ciúmes quando o astronauta Buzz chega ao quarto de Andy.",
  },
  {
    id: 5,
    titulo: "Titanic",
    genero: "Romance",
    ano: 1997,
    imagem: "https://placehold.co/200x300/png?text=Titanic",
    sinopse: "Jack e Rose se apaixonam a bordo do navio Titanic durante sua primeira viagem.",
  },
  {
    id: 6,
    titulo: "Cidade de Deus",
    genero: "Drama",
    ano: 2002,
    imagem: "https://placehold.co/200x300/png?text=Cidade+de+Deus",
    sinopse: "A história de Buscapé, que cresce em uma comunidade do Rio de Janeiro e sonha em ser fotógrafo.",
  },
];

export default function Catalogo() {
  useEffect(() => {
    console.log("Catálogo carregado com " + filmes.length + " filmes");
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filmes.map((filme) => (
        <FilmeCard
          key={filme.id}
          titulo={filme.titulo}
          genero={filme.genero}
          ano={filme.ano}
          imagem={filme.imagem}
          onPress={() =>
            router.push({
              pathname: "/detalhes",
              params: {
                titulo: filme.titulo,
                genero: filme.genero,
                ano: String(filme.ano),
                imagem: filme.imagem,
                sinopse: filme.sinopse,
              },
            })
          }
        />
      ))}

      <Botao titulo="Sobre o app" onPress={() => router.push("/sobre")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#1e1e2e",
    alignItems: "center",
  },
});

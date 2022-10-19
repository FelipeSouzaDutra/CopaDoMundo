import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const Home: NextPage = () => {
  return (
    <>
      <section>
        <div>
          <h1>Primeira copa do mundo </h1>
          <p>
            A competição foi criada pelo francês Jules Rimet, em 1928, após ter
            assumido o comando da instituição mais importante do futebol
            mundial: a FIFA ( Federation International Football Association).
            A primeira edição da Copa do Mundo foi disputada no Uruguai, em
            Montevidéu, no ano de 1930. Apenas treze equipes nacionais
            reuniram-se nessa ocasião, sendo que somente quatro países europeus
            atravessaram o Oceano Atlântico de navio para competir o torneio.
            Bélgica, França e Romênia embarcaram num navio chamado "Conte Verde"
          </p>
        </div>
        <div className="display block ">
          <Carousel>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center">
                <img
                  className="d-block "
                  src="/img/mundial_1930.jpg"
                  alt="Lance de uma das partidas da copa do mundo de 1930"
                />
              </picture>
              <Carousel.Caption>
                <h3>Copa do mundo 1930</h3>
                <p>Um dos lances da copa 30</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center ">
                <img
                  className="d-block"
                  src="/img/mundial_1930.jpg"
                  alt="seleção do uruguai perfilado "
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center">
                <h3>Seleção Uruguai campeã da copa 1930</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center">
                <img
                  className="d-block "
                  src="/img/mundial_1930.jpg"
                  alt="Imagem da copa1930"
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center ">
                <h3>Final da copa 1930</h3>
                <p>
                  Seleção do uruguai entrando em campo para final
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center  ">
                <img
                  className="d-block "
                  src="/img/mundial_1930.jpg"
                  alt="bola utilizada na copa de 1930"
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center">
                <h3>Bola utilziada na Copa de 1930</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center">
                <img
                  className="d-block "
                  src="/img/mundial_1930.jpg"
                  alt="Imagem Copa do mundo 2022"
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center">
                <h3>Um dos estadios da copa de 1950</h3>
                <p>Torcidade presente em um dos jogos da copa desse ano</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center   ">
                <img
                  className="d-block "
                  src="/img/mundial_1930.jpg"
                  alt="selo da final da copa de 1930"
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center">
                <h3>Selo da final da copa de 1930</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <h1>Interrupção e retorno da competição (1942–1950):</h1>
          <p>
            Em 1939, as federações da Alemanha, Brasil e Argentina se ofereceram
            para sediar a Copa do Mundo de 1942. O Presidente da FIFA, o francês
            Jules Rimet, viajou para a América do Sul para avaliar os projetos
            de Brasil e Argentina. Enquanto ele estava no Rio de Janeiro, as
            tropas alemãs atacaram a Polônia em 1º de setembro de 1939 e a
            Segunda Guerra Mundial começou. Os preparativos para a Copa do Mundo
            foram interrompidos antes da escolha do país anfitrião. Devido à
            Segunda Guerra, não houve Mundial em 1942 e 1946. No Congresso na
            cidade de Luxemburgo, em 25 de julho de 1946, foi decidido que a
            quarta Copa do Mundo, em 1950, seria realizada no Brasil.
          </p>
        </div>
        <div className="display block ">
          <Carousel>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center">
                <img
                  className="d-block  "
                  src="/img/mundial_1930.jpg"
                  alt="Lance de uma das partidas da copa do mundo de 1930"
                />
              </picture>
              <Carousel.Caption>
                <h3>Copa do mundo 1930</h3>
                <p>Um dos lances da copa 30</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center  ">
                <img
                  className="d-block"
                  src="/img/mundial_1930.jpg"
                  alt="seleção do uruguai perfilado "
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center">
                <h3>Seleção Uruguai campeã da copa 1930</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center ">
                <img
                  className="d-block "
                  src="/img/mundial_1930.jpg"
                  alt="Imagem da copa1930"
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center ">
                <h3>Final da copa 1930</h3>
                <p>
                  Seleção do uruguai entrando em campo para final
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center ">
                <img
                  className="d-block"
                  src="/img/mundial_1930.jpg"
                  alt="bola utilizada na copa de 1930"
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center">
                <h3>Bola utilziada na Copa de 1930</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center  ">
                <img
                  className="d-block"
                  src="/img/mundial_1930.jpg"
                  alt="Imagem Copa do mundo 2022"
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center">
                <h3>Um dos estadios da copa de 1950</h3>
                <p>Torcidade presente em um dos jogos da copa desse ano</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <picture className="flex items-center justify-center   ">
                <img
                  className="d-block "
                  src="/img/mundial_1930.jpg"
                  alt="selo da final da copa de 1930"
                />
              </picture>
              <Carousel.Caption className="flex-col items-center justify-center">
                <h3>Selo da final da copa de 1930</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
        <div>
          <h1>Popularização</h1>
          <p>
            Com o passar dos anos e a popularização do futebol, a Copa do Mundo
            tornou-se um evento grandioso e que mobiliza uma quantidade de
            dinheiro gigantesca. A relevância da competição refletiu-se na
            quantidade de nações que participavam do evento.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import FlippableCards from "../components/Flippable-cards";

const Home: NextPage = () => {
  return (
    <>
      <main className=" p-1 ">
        <div className=" text-lincoln-green font-bold text-4x ">
          <h1 className="flex items-center justify-center">
            HISTORIAS DA COPA DO MUNDO
          </h1>
        </div>
        <section className=" p-2 flex items-center justify-center  ">
          <div className=" lg:gap-2">
            <div className="flex flex-col gap-2  lg:max-h-lg">
              <h2>Primeira copa do mundo </h2>
              <p>
                A competição foi criada pelo francês Jules Rimet, em 1928, após
                ter assumido o comando da instituição mais importante do futebol
                mundial: a FIFA ( Federation International Football
                Association). A primeira edição da Copa do Mundo foi disputada
                no Uruguai, em Montevidéu, no ano de 1930.
              </p>
            </div>

            <div className=" flex md:items-center  md:justify-center  lg:items-center  lg:justify-center">
              <img
                src="/img/Jules_Rimet_1933.jpg"
                alt="Presidente da fifa em 1930"
              />
              <div />
            </div>
          </div>
        </section>

        <section className=" p-2 text-justify flex items-center justify-center   ">
          <div className="lg:gap-2">
            <div className="flex flex-col gap-2 lg:max-h-lg">
              <h2>Copas de 1934 - 1954</h2>
              <p>
                Esse periodo da Copa do mundo foi marcado pela hegemonia da
                seleção do Uruguai e tambem pelo periodo de pausa da copa do
                mundo entre 1942-1946 devido à Segunda Guerra, não houve Mundial
                em 1942 e 1946. No Congresso na cidade de Luxemburgo, em 25 de
                julho de 1946, foi decidido que a copa seria no Brasil.
              </p>
            </div>
            <div className=" flex  md:items-center md:justify-center  lg:items-center lg:justify-center">
              <FlippableCards
                imagen="/img/copa1934.jpg"
                imagen2="/img/copa1954.jpg"
              />
            </div>
          </div>
        </section>

        <section className=" p-2 text-justify  flex items-center justify-center   ">
          <div className="lg:gap-2">
            <div className="flex flex-col gap-2 ">
              <h2>Copas de 1958 - 1970</h2>
              <p>
                Esse periodo da Copa do mundo ficou marcado pela hegemonia da
                seleção brasileira, onde Pelé e compania conseguiram um
                tricampeonato.Outro ponto a copa do mundo de 1970 foi um grande
                marco para TV brasileira Pela primeira vez, os telespectadores
                puderam assistir à transmissão dos jogos ao vivo
              </p>
            </div>

            <div className="videoWrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nQ5nflvo5fA"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className=" p-2 text-justify flex items-center justify-center ">
          <div className=" lg:gap-2">
            <div className="flex flex-col gap-2">
              <h2>Copas de 1974 - 1986</h2>
              <p>
                A Fifa aumentou o número de participantes de 16 para 24, de modo
                a refletir o crescente número de inscrições e acomodar
                interesses financeiros e políticos. A Copa já tinha se tornado
                um negócio bilionário, atraindo a maior audiência entre os
                eventos esportivos existentes
              </p>
            </div>
            <div className=" flex lg:items-center lg:justify-center  md:items-center md:justify-center">
              <Carousel slide={false} pause="hover">
                <Carousel.Item>
                  <picture>
                    <img
                      className="d-block w-70"
                      src="/img/copa1974.jpg"
                      alt="Jogador da alemanha segurando a taça"
                    />
                  </picture>
                </Carousel.Item>
                <Carousel.Item>
                  <picture>
                    <img
                      className="d-block w-70"
                      src="/img/copa1978.jpg"
                      alt="Time brasileiro da  copa 1978"
                    />
                  </picture>
                </Carousel.Item>
                <Carousel.Item>
                  <picture>
                    <img
                      className="d-block w-70"
                      src="/img/copa1982.jpg"
                      alt="Time italiano campeão da copa 1982"
                    />
                  </picture>
                </Carousel.Item>
                <Carousel.Item>
                  <picture>
                    <img
                      className="d-block w-70"
                      src="/img/maradona.jpg"
                      alt="Maradona segurando a taça da copa do mundo"
                    />
                  </picture>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>
        <section className=" p-2 text-justify  flex items-center justify-center  ">
          <div className="lg:gap-2">
            <div className="flex flex-col gap-2 lg:max-h-lg">
              <h2>Copas de 1990 - 2002</h2>
              <p>
                Esse periodo da Copa do mundo ficou marcado pela busca da Fifa
                desbravar o concorrido mercado americano, Na preferência do
                torcedor americano, o futebol perde feio para o beisebol, o
                futebol americano, entre outros esportes.Outro pontos que nesse
                periodo ficou evidente das altrerações que estavam acontecendo
                no panorama futebolístico, com resultados inesperados e várias
                surpresas .
              </p>
            </div>

            <div className="flex  md:items-center md:justify-center   lg:items-center lg:justify-center">
              <img
                src="/img/ronaldo.gif"
                alt="Gol do Ronaldo contra a Alemanha final de 2002"
              />
            </div>
          </div>
        </section>

        <section className=" p-2 text-justify flex items-center justify-center  ">
          <div className="lg:gap-2">
            <div className="flex flex-col gap-2 lg:max-h-lg">
              <h2>Copas de 2006 - 2018</h2>
              <p>
                Esse periodo da Copa do mundo ficou marcado pela hegemonia da
                seleção brasileira, onde pele e compania conseguiram um
                tricampeonato.Outro ponto a copa do mundo de 1970 foi um grande
                marco para TV brasileira Pela primeira vez, os telespectadores
                puderam assistir à transmissão dos jogos ao vivo
              </p>
            </div>
            <div className=" flex md:items-center md:justify-center lg:items-center lg:justify-center">
              <FlippableCards
                imagen="/img/copa2014.jpg"
                imagen2="/img/copa2018.jpg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

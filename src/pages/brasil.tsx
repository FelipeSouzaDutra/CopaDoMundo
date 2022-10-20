import React from 'react'


 const brasil = () => {
  return (
    <section>

     {/* TÍTULO DA PÁGINA */}
    <div className="flex flex-row items-center justify-center text-lincoln-green font-bold text-4xl">
      
    <div className="flex-col items-center justify-center">
    <div className="flex items-center justify-center">
    <picture className="pt-3">
      <img src="/img/escudo-cbf.png" alt="Time do Brasil junto abraçado" />
    </picture>
    </div>
    <div className="pb-6 pt-3">
    A HISTÓRIA DO BRASIL NA COPA DO MUNDO
    </div>
    </div>
    </div>

    {/* TÍTULO DA SEÇÃO DOS JOGOS QUE GARNATIRAM OS TÍTULOS */}
    <div className='flex items-center justify-center p-3 font-bold text-2xl'>
      <h1>
        JOGOS QUE GARANTIRAM OS TÍTULOS
      </h1>
    </div>

    {/* DIV PARA ORGANIZAR OS CARDS NA PÁGINA, COM RESPONSIVO */}
    <div className='flex flex-col lg:grid lg:grid-cols-2 items-center justify-center mx-1 gap-4'>

    {/* DIV PARA O CARD */}

  <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
    <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
      <picture className=''>
        <img src="/img/time-1950.jpg" alt="Time inteiro da seleção brasileira na copa do mundo de 1950" />
      </picture>
    <div className='flex flex-col text-justify items-center justify-center'>
      <h2 className="">BRASIL 5 X 2 SUÉCIA</h2>
      <p>Jogo disputado no Estádio Rasunda, na cidade de Solna na Suécia.
      Apesar da Suécia ter estreado o placar, isso não abalou a equipe brasileira
      e logo em seguida Vavá fez o primeiro gol brasileiro da partida.
      Pela primeira vez uma equipe sul americana e europeia disputavam uma final 
      na Copa do Mundo. Em seguida, tivemos mais um gol de Vavá, dois de Pelé e um de
      Zagallo. Pela primeira vez o Brasil ganhou a copa do mundo!</p>
    </div>
    </div>

  </div>

  {/* DIV PARA O CARD */}
  <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
    <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
      <picture className=''>
        <img src="/img/time-1962.jpeg" alt="Time inteiro da seleção brasileira na copa do mundo de 1962" />
      </picture>
    <div className='flex flex-col text-justify items-center justify-center'>
      <h2 className="">BRASIL 3 X 1 TCHECOSLOVÁQUIA</h2>
      <p>Diferente da última vez, a final ocorreu em solo sul-americano, no Estádio Nacional do Chile, em Santiago.
         Foi o bicampeonato consecutivo da seleção. Os gols foram pontuados por Amarildo, Zito e Vavá. 
         Apesar de ambos times já terem se enfrentado na Copa, e o resultado ter sido empate, o Brasil conseguiu sair 
         por cima e ganhar a copa novamente.</p>
    </div>
    </div>

  </div>

  {/* DIV PARA O CARD */}
  <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
    <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
      <picture className=''>
        <img src="/img/time-1970.jpg" alt="Time inteiro da seleção brasileira na copa do mundo de 1970" />
      </picture>
    <div className='flex flex-col text-justify items-center justify-center'>
      <h2 className="">BRASIL 4 X 1 ITÁLIA</h2>
      <p>Durante a copa de 1970, no México, o Brasil era considerado uma equipe muito forte. 
        Na seleção, jogadores de grande prestígio nacional e internacional vestiam a camisa da seleção 
        para tentar um título, nomes como Pelé, Tostão, Rivellino, Gérson, Jairzinho e vários outros, 
        chamavam a atenção do mundo inteiro. 
        Foi eleita pela revista World Soccer como a melhor equipe de futebol de todos os tempos. 
        Garantiu o título com uma vitória histórica em cima da Itália.</p>
    </div>
    </div>
  </div>

  {/* DIV PARA O CARD */}

  <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
    <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
      <picture className=''>
        <img src="/img/time-1994.jpg" alt="Time inteiro da seleção brasileira na copa do mundo de 1994" />
      </picture>
    <div className='flex flex-col text-justify items-center justify-center'>
      <h2 className="">BRASIL 0 X 0 ITÁLIA (3X2) NOS PÊNALTIS</h2>
      <p>Sem dúvida, um dos jogos mais históricos da seleção brasileira. 
        Após mais de 20 anos sem nenhum título, foi considerado um dos jogos com mais emoção pela vitória ter sido estabelecido nos pênaltis. 
        Foi onde várias frases icônicas surgiram, como “Vai que é sua Taffarel”, ou “É tetra!!”. 
        Um jogo histórico sem dúvidas, e finalmente onde a quarta vitória do Brasil na copa veio em solo estado-unidense no ano de 1994. </p>
    </div>
    </div>
  </div>

  {/* DIV PARA O CARD */}
  <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
    <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
      <picture className=''>
        <img src="/img/time-2002.jpg" alt="Time inteiro da seleção brasileira na copa do mundo de 2002" />
      </picture>
    <div className='flex flex-col text-justify items-center justify-center'>
      <h2 className="">BRASIL 2 X 0 ALEMANHA</h2>
      <p>
      Finalmente chegamos na última vitória do Brasil na copa, há 20 anos atrás, no Japão. 
      Os dois gols foram pontuados pelo famoso Ronaldo Fenômeno, e o Brasil se tornou pentacampeão, feito nunca 
      alcançado por nenhuma seleção até os dias atuais. 
      </p>
    </div>
    </div>
  </div>
  </div>

  {/* TÍTULO DA SEÇÃO DOS JOGOS QUE MARCARAM */}
  <div className='flex items-center justify-center p-11 font-bold text-2xl'>
      <h1>
        JOGOS QUE MARCARAM
      </h1>
    </div>

    {/* DIV PARA ORGANIZAR OS CARDS NA PÁGINA, COM RESPONSIVO */}
    <div className="flex flex-col lg:grid lg:grid-cols-3 items-center justify-center mx-1 gap-4">

    {/* DIV PARA O CARD */}
      <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
        <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
          <picture className=''>
            <img src="/img/brasil-uruguai.jpg" alt="Jogador do time do uruguai fazendo um gol contra a seleção brasileira na copa de 1950" />
          </picture>
        <div className='flex flex-col text-justify items-center justify-center'>
          <h2 className="">URUGUAI 2 X 1 BRASIL</h2>
          <p> Perca histórica contra o Uruguai na final da copa realizada no Brasil.</p>
        </div>
        </div>
        </div>
      <div className='p-2'></div>
      {/* DIV PARA O CARD */}
      <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
        <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
          <picture className=''>
            <img src="/img/brasil-franca.jpg" alt="Jogador francês com posse de bola durante o jogo contra o Brasil no final da copa de 1998" />
          </picture>
        <div className='flex flex-col text-justify items-center justify-center'>
          <h2 className="">FRANÇA 3 X 0 BRASIL</h2>
          <p> Apesar da seleção da época ser considerada uma das melhores, após o tetracampeonato nos Estados Unidos o Brasil leva uma goleada da França.</p>
        </div>
        </div>
      </div>
      <div className='p-2'></div>
      {/* DIV PARA O CARD */}
      <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
        <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
          <picture className=''>
            <img src="/img/brasil-alemanha.jpg" alt="Jogador do Brasil limpando as lágrimas com a camiseta e o placar do jogo, Alemanha 7 x 1 Brasil" />
          </picture>
        <div className='flex flex-col text-justify items-center justify-center'>
          <h2 className="">ALEMANHA 7 X 1 BRASIL</h2>
          <p>A perca mais histórica de toda história do Brasil na copa, onde levou uma goleada nas semi-finais durante o torneio no seu próprio país.</p>
        </div>
        </div>
      
      </div>
    </div>
 

    {/* TÍTULO DA SEÇÃO DOS JOGADORES IMPORTANTES DA SELEÇÃO */}
  <div className='flex items-center justify-center p-11 font-bold text-2xl'>
      <h1>
        OS MAIORES JOGADORES QUE A SELEÇÃO JÁ TEVE
      </h1>
    </div>

    {/* DIV PARA ORGANIZAR OS CARDS NA PÁGINA, COM RESPONSIVO */}
    <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center mx-1 gap-4 p-4">

    {/* DIV PARA O CARD */}
        <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/pele.jpeg" alt="Foto do Pelé jovem durante uma das copas que ele jogou" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">Edson Arantes do Nascimento</h2>
        <p> Carinhosamente apelidado de Pelé, é considerado um dos melhores atletas de todos os tempos.</p>
      </div>
      </div>
      </div>
      
      
      
      {/* DIV PARA O CARD */}
        <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/ronaldo.jpeg" alt="Ronaldo fenômeno vibrando com os braços abertos" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">Ronaldo Luís Nazário de Lima</h2>
        <p> Foi considerado pela FIFA o melhor jogador do mundo em 3 anos diferentes, e foi um dos maiores pontuadores que a seleção possuiu.</p>
      </div>
      </div>
      
        </div>
        
    </div>
    </section>
    
  );
};

export default brasil;

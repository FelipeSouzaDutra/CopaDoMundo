import React from "react";

const bolao = () => {
  return (
    <>
    <section className="cardGrupo">
    <div className='flex items-center justify-center p-3 font-bold text-2xl'>
      <h1 id="tituloPrincipal">
        BOLÃO DA COPA DO MUNDO 2022!
      </h1>
    </div>
      

      <p className="alert alert-info  font-semibold">
        Escolha quais serão as duas seleções que irão se classificar em cada
        grupo. Por ordem, 1ª e 2ª colocação. Após as escolhas, automaticamente
        passará para o próximo grupo.
      </p>


      
        <h2 className="nomeGrupo">Grupo</h2>

        <div className="selecoes" draggable="true">
          <span className="nomeSelecao">Selecao1</span>
        </div>
        <div className="selecoes" draggable="true">
          <span className="nomeSelecao">Selecao2</span>
        </div>
        <div className="selecoes" draggable="true">
          <span className="nomeSelecao">Selecao3</span>
        </div>
        <div className="selecoes" draggable="true">
          <span className="nomeSelecao">Selecao4</span>
        </div>
      </section>

      <section className="cardGrupoClassificado">
        <h2 className="classificados">Classificados</h2>

        <div className="classificadas">
          <span className="colocacao">1</span>
          <div className="selecaoClassificada" data-name="1"></div>

          <span className="colocacao">2</span>
          <div className="selecaoClassificada" data-name="2"></div>
        </div>
      </section>
      <script src="js/grupos.js"></script>
      <script src="js/drag-and-drop.js"></script>
      <script src="js/indexx.js"></script>
    </>
  );
};

export default bolao;

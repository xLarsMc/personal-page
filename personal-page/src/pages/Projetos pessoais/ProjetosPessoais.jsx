import styles from './ProjetosPessoais.module.css'

const ProjetosPessoais = () => {
  return (
    <div className={styles.mainDiv} id='ProjetosPessoais'>
      <div className={styles.title}>
        <h1>Portfólio</h1>
        <h3>Meus projetos</h3>
      </div>
      <div className={styles.projectsDiv}>
        <div className={styles.img1}> 
          <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-api-de-design-plano-desenhado-a-mao_23-2149367257.jpg" alt="" /> 
          <div className={styles.overlay1}>
            <h1>Projeto API para web blog</h1>
            <span>Projeto desenvolvido para sustenas uma aplicação de um web blog. Conta com artefatos como autenticação, verificação de token, análise e correção de entrada de dados e mais!</span>
            <a href="https://github.com/xLarsMc/Projeto-Full-Stack---Back-End" target='blank'> Projeto 1</a>
          </div>
        </div>
        <div className={styles.img2}> 
          <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-api-de-design-plano-desenhado-a-mao_23-2149367257.jpg" alt="" /> 
          <div className={styles.overlay2}>
            <h1>Projeto API para web blog</h1>
            <span>Projeto desenvolvido para sustenas uma aplicação de um web blog. Conta com artefatos como autenticação, verificação de token, análise e correção de entrada de dados e mais!</span>
            <a href="https://github.com/xLarsMc/Projeto-Full-Stack---Back-End" target='blank'> Projeto 1</a>
          </div>
        </div>
        <div className={styles.img3}> 
          <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-api-de-design-plano-desenhado-a-mao_23-2149367257.jpg" alt="" /> 
          <div className={styles.overlay3}>
            <h1>Projeto API para web blog</h1>
            <span>Projeto desenvolvido para sustenas uma aplicação de um web blog. Conta com artefatos como autenticação, verificação de token, análise e correção de entrada de dados e mais!</span>
            <a href="https://github.com/xLarsMc/Projeto-Full-Stack---Back-End" target='blank'> Projeto 1</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjetosPessoais
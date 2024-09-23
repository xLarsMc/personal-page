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
          <img src="./image1.png" alt="" /> 
          <div className={styles.overlay1}>
            <h1>Projeto API para web blog</h1>
            <span>Projeto desenvolvido para sustenar uma aplicação de um web blog. Conta com artefatos como autenticação, verificação de token, análise e correção de entrada de dados, proteção contra ataques DDoS, injeções XSS, pool de conexões e mais!</span>
            <a href="https://github.com/xLarsMc/Projeto-Full-Stack---Back-End" target='blank'> <img className={styles.badges} src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=white" alt="GitHub logo" /></a>
          </div>
        </div>
        <div className={styles.img2}> 
          <img src="./image2.png" alt="" /> 
          <div className={styles.overlay2}>
            <h1>Projeto React - Posts e interação com API</h1>
            <span>Projeto de um mini blog com posts de entidades do jogo "zelda", interagindo com uma API autoral, tratando erros, verificando usuário logado com token, rotas protegidas e mais!</span>
            <a href="https://github.com/MathKodi/Projeto2-WebFullstack" target='blank'> <img className={styles.badges} src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=white" alt="GitHub logo" /></a>
          </div>
        </div>
        <div className={styles.img3}> 
          <img src="./image.png" alt="" /> 
          <div className={styles.overlay3}>
            <h1>Projeto API para uma rede social</h1>
            <span>Projeto desenvolvido para sustentar uma rede-social, com tratamento de erros, banco de dados, JWT e mais!</span>
            <a href="https://github.com/xLarsMc/Projeto-Final-BackEnd" target='blank'> <img className={styles.badges} src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=white" alt="GitHub logo" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjetosPessoais
import styles from "./QuemSouEu.module.css"

const QuemSouEu = () => {
  return (
    <div className={styles.mainDiv} id="QuemSouEu">
        <img src="./Eu.jpeg"></img>
       <div className={styles.msgCont}>
        <div className={styles.h1h2Height}>
          <h1>Sobre mim:</h1>
          <h2>Apenas um garoto apaixonado por programação!</h2>
        </div>
        <ul className={styles.list}>
          <li>Formando em Análise e Desenvolvimento de Sistemas</li>
          <li>Enfoque em Programação FullStack</li>
          <li>Inglês fluente</li>
        </ul>
        <ul className={styles.socialLinks}>
          <li> <a href="https://www.linkedin.com/in/leandro-neves-lhoneves/"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=white" alt="LinkedIn logo" /></a></li>
          <li> <a href="https://github.com/xLarsMc"> <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo" /></a></li>
          <li> <a href="https://www.instagram.com/le.henrique_/"> <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="LinkedIn logo" /></a></li>
        </ul>
       </div>
    </div>
  )
}

export default QuemSouEu
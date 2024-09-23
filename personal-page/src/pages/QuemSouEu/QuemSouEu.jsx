import styles from "./QuemSouEu.module.css"

const QuemSouEu = () => {
  return (
    <div className={styles.mainDiv} id="QuemSouEu">
        <img src="./Eu.jpeg"></img>
       <div className={styles.msgCont}>
          <h2>Um jovem apaixonado pela arte da programação, transformando ideias em realidades</h2>
        <ul className={styles.list}>
          <li>Formando em Análise e Desenvolvimento de Sistemas pela Universidade Tecnológica Federal do Paraná</li>
          <li>Foco em Programação FullStack</li>
          <li>Front-End: React Native + CSS</li>
          <li>Back-End: Node.Js + MongoDB</li>
          <li>Inglês fluente - Autodidata </li>
        </ul>
        <ul className={styles.socialLinks}>
          <li> <a href="https://github.com/xLarsMc" target="blank"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=white" alt="GitHub logo" /></a></li>
          <li> <a href="https://www.linkedin.com/in/leandro-neves-lhoneves/" target="blank"> <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo" /></a></li>
          <li> <a href="https://www.instagram.com/le.henrique_/" target="blank"> <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo" /></a></li>
        </ul>
       </div>
    </div>
  )
}

export default QuemSouEu
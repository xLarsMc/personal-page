import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.mainDiv}>
      <h1>Leandro Henrique</h1>
      <div className={styles.text}>
        <h3>Esse é o meu website portfólio.	</h3>
        <span>Todos os meus trabalhos e projetos pessoais estão aqui!</span>
      </div>
      <div>
        <h4>Desenvolvido por Leandro Henrique</h4>
        <span>Todos os direitos reservados&#169;</span>
      </div>
    </div>
  )
}

export default Footer
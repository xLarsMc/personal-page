import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.mainDiv} id="home">
        <h3>Olá eu sou</h3>
        <h1>Leandro Henrique</h1>
        <h3>Analista e Desenvolvedor de Sistemas</h3>
        <div className={styles.images}>
        </div>
    </div>
  )
}

export default Home
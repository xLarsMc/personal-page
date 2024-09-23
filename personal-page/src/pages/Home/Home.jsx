import styles from './Home.module.css'

const Home = () => {

  function scroll(){
    const element = document.getElementById("QuemSouEu");
    element.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div className={styles.mainDiv} id="home">
        <h3>Olá, eu sou</h3>
        <h1>Leandro Henrique</h1>
        <h3 className={styles.img}>Analista e Desenvolvedor de Sistemas</h3>
        <img src="./seta.png" alt="" onClick={scroll}/>
    </div>
  )
}

export default Home
import styles from './Contato.module.css'

const Contato = () => {
  return (
    <div className={styles.mainDiv} id='Contato'>
        <h1>CONTATO</h1>
        <div className={styles.contactsDiv}>
          <div className={styles.email}>
            <h2>E-Mail:</h2>
            <span>leandrohenriquetti@gmail.com</span>
          </div>
          <div className={styles.telefone}>
            <h2>Telefone: </h2>
            <span>16 9 9725-7538</span>
          </div>
          <div className={styles.localizacao}>
            <h2>Localização: </h2>
            <span>Jaboticabal, São Paulo</span>
          </div>
        </div>
    </div>
  )
}

export default Contato
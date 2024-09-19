import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            <li><NavLink to='/#home'><span>Leandro Dev</span></NavLink></li>
            <li><NavLink to='/#QuemSouEu'><span>Quem Sou Eu?</span></NavLink></li>
            <li><span>Bem-vindo</span></li>
        </ul>
    </nav>
  )
}

export default Navbar
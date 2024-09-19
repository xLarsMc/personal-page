import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            <li><NavLink to='/' className={({isActive}) => (isActive ? styles.active : "")}><span> Página Inicial</span></NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
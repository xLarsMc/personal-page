import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setScroll(true)
      } else{
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll) 
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scroll ? styles.scrolled: ""}`}>
        <ul className={styles.list}>
            <li><NavLink to='/#home' className={styles.navlink}><span>Leandro Dev</span></NavLink></li>
            <li><NavLink to='/#QuemSouEu'className={styles.navlink}><span>Quem Sou Eu?</span></NavLink></li>
            <li><NavLink to='/#ProjetosPessoais'className={styles.navlink}>Meus Projetos</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
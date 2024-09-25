import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu); // Alterna entre true e false
  };

  const closeMenu = () => {
    setMenu(false); // Fecha o menu
  };

  return (
    <nav className={`${styles.nav} ${scroll ? styles.scrolled : ""}`}>
      <div className={styles.menu}>
        <span>
          <NavLink to="/#home" className={styles.navlink}>
            Leandro Dev
          </NavLink>
        </span>
        <div className={styles.hamburguer} onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      <ul className={`${styles.list} ${menu ? styles.open : ""}`}>
        <li>
          <NavLink to="/#home" className={styles.navlink} onClick={closeMenu}>
            Leandro Dev
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#QuemSouEu"
            className={styles.navlink}
            onClick={closeMenu}
          >
            Quem Sou Eu?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#ProjetosPessoais"
            className={styles.navlink}
            onClick={closeMenu}
          >
            Portfólio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#Contato"
            className={styles.navlink}
            onClick={closeMenu}
          >
            Contatos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

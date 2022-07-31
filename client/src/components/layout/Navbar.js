import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from "../../assets/costs_logo.png";
import Container from './Container'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" width={40} />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/project">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
        </ul>
      </Container>
    </div>
  )
}

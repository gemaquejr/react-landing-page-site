import React from 'react'
import Logo from '../../assets/logo_dark.png'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img src={Logo} alt="" />
            <button>Compartilhe um carro</button>
        </div>
    </div>
  )
}

export default Footer
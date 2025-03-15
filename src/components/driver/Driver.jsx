import React from 'react'
import styles from './Driver.module.css';
import Drive from '../../assets/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={Drive} alt="/" />
        </div>
        <div>
            <h2>Faça um test-drive <span>e tenha a certeza antes de comprar.</span></h2>
            <p>Certifique-se de que seu futuro carro combina bem com seu estilo de vida.</p>
            <button>Encontre seu carro</button>
        </div>
    </div>
  )
}

export default Driver
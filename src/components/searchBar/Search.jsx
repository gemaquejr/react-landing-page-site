import React from "react";
import styles from "./Search.module.css"
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
    return (
        <div className={styles.search}>
            <form>
                <div className={styles.text}>
                    <label>Destino</label>
                    <input 
                        className={styles.text_input}
                        type="text"
                        placeholder="Local de partida"
                    />
                </div>
                <div className={styles.from}>
                    <span className={styles.border}></span>
                    <label>Data Inicial</label>
                    <input type="date" />
                </div>
                <div className={styles.until}>
                    <span className={styles.border}></span>
                    <label>Data Final</label>
                    <input type="date" />
                </div>
                <div className={styles.search_btn}>
                    <button className={styles.btn}>Procure motoristas</button>
                    <AiOutlineSearch size={25} className={styles.icon} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
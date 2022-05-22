import styles from './assets/Sobre.module.css';

function Sobre() {
    return (
        <div> className={styles.main}
            <div className={styles.center}>
                <div className={styles.menu}>
                    <div className={styles.nome}>
                        <h1>Sobre</h1>
                    </div>
                </div>
            </div>

            <div className={styles.gridContainer}>
                <div className={styles.gridItem}><h2>Equipes</h2></div>
                <div className={styles.gridItem}><h2>Mídias</h2></div>
                <div className={styles.gridItem}><h2>Setores</h2></div>
                <div className={styles.gridItem}><h2> Atividades</h2></div>
                <div className={styles.gridItem}><h2>Parceiros</h2></div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <button className={styles.btn}>Equipes</button>
                    <button className={styles.btn}>Equipes</button>
                    <button className={styles.btn}>Equipes</button>
                    <button className={styles.btn}>Equipes</button>
                    <button className={styles.btn}>Equipes</button>
                    <button className={styles.btn}>Equipes</button>
                    <button className={styles.btn}>Equipes</button></div>
                <div className={styles.gridItem}>
                    <button className={styles.btn}>Mídias</button>
                    <button className={styles.btn}>Mídias</button>
                    <button className={styles.btn}>Mídias</button>
                    <button className={styles.btn}>Mídias</button>
                    <button className={styles.btn}>Mídias</button>
                    <button className={styles.btn}>Mídias</button>
                    <button className={styles.btn}>Mídias</button></div>
                <div className={styles.gridItem}>
                    <button className={styles.btn}>Setores</button>
                    <button className={styles.btn}>Setores</button>
                    <button className={styles.btn}>Setores</button>
                    <button className={styles.btn}>Setores</button>
                    <button className={styles.btn}>Setores</button>
                    <button className={styles.btn}>Setores</button>
                    <button className={styles.btn}>Setores</button></div>
                <div className={styles.gridItem}>
                    <button className={styles.btn}>Atividades</button>
                    <button className={styles.btn}>Atividades</button>
                    <button className={styles.btn}>Atividades</button>
                    <button className={styles.btn}>Atividades</button>
                    <button className={styles.btn}>Atividades</button>
                    <button className={styles.btn}>Atividades</button>
                    <button className={styles.btn}>Atividades</button></div>
                <div className={styles.gridItem}>
                    <button className={styles.btn}>Parceiros</button>
                    <button className={styles.btn}>Parceiros</button>
                    <button className={styles.btn}>Parceiros</button>
                    <button className={styles.btn}>Parceiros</button>
                    <button className={styles.btn}>Parceiros</button>
                    <button className={styles.btn}>Parceiros</button>
                    <button className={styles.btn}>Parceiros</button></div>
            </div>




        </div>
    )
}

export default Sobre;
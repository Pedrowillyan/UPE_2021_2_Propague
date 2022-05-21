import styles from './assets/Sobre.module.css';

function Sobre() {
    return(
      <div className={styles.main}>

          <div className={styles.center}>
              <div className={styles.menu}>
                  <div className={styles.nome}>
                      <h1>Sobre</h1>
                      </div>
                      <div className={styles.itemmenu}></div>
                      <a href='#'>Saiba mais</a>
                </div>
                <div className={styles.form}>
                <h2>Equipes</h2>
                    <form>
                        <div className={styles.buttonform}>
                            <button>equipe xxx</button>
                            <button>equipe xxx</button>
                            <button>equipe xxx</button>
                            <button>equipe xxx</button>
                            <button>equipe xxx</button>
                            <button>equipe xxx</button>
                            <button>equipe xxx</button>
                        </div>
                    </form>
                </div>


                      
            </div>
      </div> 
    )
}

export default Sobre;
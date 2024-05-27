
import styles from './Sobre.module.css'
import html from './imagens/icon-html.svg'
import css from './imagens/icon-css.svg'
import js from './imagens/icon-js.svg'
import react from './imagens/icon-react.svg'
import node from './imagens/icon-node.svg'
import sql from './imagens/icon-sql.svg'



function Sobre() {
    return (
        <>
            <section className={styles.sobre}>
                <div className={styles.bio}>
                    <img src='./imagens/3x4la.png' className={styles.avatar} />
                    <div className={styles.texto}>
                        <h2>Sobre</h2>
                        <p>Sou
                            <span> Lucas Alexandre</span> <br />
                            <strong> Desenvolvedor Full Stack</strong>
                        </p>
                        <p>
                            Estudante de Engenharia de Produção & Desenvolvedor Web
                        </p>
                        <p>
                            Sou um jovem determinado em transformar ideias em soluções reais, visando a inovação nos mais diversos setores, <br />
                            tanto do Desenvolvimento Web, quanto de setores da produção.
                        </p>
                        <p>
                            Especializado na projeção de ideias inovativas e elaboração de projetos logísticos.
                        </p>
                    </div>
                </div>


                <div className={styles.techs}>
                    <h3> Techs</h3>

                    <div className={styles.icones}>
                        <img src={html} alt='Ícone do html' />
                        <img src={css} alt='Ícone do css' />
                        <img src={js} alt='Ícone do js' />
                        <img src={react} alt='Ícone do react' />
                        <img src={node} alt='Ícone do node' />
                        <img src={sql} alt='Ícone do sql' />

                    </div>
                </div>
            </section>
        </>


    )
}
export default Sobre
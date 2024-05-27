import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import styles from './Contato.module.css'

function Contatos() {
    return (

        <>
           
                <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>

                    <div className={styles.icones}>
                        
                        <a href='mailto:lucasalexandreh@gmail.com' target='_blank' rel='noopener noreferrer'> 
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://www.instagram.com/lloquace/' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>

                        <a href='https://www.youtube.com/@lucasalexandreh/' target='_blank' rel='noopener noreferrer'>
                            <BsYoutube className={styles.icone} />
                        </a>

                        <a href='https://github.com/lucasalexandreh' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='https://www.linkedin.com/in/lucas-alexandre-almeida-da-fonseca-b00209265/' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                    </div>

                </section>
            
        </>

    )
}
export default Contatos
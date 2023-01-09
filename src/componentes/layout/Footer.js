import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {

    const ano = new Date().getFullYear();

    return <footer className={styles.footer}>
           <ul className={styles.social_list}>
                <li >
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
           </ul>
          
            <p className={styles.copy_right}>
                <span>Costs </span> &copy;{ano}
            </p>
        </footer> 
}
export default Footer
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer({ user }) {
    return (
        <>
            <div className={styles.footerContainer}>
                <h2 className={styles.footerTitle} >Footer</h2>
                <p className={styles.footerDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora amet maxime eaque tenetur deleniti? Reprehenderit magni atque voluptatem aliquam minus fugit, vitae nesciunt! Doloremque dolores magni fuga assumenda? Dolor, obcaecati.</p>
                <div className={styles.iconContainer}>
                    <a href=""><FontAwesomeIcon className={styles.instaLogo} icon={faInstagram} /></a>
                    <a href=""><FontAwesomeIcon className={styles.facebookLogo} icon={faFacebookF} /></a>
                    <a href=""><FontAwesomeIcon className={styles.facebookLogo} icon={faEnvelope} /></a>
                </div>
            </div>
            <div className={styles.copyrightContainer}>
                <p className={styles.copyrightText}>&copy; Copyright 2022. All Rights Reserved </p>
            </div>
        </>
    )
}

export default Footer; 
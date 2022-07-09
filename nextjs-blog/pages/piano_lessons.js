import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from 'next/image'
import alanPiano from "../images/alanPiano.jpg";
import adamChess from "../images/adamChess.jpg";
import styles from "./piano_lessons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";




export default function piano_lessons() {
    return (
        <>
            <Navbar></Navbar>

            <div className={styles.pianoAlanImageContainer}>
                <Image src={alanPiano} width="100%" height="65%" layout="responsive" quality="100" />
                <div className={styles.textContainer}>
                    <h2 className={styles.alanTitle}>Alan Bui</h2>
                    <p className={styles.alanDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus in consectetur provident earum excepturi asperiores ipsam incidunt, accusamus ipsum eos, unde odio magni cumque beatae, voluptatem minima aut voluptas.
                        Ducimus nihil sit unde facere assumenda dignissimos, veniam aut error aperiam minus beatae aliquam recusandae? Fugit quam, ipsum aliquid accusantium tempora cupiditate soluta sequi doloribus at esse ab id vitae!
                        A perferendis modi eaque molestias delectus reprehenderit iste earum odio cumque recusandae veritatis, cum incidunt porro dolores suscipit est voluptas excepturi amet saepe adipisci deleniti eos ut? Similique, maxime totam?</p>
                    <button className={styles.alanContactButton}>Contact Me</button>
                </div>
            </div>


            <Footer></Footer>
        </>
    );
}
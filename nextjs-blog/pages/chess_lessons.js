import Link from 'next/link';
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from 'next/image'
import alanChess from "../images/alanChess.jpg";
import adamChess from "../images/adamChess.jpg";
import igLogo from "../images/instaLogo.jpg";
import temp from "../images/temp.png";
import styles from "./chess_lessons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res1 = await fetch(`https://fide-ratings-scraper.herokuapp.com/player/2620561/info`)
    const res2 = await fetch(`https://fide-ratings-scraper.herokuapp.com/player/2621630/info`)
    const adamData = await res1.json()
    const alanData = await res2.json()

    // Pass data to the page via props
    return { props: { adamData, alanData } }
}


export default function chess_lessons({ adamData, alanData }) {
    return (
        <>
            <Navbar></Navbar>
            <div className={styles.chessTeacherContainer}>

                <div className={styles.chessTeacherText}>
                    <h2 className={styles.chessTeacherTitle}>Adam Gaisinsky</h2>
                    <pre className={styles.chessTeacherStats}>
                        Age: 19                Rating: {adamData['standard_elo']}                Title: Candidate Master
                    </pre>
                    <p className={styles.chessTeacherDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellendus? Ea dolorum aut, optio explicabo, et cupiditate eius voluptatum unde enim, ab quo ducimus blanditiis nobis facilis atque dolores possimus?
                        Eveniet repudiandae, voluptate nihil accusantium, vitae fugiat nam voluptas dolorum dolores laborum ab sit a provident cum nostrum ducimus magni! Illo quos eaque sint a earum blanditiis voluptatibus beatae ad!
                        Soluta, aspernatur enim. Hic minus maxime consectetur, placeat quaerat unde repudiandae distinctio saepe commodi dolor facilis voluptates expedita quas sequi aspernatur, labore eos autem nesciunt inventore. Iste praesentium optio perspiciatis.</p>
                    <button className={styles.contactChessTeacherButton}>Contact Me</button>
                </div>
                <div className={styles.chessTeacherIconContainer}>
                    <a href=""><FontAwesomeIcon className={styles.instaLogo} icon={faInstagram} /></a>
                    {/* <div className={styles.igImage}>
                        <a href=""><Image src={igLogo} width="30%" height="30%" layout="responsive" quality="100" /></a>
                    </div> */}
                    <a href=""><FontAwesomeIcon className={styles.linkedinLogo} icon={faLinkedin} /></a>
                </div>
                <div className={styles.chessTeacherImage}>
                    <Image src={adamChess} width="48%" height="60%" layout="responsive" quality="100" />
                </div>

            </div>



            <div className={styles.chessTeacherContainerDark}>

                <div className={styles.chessTeacherImageDark}>
                    <Image src={alanChess} width="100%" height="70%" layout="responsive" quality="100" />
                </div>

                <div className={styles.chessTeacherIconContainerDark}>
                    <a href=""><FontAwesomeIcon className={styles.instaLogoDark} icon={faInstagram} /></a>
                    {/* <div className={styles.igImage}>
                        <a href=""><Image src={igLogo} width="30%" height="30%" layout="responsive" quality="100" /></a>
                    </div> */}
                    <a href=""><FontAwesomeIcon className={styles.linkedinLogoDark} icon={faLinkedin} /></a>
                </div>

                <div className={styles.chessTeacherTextDark}>
                    <h2 className={styles.chessTeacherTitleDark}>Alan Bui</h2>
                    <pre className={styles.chessTeacherStats}>
                        Age: 15                    Rating: {alanData['standard_elo']}                    Title: None
                    </pre>
                    <p className={styles.chessTeacherDescDark}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellendus? Ea dolorum aut, optio explicabo, et cupiditate eius voluptatum unde enim, ab quo ducimus blanditiis nobis facilis atque dolores possimus?
                        Eveniet repudiandae, voluptate nihil accusantium, vitae fugiat nam voluptas dolorum dolores laborum ab sit a provident cum nostrum ducimus magni! Illo quos eaque sint a earum blanditiis voluptatibus beatae ad!
                        Soluta, aspernatur enim. Hic minus maxime consectetur, placeat quaerat unde repudiandae distinctio saepe commodi dolor facilis voluptates expedita quas sequi aspernatur, labore eos autem nesciunt inventore. Iste praesentium optio perspiciatis.</p>
                    <button className={styles.contactChessTeacherButtonDark}>Contact Me</button>
                </div>


            </div>

            <div className={styles.chessTeacherContainer}>

                <div className={styles.chessTeacherText}>
                    <h2 className={styles.chessTeacherTitle}>Adam Gaisinsky</h2>
                    <pre className={styles.chessTeacherStats}>
                        Age: 19                    Rating: 0                    Title: None
                    </pre>
                    <p className={styles.chessTeacherDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellendus? Ea dolorum aut, optio explicabo, et cupiditate eius voluptatum unde enim, ab quo ducimus blanditiis nobis facilis atque dolores possimus?
                        Eveniet repudiandae, voluptate nihil accusantium, vitae fugiat nam voluptas dolorum dolores laborum ab sit a provident cum nostrum ducimus magni! Illo quos eaque sint a earum blanditiis voluptatibus beatae ad!
                        Soluta, aspernatur enim. Hic minus maxime consectetur, placeat quaerat unde repudiandae distinctio saepe commodi dolor facilis voluptates expedita quas sequi aspernatur, labore eos autem nesciunt inventore. Iste praesentium optio perspiciatis.</p>
                    <button className={styles.contactChessTeacherButton}>Contact Me</button>
                </div>
                <div className={styles.chessTeacherIconContainer}>
                    <a href=""><FontAwesomeIcon className={styles.instaLogo} icon={faInstagram} /></a>
                    {/* <div className={styles.igImage}>
        <a href=""><Image src={igLogo} width="30%" height="30%" layout="responsive" quality="100" /></a>
    </div> */}
                    <a href=""><FontAwesomeIcon className={styles.linkedinLogo} icon={faLinkedin} /></a>
                </div>
                <div className={styles.chessTeacherImage}>
                    <Image src={alanChess} width="100%" height="50%" layout="responsive" quality="100" />
                </div>

            </div>
            <Footer></Footer>
        </>
    );
}
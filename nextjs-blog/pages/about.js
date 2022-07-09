import Link from 'next/link';
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from 'next/image'
import alan from "../images/alan.jpg";
import igLogo from "../images/instaLogo.jpg";
import temp from "../images/temp.png";
import styles from "./about.module.css";

export default function about() {
    return (
        <>
            <Navbar></Navbar>

            <div className={styles.aboutMainImage}>
                <Image src={temp} width="100%" height="20%" layout="responsive" quality="100" />
                <h2 className={styles.aboutTitle}>About Us</h2>
            </div>

            <div className={styles.aboutContainer}>
                <div className={styles.aboutDescContainer}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae earum eaque est beatae vel quidem aperiam. Tempore, sed asperiores distinctio ab, odio aliquid nemo ipsa eos sunt amet ut.
                        Dolor, eos ratione voluptates ad aliquam culpa possimus inventore? Ullam fugiat voluptas voluptatum ex expedita incidunt, soluta nobis labore vel dolor rem perferendis ratione numquam praesentium iure corporis. Itaque, commodi.
                        Cum eveniet esse numquam a iure consectetur nam qui non sapiente officia. Inventore, assumenda earum corporis nam officiis ipsa ab, facere iste quas magnam eligendi nesciunt voluptatibus ducimus nobis pariatur.</p>
                </div>
            </div>
            <div className={styles.emptySpace}></div>

            <Footer></Footer>
        </>
    );
}
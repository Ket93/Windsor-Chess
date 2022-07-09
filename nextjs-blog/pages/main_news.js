import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from 'next/image'
import alanPiano from "../images/alanPiano.jpg";
import adamChess from "../images/adamChess.jpg";
import styles from "./main_news.module.css";




export default function main_news() {
    return (
        <>
            <Navbar></Navbar>

            <div className={styles.newsContainer}>
                <h1 className={styles.newsTitle}>Title</h1>
                <h4 className={styles.newsInfo}>Kevin Cui | July 7, 2022 | 2 min read</h4>
                <div className={styles.newsMainImage}>
                    <a href="main_news"><Image src={alanPiano} width="100%" height="50%" layout="responsive" quality="100" /></a>
                </div>
                <p className={styles.newsContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum necessitatibus quidem quisquam quae harum libero laudantium eaque, suscipit animi vero, recusandae debitis atque unde ratione, quos non nam officia?
                    Deleniti sed aliquid ut labore quas accusamus temporibus, earum molestiae aliquam illo odit soluta! Unde repudiandae quae necessitatibus, ut cum enim excepturi? In aperiam dolorum maxime alias odio nisi facilis.
                    Fuga porro ut natus, itaque magni, voluptatem nihil, quo atque nam aliquam praesentium tenetur amet consequuntur voluptate ullam saepe delectus quos at iste! Quod obcaecati error vero id rerum labore?
                    Enim et aut consequatur reprehenderit recusandae aliquid quas non magnam hic sapiente beatae cumque dolorem cum assumenda aliquam, cupiditate, commodi amet nobis. Quasi nisi ipsum eum vero cumque, iusto id.
                    Illum alias fugit laudantium inventore quo minima non, officia provident, facilis reiciendis ut quam! Facere magni exercitationem harum architecto sequi hic molestias numquam impedit, dolorem dolore quo, sit, sed cupiditate?
                    Libero eveniet autem quas quasi quo? Voluptas, earum, dicta eveniet eius, illo sit dolores itaque temporibus sapiente optio illum. Voluptatibus, neque officiis harum necessitatibus enim laboriosam doloremque perferendis dicta! Architecto?
                    Veniam a quas et enim sapiente, deserunt cupiditate eius. Expedita, vitae veniam rem voluptatem animi vero, earum, sint explicabo qui in amet neque maxime atque quo necessitatibus autem! Explicabo, eveniet?
                    Officia, eum necessitatibus in, ad expedita dolor mollitia nemo explicabo assumenda nam excepturi itaque aliquam laborum magnam vitae ex voluptas recusandae distinctio? Accusantium perferendis temporibus sint eos voluptate ipsam vel.
                    Expedita, laborum nobis. Omnis facere voluptas, reiciendis eaque, officiis earum quidem ex eveniet dolorum adipisci cupiditate vitae facilis quasi dolore vero numquam cumque aliquid. Nemo autem magnam adipisci cupiditate beatae!
                    Vel iusto a exercitationem? Laborum obcaecati magnam est doloremque eveniet non quidem voluptatibus reiciendis omnis praesentium delectus consequatur ab quaerat aspernatur impedit aliquam id vero incidunt placeat, assumenda at vel!</p>
            </div>


            <Footer></Footer>
        </>
    );
}
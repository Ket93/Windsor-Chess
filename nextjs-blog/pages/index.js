import Head from 'next/head'
import Link from 'next/link';
import NewsPost from "../components/newsPost/newsPost";
import Navbar from "../components/navbar/navbar";
import Image from 'next/image'
import homeBackground from "../images/homeBackground.png";
import temp from "../images/temp.png";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.titleContainer}>
        <Image src={homeBackground} width="100%" height="60%" layout="responsive" quality="100" />
        <h2 className={styles.windsorChessTitle}>Windsor <span className={styles.yellow}>Chess</span></h2>
        <h5 className={styles.windsorChessSubtitle}>Explore tournaments, lessons, and more</h5>
        <button className={styles.learnMoreButton}>Learn More</button>
        <button className={styles.contactButton}>Contact Us</button>
      </div>

      <div className={styles.newsContainer}>

        <div className={styles.divider}></div>

        <div className={styles.newsTitleContainer}>
          <h2 className={styles.newsTitle}>News.</h2>
          <h4 className={styles.newsDescription}>Up-To-Date news on everything happening in Windsor Chess</h4>
        </div>

        <div className={styles.newsMainImage}>
          <Image src={temp} width="100%" height="50%" layout="responsive" quality="100" />
        </div>

        <div className={styles.newsInformation}>
          <div className={styles.newsTitleDate}>
            <h3 className={styles.mainPostTitle}> Here is the First News Post! </h3>
            <p className={styles.mainPostDate}> June 20th, 2022 </p>
          </div>

          <div className={styles.newsWriting}>
            <div style={styles.mainPostDescContainer}>
              <p className={styles.mainPostDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus optio, voluptatum doloremque magnam expedita porro assumenda ipsum culpa temporibus labore at nobis ullam, repudiandae neque. Esse vel sint voluptatum.
                Veritatis esse iste dignissimos libero nostrum porro architecto consectetur sit rerum repellat corporis unde blanditiis voluptates est id reiciendis, vel ipsum. Dolores impedit ab rerum accusantium assumenda, fugit sapiente fugiat?
                Recusandae beatae magnam provident nam nulla obcaecati mollitia exercitationem quisquam dolorem nisi, consequatur id impedit. Cumque sapiente molestiae ea eligendi, possimus quam similique dolorum, a iste illo dignissimos animi doloribus?</p>
            </div>
            <div className={styles.mainPostImageName}>
              <div className={styles.mainPostImage}>
                <Image src={temp} width="30%" height="30%" layout="responsive" quality="100" />
              </div>
              <h5 className={styles.mainPostName}>First Last</h5>
            </div>
          </div>
        </div>

      </div>

      <hr className={styles.newsLine} />

      <div className={styles.storyContainer}>
        <NewsPost></NewsPost>
        <NewsPost></NewsPost>
      </div>

      {/* <div className={styles.aboutContainer}>
        <div className={styles.aboutHeadingContainer}>
          <h2 className={styles.aboutHeading}>
            <span className={styles.yellowDark}>ABOUT</span> Windsor Chess
          </h2>
          <p className={styles.aboutDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente aliquid error praesentium nam, voluptate vel blanditiis dignissimos asperiores? Quibusdam et maxime id natus possimus praesentium deleniti qui facere deserunt.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <Image src={homeBackground} width="100%" height="71%" layout="responsive" quality="100" />
        </div>
      </div>  */}
    </>
  )
}

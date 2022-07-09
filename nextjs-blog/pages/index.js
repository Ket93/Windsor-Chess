import Head from 'next/head'
import Link from 'next/link';
import NewsPost from "../components/newsPost/newsPost";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import TournamentCard from "../components/tournamentCard/tournamentCard";
import Image from 'next/image'
import alan from "../images/alan.jpg";
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
          <a href="main_news"><Image src={alan} width="100%" height="50%" layout="responsive" quality="100" /></a>
        </div>

        <div className={styles.newsInformation}>
          <div className={styles.newsTitleDate}>
            <a href="main_news"><h3 className={styles.mainPostTitle}> Here is the First News Post! </h3></a>
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
                <Image src={alan} width="30%" height="30%" layout="responsive" quality="100" />
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

      <div className={styles.footerDivider}></div>

      <div className={styles.tournamentsOuter}>
        <div className={styles.tournamentsContainer}>
          <h2 className={styles.tournamentTitle}>Upcoming Tournaments</h2>

          <div className={styles.tournamentsCardContainerOuter}>
            <div className={styles.tournamentsCardContainer}>
              <TournamentCard date={'June 16 2022'} time={'Starting at 5:00PM EST'} title={'TITLE'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aliquam pariatur exercitationem natus! Ducimus ea pariatur, aut adipisci sapiente aperiam saepe quas, harum eveniet dolores ipsam veritatis eum, ut quo.'}
                location={'Location: Adam\'s House'}></TournamentCard>
              <TournamentCard date={'June 16 2022'} time={'Starting at 5:00PM EST'} title={'TITLE'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aliquam pariatur exercitationem natus! Ducimus ea pariatur, aut adipisci sapiente aperiam saepe quas, harum eveniet dolores ipsam veritatis eum, ut quo.'}
                location={'Location: Adam\'s House'}></TournamentCard>
            </div>

            <div className={styles.tournamentsCardContainer}>
              <TournamentCard date={'June 16 2022'} time={'Starting at 5:00PM EST'} title={'TITLE'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aliquam pariatur exercitationem natus! Ducimus ea pariatur, aut adipisci sapiente aperiam saepe quas, harum eveniet dolores ipsam veritatis eum, ut quo.'}
                location={'Location: Adam\'s House'}></TournamentCard>
              <TournamentCard date={'June 16 2022'} time={'Starting at 5:00PM EST'} title={'TITLE'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aliquam pariatur exercitationem natus! Ducimus ea pariatur, aut adipisci sapiente aperiam saepe quas, harum eveniet dolores ipsam veritatis eum, ut quo.'}
                location={'Location: Adam\'s House'}></TournamentCard>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}

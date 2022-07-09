import Image from 'next/image'
import homeBackground from "../../images/homeBackground.png";
import temp from "../../images/temp.png";
import styles from "./tournamentCard.module.css";

function tournamentCard({ date, time, title, description, location }) {

    return (
        <>
            <div className={styles.tournamentCardContainer}>
                <h3 className={styles.tournamentDate}>{date}</h3>
                <p className={styles.tournamentTime}>{time}</p>
                <h4 className={styles.tournamentTitle}>{title}</h4>
                <p className={styles.tournamentDescription}>{description}</p>
                <p className={styles.tournamentLocation}>{location}</p>
            </div>
        </>
    )
}

export default tournamentCard; 
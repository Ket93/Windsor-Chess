import Image from 'next/image'
import homeBackground from "../../images/homeBackground.png";
import temp from "../../images/temp.png";
import styles from "./newsPost.module.css";

function NewsPost({ user }) {
    return (
        <>
            <div className={styles.newsPostContainer}>
                <a href=""><Image src={temp} width="50%" height="30%" layout="responsive" quality="100" /></a>
                <a className={styles.anchor} href=""><h3 className={styles.postTitle}>Learn How to Pre-render Pages Using Static Generation with Next.js</h3></a>
                <p className={styles.postDate}>June 2, 2022</p>
                <p className={styles.postDesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae ratio maxime quidem illis placuit quieta. Duo Reges: constructio interrete. Nam quid possumus facere melius?</p>
                <div className={styles.postImageName}>
                    <div className={styles.postImage}>
                        <Image src={temp} width="30%" height="30%" layout="responsive" quality="100" />
                    </div>
                    <h5 className={styles.postName}>First Last</h5>
                </div>
            </div>
        </>
    )
}

export default NewsPost; 
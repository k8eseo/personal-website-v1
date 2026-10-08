import styles from './About.module.css'

import profilePic from '/img/about/profile.jpg'
import linkedinLogo from '/img/about/linkedin.png'
import emailLogo from '/img/about/email.png'
import githubLogo from '/img/about/github.png'

function About() {

    const openGithub = () => {
        window.open("https://github.com/k8eseo");
    };

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/katieseo/");
    };

    const openEmail = () => {
        window.open("mailto:katieeseo@gmail.com");
    };

    return(
        <section className={styles.container} id="about">
            <img className={styles.picture} src={profilePic} width="500" alt="Profile picture"></img>
            <div className={styles.content}>
                <h1 className={styles.title}>hi, i'm katie.</h1>
                <p className={styles.about}>
                    I graduated from the University of Rochester in 2026 with a B.S. in Computer Science. I'm from Northern VA, and I love watching
                        code develop and come to life! Always interested in learning more.
                </p>
                <div className={styles.logos}>
                    <img src={githubLogo} alt="Github logo" width="50" onClick={openGithub}></img>
                    <img src={linkedinLogo} alt="LinkedIn logo" width="50" onClick={openLinkedin}></img>
                    <img src={emailLogo} alt="Email logo" width="50" onClick={openEmail}></img>
                </div>
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}

export default About
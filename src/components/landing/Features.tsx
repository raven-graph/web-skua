import styles from './Features.module.css';

export default function Features() {
    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Structure over Noise</h2>
                <p className={styles.subheading}>Answers the questions charts can&apos;t.</p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>⚡</div>
                        <h3>Directional Influence</h3>
                        <p>Don&apos;t just see correlations. See who is pulling who. Identify lead-lag relationships in real-time.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>🕸</div>
                        <h3>Regime Detection</h3>
                        <p>Know when a narrative is structural or isolated. Spot when clusters like AI or Memes start to fracture.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>🎯</div>
                        <h3>Context Layer</h3>
                        <p>Stop guessing if a move is real. Validate breakouts by checking if the underlying structure supports them.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

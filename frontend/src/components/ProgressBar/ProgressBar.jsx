import styles from './ProgressBar.module.css';

function ProgressBar({ steps, currentStep }) {
    const progress = Math.round((currentStep / (steps.length - 1)) * 100);

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBarTrack}>
                <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
            </div>

            <div className={styles.steps}>
                {steps.map((step, index) => (
                    <div className={styles.stepContainer} key={step.name}>
                        <div
                            key={step.name}
                            className={`${styles.step} ${index <= currentStep ? styles.completed : ''}`}
                        >
                            {step.icon && (
                                <img
                                    src={step.icon}
                                    alt={step.name}
                                    className={styles.icon}
                                    loading="lazy"
                                />
                            )}
                        </div>
                        <span className={styles.label}>{step.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProgressBar;


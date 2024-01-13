import styles from './Button.module.scss';

export default function Button (props) {
    const {children, disabled = false} = props;

    return (
        <button
            {...props}
            className={styles.button}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
import { useEffect, useState } from 'react';
import styles from './Input.module.css';

function Input({ label, type = 'text', value, onChange, placeholder, options = [] }) {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (type === 'select' && options.length > 0 && (value === undefined || value === '')) {
            onChange(options[0].value);
            setIsFocused(true);
        }
    }, []);

    return (
        <div
            className={`${styles.inputContainer} ${isFocused || value ? styles.focused : ''
                }`}
        >
            <label className={styles.label}>{label || placeholder}</label>
            {type === 'select' ? (
                <select
                    className={styles.input}
                    value={value}
                    onChange={onChange}
                    onBlur={() => setIsFocused(false)}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            )}
        </div>
    );
}

export default Input;

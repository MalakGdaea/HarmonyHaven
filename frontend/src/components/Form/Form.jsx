import { useMemo, useState } from "react";
import Input from "../Input/Input";
import styles from "./Form.module.css";
import Button from "../Button/Button";


export default function Form({ fields, onSubmit, submitLabel = "Submit" }) {

    const initialValues = useMemo(
        () =>
            Object.fromEntries(
                Object.entries(fields).map(([key, fieldSetteings]) => [key, fieldSetteings.value ?? ""])
            ),
        [fields]
    );

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (name, fieldSetteings) => (e) => {
        const val = e?.target ? e.target.value : e;
        setValues((v) => ({ ...v, [name]: val }));
        if (fieldSetteings.onChange) fieldSetteings.onChange(val);
    };

    const handleBlur = (name, fieldSetteings) => () => {
        const msg = fieldSetteings.validateFunction ? fieldSetteings.validateFunction(values[name]) : null;
        setErrors((er) => ({ ...er, [name]: msg }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationResult = {};
        for (const [name, fieldSetteings] of Object.entries(fields)) {
            validationResult[name] = fieldSetteings.validateFunction ? fieldSetteings.validateFunction(values[name]) : null;
        }
        setErrors(validationResult);
        const ok = Object.values(validationResult).every((m) => !m);
        if (ok) onSubmit?.(values);
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
            {Object.keys(fields).map((name) => {
                const fieldSetteings = fields[name];
                return (
                    <div key={name} className={styles.field}>
                        <Input
                            label={fieldSetteings.label ?? name}
                            value={values[name] ?? ''}
                            onChange={handleChange(name, fieldSetteings)}
                            onBlur={handleBlur(name, fieldSetteings)}
                            placeholder={fieldSetteings.placeholder ?? name}
                            type={fieldSetteings.type || "text"}
                            validateFunction={fieldSetteings.validateFunction}
                            options={fieldSetteings.options}
                        />
                        {errors[name] && <small className={styles.error}>{errors[name]}</small>}
                    </div>
                );
            })}
            <div className={styles.submitButton}>
                <Button label={submitLabel} type="submit" />
            </div>
        </form>
    );
}

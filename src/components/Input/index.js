import PhoneInput from "react-phone-input-2";
import styles from "./styles.module.scss";

export function Input({ type = "text", label = "", ...rest }) {

  return (
    <div className={styles.container}>
      {type === "textarea" ? (
        <>
          <label>{label}</label>
          <textarea
            className={`${styles.input} ${rest.error && styles.invalid}`}
            {...rest}
          ></textarea>
        </>
      ) : type === "tel" ? (
        <>
          <label>{label}</label>
          <PhoneInput
            country={"br"}
            value={rest.value}
            onChange={rest.onChange}
            placeholder="55 34"
            specialLabel=""
            inputClass={`${styles.input} ${rest.error && styles.invalid}`}
            inputStyle={{paddingLeft: 60}}
          />
        </>
      ) : (
        <>
          <label>{label}</label>
          <input
            type={type}
            className={`${styles.input} ${rest.error && styles.invalid}`}
            {...rest}
          />
        </>
      )}
    </div>
  );
}

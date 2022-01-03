import { useState } from "react";
import styles from "./styles.module.scss";

export function InputIcon({iconComponent, ...rest }) {

  return (
    <div className={styles.container}>
      <div className={`${styles.iconLeft} ${rest.error && styles.invalidIcon}`}>
        {iconComponent}
      </div>
      <input
        className={`${styles.input} ${rest.error && styles.invalid}`}
        {...rest}
      />
    </div>
  );
}

import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputIconProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  iconComponent: React.ReactNode;
  error?: unknown;
}
export const InputIcon = React.forwardRef<HTMLInputElement, InputIconProps>(
  ({ iconComponent, error, ...rest }: InputIconProps, ref) => {
    return (
      <div className={styles.container}>
        <div className={`${styles.iconLeft} ${error && styles.invalidIcon}`}>
          {iconComponent}
        </div>
        <input
          ref={ref}
          className={`${styles.input} ${error && styles.invalid}`}
          {...rest}
        />
      </div>
    );
  }
);

InputIcon.displayName = "InputIcon";

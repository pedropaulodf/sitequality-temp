import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import styles from "./styles.module.scss";

export function ButtonCircleArrow({
  left = false,
  bgColor = "#3E7CC5",
  handleClick,
  ...rest
}) {
  return (
    <>
      {handleClick === undefined ? (
        <div
          {...rest}
          className={styles.btn}
          style={{ backgroundColor: bgColor, zIndex: 100 }}
        >
          {left ? <FiArrowLeft /> : <FiArrowRight />}
        </div>
      ) : (
        <div
          {...rest}
          className={styles.btn}
          style={{ backgroundColor: bgColor, zIndex: 100 }}
        >
          {left ? <FiArrowLeft /> : <FiArrowRight />}
        </div>
      )}
    </>
  );
}

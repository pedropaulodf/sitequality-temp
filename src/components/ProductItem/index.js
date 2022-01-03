import styles from "./styles.module.scss";

export function ProductItem({ name, alt, imagePath }) {
  return (
    <div className={styles.boxProduct}>
      <div className={styles.boxProductName}>
        <p>{name}</p>
      </div>
      <div className={styles.boxImage}>
        <img src={imagePath} alt={alt} />
      </div>
    </div>
  );
}

import styles from "./styles.module.scss";

export interface SolucaoItemProps {
  name: string;
  alt?: string;
  imagePath?: string;
  text?: string[];
}

export function SolucaoItem({ name, alt, imagePath, text }: SolucaoItemProps) {
  return (
    <div className={styles.boxProduct}>
      <div className={styles.boxProductName}>
        <p>{name}</p>
      </div>
      {imagePath && (
        <div className={styles.boxImage}>
          <img src={imagePath} alt={alt} />
        </div>
      )}
      {text && text.length > 0 && (
        <ul>
          {text.map((t, i) => (
            <li key={`si-${name}-${i}`}>
              <div className={styles.itemBox}>
                <div className={styles.itemNumber}>{i + 1}</div>
                {t}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

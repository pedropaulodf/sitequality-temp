import Link from "next/link";
import styles from "./styles.module.scss";

export function ButtonOutlined({ href, text }) {
  return (
    <Link href={href}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
}

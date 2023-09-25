import Link from "next/link";
import { FiArrowDownCircle } from "react-icons/fi";
import styles from "./styles.module.scss";

export function ButtonDownload({ href, text }) {
  return (
    <Link href={href}>
      <button className={styles.container}>
        {text}
        <FiArrowDownCircle />
      </button>
    </Link>
  );
}

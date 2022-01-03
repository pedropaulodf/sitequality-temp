import Link from "next/link";
import styles from "./styles.module.scss";
import { FiArrowDownCircle } from "react-icons/fi";

export function ButtonDownload({ href, text }) {
  return (
    <Link href={href}>
      <a download>
        <button className={styles.container}>
          {text}
          <FiArrowDownCircle />
        </button>
      </a>
    </Link>
  );
}

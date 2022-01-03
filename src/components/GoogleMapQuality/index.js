import styles from "./styles.module.scss";

export default function GoogleMapQuality() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.5215379622937!2d-48.27863076348666!3d-18.927580432210007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4450260a69ff1%3A0xc3d3b926dcb55a4a!2sR.+Caraj%C3%A1s%2C+604+-+Tabajaras%2C+Uberl%C3%A2ndia+-+MG%2C+Brasil!5e0!3m2!1spt-BR!2sbr!4v1461076824194"
        width="100%"
        height="320"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}

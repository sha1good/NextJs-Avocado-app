import styles from "../styles/Contact.module.css";
import Circle from "../components/Circle";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-45vh" top="-20vh" />
      <Circle backgroundColor="blue" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          className={styles.inputSmall}
        />
        <input type="text" placeholder="Phone" className={styles.inputSmall} />
        <input type="text" placeholder="Email" className={styles.inputLarge} />
        <input
          type="text"
          placeholder="Subject"
          className={styles.inputLarge}
        />
        <textarea
          type="text"
          placeholder="Message"
          rows={6}
          className={styles.textArea}
        />
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;

import styles from "../styles/Testimonials.module.css";
import Circle from "./Circle";
import { users } from "../data";
import Image from "next/legacy/image";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="darkBlue" top="-70vh" left="0" right="0" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div className={styles.card} key={user.id}>
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}/img/${user.logo}`}
              alt=""
              width="30"
              height="30"
              objectFit="cover"
            />
            <p className={styles.comment}>{user.comment}</p>
            <div className={styles.person}>
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}/img/${user.avatar}`}
                alt=""
                width="45px"
                height="45"
                objectFit="cover"
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

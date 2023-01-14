import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/legacy/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact">
            <span className={styles.linkText}>WORK WITH US</span>
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}/img/link.png`}
              alt=""
              width="40px"
              height="40px"
              objectFit="cover"
            />
          </Link>
        </h1>
      </div>
      <div className={styles.center}>
        <div className={styles.cardItem}>
          45 ADAM STREET, <br />
          NIGERIA
        </div>
        <div className={styles.cardItem}>
          CONTACT@SHA1.DEV, <br />
          NIGERIA
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;

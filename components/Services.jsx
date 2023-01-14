import Link from "next/link";
import styles from "../styles/Services.module.css";
import Image from "next/legacy/image";

const Service = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What We Can Do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link href={`/products/${service.name}`} key={service.id}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.category}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`${process.env.NEXT_PUBLIC_URL}/img/${service?.video}`}
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
                    alt=""
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Service;

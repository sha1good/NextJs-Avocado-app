import styles from "../../styles/Products.module.css";
import { data } from "../../data";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

const Products = ({ product }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Design for Your Product</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near NY"
        />
      </Head>
      <div className={styles.left}>
        {product.images.map((img) => (
          <div className={styles.imgContainer} key={img.id}>
            <Image src={img.url} alt="" objectFit="cover" layout="fill" />
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Products;

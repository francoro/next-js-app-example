import Head from "next/head";
import styles from "../styles/Layout.module.css";
export default function Layout({
  title,
  keywords,
  description,
  children,
}: any) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Dj events | Find the hottest parties",
  description: "Find the latest Dj and other musical events",
  kerywords: "music, dj , edm, events",
};

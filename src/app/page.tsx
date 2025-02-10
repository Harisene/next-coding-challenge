import ItemContainer from "@/components/ItemContainer";
import ItemCountContainer from "@/components/ItemCountContainer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Michael&apos;s Amazing Web Store</p>
        <ItemCountContainer />
      </div>
      <ItemContainer />
    </main>
  );
}

import ItemContainer from "@/components/ItemContainer";
import ItemCountContainer from "@/components/ItemCountContainer";
import styles from "./page.module.css";
import strings from "@/resources/strings";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{strings.storeName}</p>
        <ItemCountContainer />
      </div>
      <ItemContainer />
    </main>
  );
}

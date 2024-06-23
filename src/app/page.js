import Image from "next/image";
import styles from "./page.module.css";
import Link from "../../components/Common/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <Link href={'terms'}>aaa</Link>
            
            main page
        </main>
    );
}

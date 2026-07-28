import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? '(미설정)';
  const blobUrl = process.env.NEXT_PUBLIC_BLOB_URL ?? '(미설정)';

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <div className={styles.intro}>
            <h3>Next.js 앱서비스 배포 - 스테이징</h3>
            <ol>
              <li>API_URL: {apiUrl}</li>
              <li>BLOB_URL: {blobUrl}</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}

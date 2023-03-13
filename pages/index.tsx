import Head from "next/head";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Home() {
  const [spawnedUrl, setSpawnedUrl] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const spawn = async () => {
      const response = await fetch("/api/spawn");
      if (!response.ok) {
        setError(true);
      } else {
        const data = await response.json();
        setSpawnedUrl(data.ready_url);
      }
    };
    spawn();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {spawnedUrl ? (
          <iframe src={`${spawnedUrl}`} />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {error ? (
              <p>Oops… Something went wrong</p>
            ) : (
              <Image src="/loading.gif" width={16} height={16} alt="Loading…" />
            )}
          </div>
        )}
      </main>
    </>
  );
}

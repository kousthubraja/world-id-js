import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { utils } from "@worldcoin/id";
import { WidgetProps } from "@worldcoin/id";
import { useEffect } from "react";

const WorldIDWidget = dynamic<WidgetProps>(() => import("@worldcoin/id").then((mod) => mod.WorldIDWidget), { ssr: false });

const widgetProps: WidgetProps = {
  actionId: "wid_staging_PCNQeDC5CX",
  signal: "user-id-1",
  enableTelemetry: true,
  appName: "ConfCon",
  signalDescription: "Get your ticket to ConfCon 2023",
  theme: "dark",
  debug: true, // DO NOT SET TO `true` IN PRODUCTION
  onSuccess: (result) => console.log(result),
  onError: ({ code, detail }) => console.log({ code, detail }),
  onInitSuccess: () => console.log("Init successful"),
  onInitError: (error) => console.log("Error while initialization World ID", error),
};

const Home: NextPage = () => {
  useEffect(() => {
    console.log("Random Number from utils: ", utils.randomNumber(1, 100));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WorldIDWidget {...widgetProps} />
      </main>
    </div>
  );
};

export default Home;

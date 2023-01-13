import React from "react";
import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import Head from "next/head";
import Web3sdksGuideFooter from "../components/guide/Web3sdksGuideFooter";
import "./styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdks Signature Based Minting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="web3sdks Example Repository to Showcase signature based minting on an NFT Collection contract"
        />
        <meta name="keywords" content="web3sdks signature based minting" />
      </Head>
      <Component {...pageProps} />
      <Web3sdksGuideFooter />
    </Web3sdksProvider>
  );
}

export default MyApp;

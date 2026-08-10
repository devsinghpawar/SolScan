import { useState, useCallback } from "react";
import {
  transact,
  Web3MobileWallet,
} from "@solana-mobile/mobile-wallet-adapter-protocol-web3js";
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";
import { useWalletStore } from "../stores/wallet-store";

const APP_IDENTITY = {
  name: "SolScan",
  uri: "https://solscan.io",
  icon: "favicon.ico",
};

export function useWallet() {
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [sending, setSending] = useState(false);
  const isDevnet = useWalletStore((s) => s.isDevnet);

  const cluster = isDevnet ? "devnet" : "mainnet-beta";
  const connection = new Connection(clusterApiUrl(cluster), "confirmed");

  // ============================================
  // CONNECT — Ask Phantom to authorize our app
  // ============================================

  const connect = useCallback(async () => {
    setConnecting(true);
    try {
      const authResult = await transact(async (wallet: Web3MobileWallet) => {
        // This opens Phantom, shows an "Authorize" dialog
        // User taps "Approve" → we get their public key
        const result = await wallet.authorize({
          chain: `solana:${cluster}`,
          identity: APP_IDENTITY,
        });
        return result;
      });

      const pubkey = new PublicKey(
        Buffer.from(authResult.accounts[0].address, "base64"),
      );
      setPublicKey(pubkey);
      return pubkey;
    } catch (error: any) {
      console.error("Connect failed:", error);
      throw error;
    } finally {
      setConnecting(false);
    }
  }, [cluster]);

  // ============================================
  // DISCONNECT
  // ============================================
  const disconnect = useCallback(() => {
    setPublicKey(null);
  }, []);

  // GET BALANCE
  const getBalance = useCallback(() => {}, []);

  const sendSOL = useCallback(() => {}, []);

  return {
    publicKey,
    connected: !!publicKey,
    connecting,
    sending,
    connect,
    disconnect,
    getBalance,
    sendSOL,
    connection,
  };
}

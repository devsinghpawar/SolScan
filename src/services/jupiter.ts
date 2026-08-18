const JUPITER_API = "";
const JUPITER_API_KEY = "";

// well-known token mints on solana mainnet
export const TOKENS = {
  SOL: "So11111111111111111111111111111111111111112", // wrapped SOL
  USDC: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  USDT: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
  BONK: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
  JUP: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
  WIF: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
};

// token metadata for display
export const TOKEN_INFO: Record<
  string,
  { symbol: string; name: string; decimals: number; color: string }
> = {
  [TOKENS.SOL]: {
    symbol: "SOL",
    name: "Solana",
    decimals: 9,
    color: "#9945FF",
  },
  [TOKENS.USDC]: {
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    color: "#2775CA",
  },
  [TOKENS.USDT]: {
    symbol: "USDT",
    name: "Tether",
    decimals: 6,
    color: "#26A17B",
  },
  [TOKENS.BONK]: {
    symbol: "BONK",
    name: "Bonk",
    decimals: 5,
    color: "#F7931A",
  },
  [TOKENS.JUP]: {
    symbol: "JUP",
    name: "Jupiter",
    decimals: 6,
    color: "#14F195",
  },
  [TOKENS.WIF]: {
    symbol: "WIF",
    name: "dogwifhat",
    decimals: 6,
    color: "#E91E63",
  },
};

// list of available tokens for the picker
export const AVAILABLE_TOKENS = [
  TOKENS.SOL,
  TOKENS.USDC,
  TOKENS.USDT,
  TOKENS.BONK,
  TOKENS.JUP,
  TOKENS.WIF,
];

export interface QuoteResponse {
  inputMint: string;
  inAmount: string;
  outputMint: string;
  outAmount: string;
  otherAmountThreshold: string;
  swapMode: string;
  slippageBps: number;
  priceImpactPct: string;
  routePlan: Array<{
    swapInfo: {
      ammKey: string;
      label: string;
      inputMint: string;
      outputMint: string;
      inAmount: string;
      outAmount: string;
      feeAmount?: string;
      feeMint?: string;
    };
    percent: number;
  }>;
}

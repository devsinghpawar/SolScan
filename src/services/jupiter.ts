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

// ============================================
// GET QUOTE - how much will user receive?
// ============================================
export async function getSwapQuote(
  inputMint: string,
  outputMint: string,
  amount: number,
  slippageBps: number = 50,
): Promise<QuoteResponse> {
  console.log("[jupiter] ========== getSwapQuote ==========");
  console.log("[jupiter] inputMint:", inputMint);
  console.log("[jupiter] outputMint:", outputMint);
  console.log("[jupiter] amount (smallest unit):", amount);
  console.log("[jupiter] slippageBps:", slippageBps, `(${slippageBps / 100}%)`);

  const params = new URLSearchParams({
    inputMint,
    outputMint,
    amount: amount.toString(),
    slippageBps: slippageBps.toString(),
  });

  const url = `${JUPITER_API}/quote?${params}`;
  console.log("[jupiter] fetching quote from:", url);
  console.log(
    "[jupiter] using API key:",
    JUPITER_API_KEY ? "yes (set)" : "no (missing!)",
  );

  let lastError: Error | null = null;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`[jupiter] attempt ${attempt}/3...`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-api-key": JUPITER_API_KEY,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("[jupiter] quote failed:", response.status, errorText);
        throw new Error(`Jupiter quote failed: ${response.status}`);
      }

      const quote = await response.json();
      console.log("[jupiter] quote received:");
      console.log("[jupiter]   - inAmount:", quote.inAmount);
      console.log("[jupiter]   - outAmount:", quote.outAmount);
      console.log("[jupiter]   - priceImpactPct:", quote.priceImpactPct, "%");
      console.log("[jupiter]   - routes:", quote.routePlan?.length || 0);

      if (quote.routePlan?.length > 0) {
        console.log(
          "[jupiter]   - route:",
          quote.routePlan
            .map((r: { swapInfo: { label: string } }) => r.swapInfo.label)
            .join(" -> "),
        );
      }
      console.log("[jupiter] ======================================");
      return quote;
    } catch (err) {
      lastError = err as Error;
      console.log(`[jupiter] attempt ${attempt} failed:`, lastError.message);
      if (attempt < 3) {
        console.log("[jupiter] retrying in 1 second...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }

  throw lastError || new Error("Failed to get quote after 3 attempts");
}

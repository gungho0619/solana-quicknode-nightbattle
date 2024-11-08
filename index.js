require("dotenv").config();
const {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} = require("@solana/web3.js");

const QUICKNODE_RPC =
  process.env.QUICKNODE_RPC || clusterApiUrl("mainnet-beta"); // Use environment variable or fallback to mainnet
const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);
const WALLET_ADDRESS =
  process.env.WALLET_ADDRESS || "eNdoHuFvLQYLx1muSHfkZEGUXmH3c9tQoG3MK8unZA4"; // Use environment variable or fallback

async function getWalletBalance() {
  try {
    const walletPublicKey = new PublicKey(WALLET_ADDRESS);
    const balance = await SOLANA_CONNECTION.getBalance(walletPublicKey);
    console.log(`Wallet balance: ${balance / LAMPORTS_PER_SOL} SOL`);
  } catch (error) {
    console.error("Error fetching wallet balance:", error.message);
  }
}

// Call the function to check balance
getWalletBalance();

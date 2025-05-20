import { useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Установите MetaMask");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text mb-6">
        Humanode DEX MVP
      </h1>

      {walletAddress ? (
        <p className="text-lg bg-gray-800 px-4 py-2 rounded-lg">
          ✅ Подключен: {walletAddress}
        </p>
      ) : (
        <button
          onClick={connectWallet}
          className="px-6 py-3 text-white bg-teal-600 hover:bg-teal-500 rounded-xl text-lg font-medium transition"
        >
          Подключить кошелёк
        </button>
      )}
    </main>
  );
}

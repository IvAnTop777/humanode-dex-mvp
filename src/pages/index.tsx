import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error("Ошибка подключения:", err);
      }
    } else {
      alert("Установите MetaMask");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🦊 Humanode DEX MVP</h1>
      {walletAddress ? (
        <p>✅ Подключен: {walletAddress}</p>
      ) : (
        <button
          onClick={connectWallet}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "16px",
            backgroundColor: "#f6851b",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Подключить кошелёк
        </button>
      )}
    </div>
  );
}

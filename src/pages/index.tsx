import React, { useState } from 'react';
import { ethers } from 'ethers';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Установите MetaMask!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error(error);
      alert('Ошибка подключения кошелька');
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Humanode DEX</h1>
      {walletAddress ? (
        <p>Кошелёк подключен: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Подключить кошелёк
        </button>
      )}
    </main>
  );
}

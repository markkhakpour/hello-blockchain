import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI, MARKCHAIN_CONFIG } from "./contract";
import "./App.css";

function App() {
  const [wallet, setWallet] = useState(null);
  const [greeting, setGreeting] = useState("");
  const [newGreeting, setNewGreeting] = useState("");
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  // Check if wallet is connected on load
  useEffect(() => {
    checkWalletConnection();
  }, []);

  // Load greeting when wallet connects
  useEffect(() => {
    if (wallet) {
      loadGreeting();
    }
  }, [wallet]);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setWallet(accounts[0]);
      }
    }
  };

  const connectWallet = async () => {
    setError("");
    if (!window.ethereum) {
      setError("Please install MetaMask to use this app!");
      return;
    }

    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWallet(accounts[0]);

      // Try to switch to MarkChain network
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: MARKCHAIN_CONFIG.chainId }],
        });
      } catch (switchError) {
        // Network doesn't exist, add it
        if (switchError.code === 4902) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [MARKCHAIN_CONFIG],
          });
        }
      }
    } catch (err) {
      setError("Failed to connect wallet: " + err.message);
    }
  };

  const loadGreeting = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
      const currentGreeting = await contract.greet();
      setGreeting(currentGreeting);
    } catch (err) {
      console.error("Error loading greeting:", err);
      setError("Error loading greeting. Make sure you're on MarkChain network.");
    }
  };

  const updateGreeting = async (e) => {
    e.preventDefault();
    if (!newGreeting.trim()) return;

    setLoading(true);
    setError("");
    setTxHash("");

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const tx = await contract.setGreeting(newGreeting);
      setTxHash(tx.hash);

      // Wait for transaction to be mined
      await tx.wait();

      // Reload the greeting
      await loadGreeting();
      setNewGreeting("");
    } catch (err) {
      setError("Transaction failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const shortenAddress = (addr) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <span className="logo-icon">⛓️</span>
            <h1>Greeter DApp</h1>
          </div>
          {wallet ? (
            <div className="wallet-badge">
              <span className="dot"></span>
              {shortenAddress(wallet)}
            </div>
          ) : (
            <button className="connect-btn" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </header>

        {/* Main Content */}
        <main className="main">
          {!wallet ? (
            <div className="welcome-card">
              <div className="welcome-icon">👋</div>
              <h2>Welcome to Greeter DApp</h2>
              <p>Connect your wallet to interact with the smart contract on MarkChain</p>
              <button className="connect-btn large" onClick={connectWallet}>
                Connect MetaMask
              </button>
            </div>
          ) : (
            <>
              {/* Current Greeting Card */}
              <div className="greeting-card">
                <div className="card-label">Current Greeting on Blockchain</div>
                <div className="greeting-text">
                  {greeting ? `"${greeting}"` : "Loading..."}
                </div>
                <button className="refresh-btn" onClick={loadGreeting}>
                  🔄 Refresh
                </button>
              </div>

              {/* Update Greeting Form */}
              <div className="update-card">
                <h3>Update Greeting</h3>
                <form onSubmit={updateGreeting}>
                  <input
                    type="text"
                    placeholder="Enter new greeting..."
                    value={newGreeting}
                    onChange={(e) => setNewGreeting(e.target.value)}
                    disabled={loading}
                  />
                  <button type="submit" disabled={loading || !newGreeting.trim()}>
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      "Update on Blockchain"
                    )}
                  </button>
                </form>
              </div>

              {/* Transaction Status */}
              {txHash && (
                <div className="tx-card success">
                  <span>✅ Transaction sent!</span>
                  <code>{shortenAddress(txHash)}</code>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="tx-card error">
                  <span>❌ {error}</span>
                </div>
              )}
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>
            Contract: <code>{shortenAddress(CONTRACT_ADDRESS)}</code>
          </p>
          <p>Built on MarkChain (Tenderly Virtual TestNet)</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

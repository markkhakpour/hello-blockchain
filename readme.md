# 🌐 Hello Blockchain - Full-Stack DApp

A full-stack decentralized application (DApp) featuring a Greeter smart contract with a React frontend, deployed on Tenderly's MarkChain virtual testnet.

🔗 **Live Demo:** [hi.khakpour.me](https://hi.khakpour.me)

---

## 🛠️ Tech Stack

### Smart Contract
- **Solidity** - Smart contract language
- **Hardhat** - Ethereum development framework
- **Tenderly** - Virtual testnet (MarkChain)

### Frontend
- **React** - UI framework
- **Vite** - Build tool
- **ethers.js** - Blockchain interaction library

### DevOps
- **Docker** - Containerization
- **Nginx** - Web server
- **Railway** - Cloud hosting
- **Cloudflare** - DNS & CDN
- **GitHub** - Version control & CI/CD

---

## 📁 Project Structure

```
hello-blockchain/
├── contracts/
│   └── Greeter.sol           # Solidity smart contract
├── scripts/
│   └── deploy.js             # Deployment script
├── test/
│   └── Greeter.test.js       # Contract tests
├── frontend/                  # React DApp
│   ├── src/
│   │   ├── App.jsx           # Main component
│   │   ├── App.css           # Styles
│   │   └── contract.js       # Contract ABI & config
│   ├── Dockerfile            # Docker configuration
│   ├── nginx.conf            # Nginx config for SPA
│   └── package.json
├── .env                      # Secrets (not committed)
├── .gitignore
├── hardhat.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v22+
- MetaMask browser extension

### 1. Clone & Install

```bash
git clone https://github.com/markkhakpour/hello-blockchain.git
cd hello-blockchain
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root:

```env
TENDERLY_VIRTUAL_TESTNET_RPC=your_tenderly_rpc_url
PRIVATE_KEY=your_wallet_private_key
TENDERLY_USERNAME=your_username
TENDERLY_PROJECT=your_project
```

### 3. Compile & Test Contract

```bash
npx hardhat compile
npx hardhat test
```

### 4. Deploy to MarkChain

```bash
npx hardhat run scripts/deploy.js --network markchain
```

### 5. Run Frontend Locally

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🐳 Docker Deployment

Build and run with Docker:

```bash
cd frontend
docker build -t greeter-dapp .
docker run -p 80:80 greeter-dapp
```

---

## 📝 Smart Contract

**Contract Address:** `0xb3289f1857c8f0f4b7f9E523b5cf68d01CD46baa`

The Greeter contract:
- ✅ Stores a greeting message on the blockchain
- ✅ Allows anyone to read the greeting (`greet()`)
- ✅ Allows updating the greeting (`setGreeting()`)
- ✅ Emits `GreetingChanged` event on updates

### Contract ABI

```solidity
function greet() public view returns (string memory)
function setGreeting(string memory _newGreeting) public
event GreetingChanged(string oldGreeting, string newGreeting)
```

---

## 🦊 Using the DApp

1. Install [MetaMask](https://metamask.io)
2. Add MarkChain network:
   - **Network Name:** MarkChain
   - **Chain ID:** 73571
   - **RPC URL:** (Your Tenderly RPC)
   - **Symbol:** ETH
3. Visit [hi.khakpour.me](https://hi.khakpour.me)
4. Connect your wallet
5. Read and update the greeting!

---

## 📚 What I Learned

- ✅ Writing Solidity smart contracts
- ✅ Testing with Hardhat & Chai
- ✅ Deploying to Tenderly virtual testnet
- ✅ Building React frontends for Web3
- ✅ Using ethers.js for blockchain interaction
- ✅ MetaMask wallet integration
- ✅ Dockerizing applications
- ✅ Deploying to Railway
- ✅ DNS management with Cloudflare
- ✅ Git/GitHub version control

---

## 🔗 Links

- **Live DApp:** [hi.khakpour.me](https://hi.khakpour.me)
- **GitHub:** [github.com/markkhakpour/hello-blockchain](https://github.com/markkhakpour/hello-blockchain)
- **Tenderly:** [dashboard.tenderly.co](https://dashboard.tenderly.co)

---

Built while learning Ethereum development! 🎓🚀

# 🌐 Hello Blockchain - My First Smart Contract

A simple Greeter smart contract built with Hardhat, deployed to Tenderly's MarkChain virtual testnet.

## 🛠️ Tech Stack

- **Solidity** - Smart contract language
- **Hardhat** - Ethereum development environment
- **Tenderly** - Virtual testnet (MarkChain)
- **Node.js** - Runtime environment

## 📁 Project Structure

```
hello-world/
├── contracts/
│   └── Greeter.sol       # Smart contract
├── scripts/
│   └── deploy.js         # Deployment script
├── test/
│   └── Greeter.test.js   # Tests
├── .env                  # Secrets (don't commit!)
├── .gitignore
├── hardhat.config.js
└── package.json
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env
```
Then edit `.env` with your Tenderly RPC URL and private key.

### 3. Compile Contract
```bash
npx hardhat compile
```

### 4. Run Tests
```bash
npx hardhat test
```

### 5. Deploy to MarkChain
```bash
npx hardhat run scripts/deploy.js --network markchain
```

## 📝 Smart Contract

The Greeter contract:
- Stores a greeting message on the blockchain
- Allows anyone to read the greeting
- Allows updating the greeting
- Emits an event when the greeting changes

## 📚 What I Learned

- Writing Solidity smart contracts
- Using Hardhat for development
- Testing smart contracts
- Deploying to Tenderly virtual testnet
- Managing secrets with environment variables

---
Built while learning Ethereum development! 🎓


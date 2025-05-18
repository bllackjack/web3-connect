# ValWeb3 - Token Transfer Interface

A modern web3 application that provides a seamless interface for managing and transferring your cryptocurrency tokens. Connect your wallet, view your token balances, and transfer funds with ease.

## 🎥 Demo Videos

1. [Video Demo Link](https://www.loom.com/share/9e9d55db99e844bd8d77524e72a542f2?sid=c46714cb-b676-4942-b9cb-1317a9ef3a46)

2. [Validation of token transfers](https://www.loom.com/share/9e9d55db99e844bd8d77524e72a542f2?sid=c46714cb-b676-4942-b9cb-1317a9ef3a46)

## 🌐 Live Demo

[Visit the live project deployed on Vercel](https://web3-connect-seven.vercel.app/)

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Web3 Integration**:
  - RainbowKit for wallet connection and UI
  - wagmi for blockchain interactions
  - ethers.js for Ethereum utilities
- **Token Balance API**: 1inch API for fetching the list of tokens.

## 🚀 Features

- Connect to any Web3 wallet (MetaMask, Rainbow, etc.)
- View all your token balances in one place
- Transfer native tokens and ERC20 tokens
- Real-time balance updates
- Support for multiple networks
- Special handling for stETH and USDC balances

## 📋 Upcoming Features

- Automatic token detection and balance fetching instead of using 1inch API
- Additional chain support
- ERC20 token transfer testing
- Unit test implementation
- Loading animations for async operations

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_WALLET_CONNECT_ID=your_wallet_connect_project_id
```

## 🏃‍♂️ Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/bllackjack/web3-connect.git
   cd web3-connect
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up your environment variables:

   - Fill in your API keys in the .env.local file as mentioned above

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

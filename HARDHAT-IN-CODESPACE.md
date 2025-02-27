
Going to hardhat directory

npx hardhat node --hostname 0.0.0.0 --port 8545 --network hardhat

Select the Make public link and open the browser.

=========== scaffold.config.ts
// Tạo mạng mới cho Codespaces
export const codespacesChain = {
  id: 31337,
  name: "Codespaces Hardhat",
  network: "hardhat",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://potential-space-potato-jjrxv7q69pgw3p44j-8545.app.github.dev"] },
    public: { http: ["https://potential-space-potato-jjrxv7q69pgw3p44j-8545.app.github.dev"] },
  },
  blockExplorers: {
    default: { name: "Local Explorer", url: "https://potential-space-potato-jjrxv7q69pgw3p44j-8545.app.github.dev" },
  },
} as const;

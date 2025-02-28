
// Create new network for Codespaces
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

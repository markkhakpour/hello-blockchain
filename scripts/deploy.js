import hre from "hardhat";

async function main() {
  console.log("🚀 Deploying Greeter contract...\n");

  // Get the contract factory
  const Greeter = await hre.ethers.getContractFactory("Greeter");

  // Deploy with initial greeting
  const greeter = await Greeter.deploy("Hello, Blockchain!");

  // Wait for deployment to complete
  await greeter.waitForDeployment();

  // Get the deployed contract address
  const address = await greeter.getAddress();
  console.log(`✅ Greeter deployed to: ${address}`);

  // Test reading the greeting
  const greeting = await greeter.greet();
  console.log(`📝 Current greeting: "${greeting}"`);

  // Test updating the greeting
  console.log("\n📤 Updating greeting...");
  const tx = await greeter.setGreeting("Hello from MarkChain!");
  await tx.wait();

  const newGreeting = await greeter.greet();
  console.log(`📝 New greeting: "${newGreeting}"`);

  console.log("\n🎉 Deployment complete!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

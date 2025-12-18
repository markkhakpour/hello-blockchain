import { expect } from "chai";
import hre from "hardhat";

describe("Greeter", function () {
  // Test 1: Check initial greeting
  it("Should return the initial greeting", async function () {
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, World!");

    expect(await greeter.greet()).to.equal("Hello, World!");
  });

  // Test 2: Check greeting can be changed
  it("Should change the greeting", async function () {
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, World!");

    // Change the greeting
    await greeter.setGreeting("Hola, Mundo!");

    // Verify it changed
    expect(await greeter.greet()).to.equal("Hola, Mundo!");
  });

  // Test 3: Check event is emitted
  it("Should emit GreetingChanged event", async function () {
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, World!");

    // Expect the setGreeting to emit an event
    await expect(greeter.setGreeting("New Greeting"))
      .to.emit(greeter, "GreetingChanged")
      .withArgs("Hello, World!", "New Greeting");
  });
});

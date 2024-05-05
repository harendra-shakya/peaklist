import { expect } from "chai";

import { CrowdFunding } from "../typechain-types";
import { ethers, deployments } from "hardhat";

// import { Signer } from "ethers";

describe("CrowdFunding", function () {
  // We define a fixture to reuse the same setup in every test.

  let crowdFunding: CrowdFunding;
  //   let deployer;
  //   let user: Signer;

  before(async function () {
    // deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    // //   const { deploy, get, log } = deployments;
    // const accounts = await ethers.getSigners();
    // user = accounts[0];
    const contract = await deployments.get("CrowdFunding");
    crowdFunding = await ethers.getContractAt(contract.abi, contract.address);
  });

  describe("Deployment", function () {
    it("Campaign Id should be 0", async function () {
      expect(await crowdFunding.getCurrentCampaignId()).to.equal(0);
    });

    it("something", async function () {});
  });
});

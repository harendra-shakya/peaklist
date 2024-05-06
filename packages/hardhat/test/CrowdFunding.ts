import { assert, expect } from "chai";

import { CrowdFunding } from "../typechain-types";
import { ethers, deployments, getNamedAccounts } from "hardhat";

// import { Signer } from "ethers";

describe("CrowdFunding", function () {
  // We define a fixture to reuse the same setup in every test.

  let crowdFunding: CrowdFunding;
  //   let deployer;
  // let owner: Signer;

  before(async function () {
    // deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    // //   const { deploy, get, log } = deployments;
    // [owner] = await ethers.getSigners();

    const contract = await deployments.get("CrowdFunding");
    crowdFunding = await ethers.getContractAt(contract.abi, contract.address);
  });

  describe("Deployment", function () {
    it("Campaign Id should be 0", async function () {
      expect(await crowdFunding.getCurrentCampaignId()).to.equal(0);
    });

    it("treasury address", async function () {});
  });

  describe("createCampaign", function () {
    let name: string;
    let description: string;
    let targetAmount: number;
    let endAt: number;
    let image: string;
    let campaignId: number;
    let startAt: number;
    let deployer: string;
    before(async function () {
      deployer = (await getNamedAccounts()).deployer;
      name = "My Campaign";
      description = "This is a test campaign";
      targetAmount = 1000;
      startAt = Math.floor(Date.now() / 1000);
      endAt = Math.floor(Date.now() / 1000) + 3600; // Set the end time to 1 hour from now
      image = "https://example.com/image.jpg";
      campaignId = await ethers.toNumber(await crowdFunding.getCurrentCampaignId());

      const tx = await crowdFunding.createCampaign(name, description, targetAmount, endAt, image);

      // const receipt = await tx.wait();
      await tx.wait();

      campaignId++;
    });

    it("Verify initial the campaign details ", async function () {
      const campaign = await crowdFunding.getCampaign(campaignId - 1);
      expect(campaign.creator).to.equal(deployer);
      expect(campaign.name).to.equal(name);
      expect(campaign.description).to.equal(description);
      expect(campaign.targetAmount).to.equal(targetAmount);
      expect(campaign.amountCollected).to.equal(0);
      expect(campaign.amountWithdrawnByOwner).to.equal(0);
      expect(campaign.startAt).to.be.closeTo(startAt, 10);
      expect(campaign.endAt).to.equal(endAt);
      expect(campaign.image).to.equal(image);
      expect(campaign.funders).to.have.lengthOf(0);
      expect(campaign.claimedByOwner).to.be.false;
    });

    it("should revert the function if end time is wrong", async function () {
      const endAt = Math.floor(Date.now() / 1000) - 3600; // 1 hour ago

      await expect(crowdFunding.createCampaign(name, description, targetAmount, endAt, image)).to.be.rejectedWith(
        "CrowdFunding__InvalidEndDate",
      );
    });

    it("Emit CampaignCreated Event", async function () {
      campaignId++;

      await expect(crowdFunding.createCampaign(name, description, targetAmount, endAt, image)).to.emit(
        crowdFunding,
        "CampaignCreated",
      );
    });
    it("s_campaigns should register campaigns", async function () {
      const s_campaigns = await crowdFunding.getCampaigns();

      assert(s_campaigns.length > 0);
    });

    it("s_campaignCreatedByCreator should register creators", async function () {
      const s_campaignCreatedByCreator = await crowdFunding.getCampaignsCreatedByUser();

      assert(s_campaignCreatedByCreator.length > 0);
    });

    it("s_campaignId should increase", async function () {
      expect(await crowdFunding.getCurrentCampaignId()).to.equal(campaignId);
    });
  });
});

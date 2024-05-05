//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";


// - Any creator can launch their campain to raise money for thier manga or book. 5% is given to the DAO.
// - Implement chainlink CCIP for multichain transactions
// this contract will inheret the BasicTokenSender.sol
// [] First complete this contract
// [] Then Implement CCIP

/**
 * @title CrowdFunding
 * @author Harendra Shakya
 * @notice It used Chainlink CCIP for multichain transactions.
 * @dev Any creator can launch their campain to raise money for thier manga or book. 5% is given to the DAO.
 */

contract CrowdFunding {

    // Errors
	error CrowdFunding__StartDate_ShouldBeInPresent();
    error CrowdFunding__FundingWith_ZeroAmount();
    error CrowdFunding__InvalidCampaign();
    error CrowdFunding__CampaignAlreadyEnded();
    error CrowdFunding__InvalidEndDate();

	// State Variables
    address payable private treasuryAddress;
    uint256 private s_campaignId;

    // s_campaignId => Campaign - Tracking Campaign with uint to save gas
    mapping(uint256 campaignId => Campaign) private s_campaigns;

    // creator => Campaign [] - Tracking All Campaign by creator to save gas and time
    mapping(address creator => Campaign[] campaigns) private s_campaignCreatedByCreator;


	// Events
    event CampaignCreated(
        uint256 indexed campaignId,
        address indexed creator,
        uint256 indexed targetAmount,
        uint256 startAt,
        uint256 endAt
    );
    event CamapignFunded(uint256 indexed campaignId, address indexed funder, uint256 indexed amount);
    event WithdrawlSuccessful(uint256 indexed campaignId, address indexed owner, uint256 indexed amount);

    // Type Declarations
    struct Campaign {
        address payable creator;
        uint256 id;
        string name;
        string description;
        uint256 targetAmount;
        uint256 amountCollected;
        uint256 amountWithdrawnByOwner;
        uint256 startAt;
        uint256 endAt;
        string image;
        address[] funders;
        bool claimedByOwner;
    }

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts

	// Modifiers: used to define a set of rules that must be met before or after a function is executed

    function createCampaign(
        string memory _name,
        string memory _description,
        uint256 _targetAmount,
        uint256 _endAt,
        string memory _image
    ) external returns (uint256) {
        if (_endAt < block.timestamp) {
            revert CrowdFunding__InvalidEndDate();
        }

        Campaign memory newCampaign = Campaign({
            creator: payable(msg.sender),
            id: s_campaignId,
            name: _name,
            description: _description,
            targetAmount: _targetAmount,
            amountCollected: 0,
            amountWithdrawnByOwner: 0,
            startAt: block.timestamp,
            endAt: _endAt,
            image: _image,
            funders: new address[](0),
            claimedByOwner: false
        });

        s_campaigns[s_campaignId] = newCampaign;

        emit CampaignCreated(s_campaignId, msg.sender, _targetAmount, block.timestamp, _endAt);

        s_campaignCreatedByCreator[msg.sender].push(newCampaign);

        ++s_campaignId;

        return s_campaignId;
    }

	function fundCampaign(uint256 campaignId) external payable {
        if (msg.value == 0) {
            revert CrowdFunding__FundingWith_ZeroAmount();
        }

        if (s_campaigns[campaignId].creator == address(0)) {
            revert CrowdFunding__InvalidCampaign();
        }

        uint8 newFunder = 1;

        address[] memory funders = s_campaigns[campaignId].funders;

        for (uint256 i = 0; i < funders.length;) {
            if (funders[i] == msg.sender) {
                newFunder = 2;
                break;
            }

            unchecked {
                ++i;
            }
        }

      
        s_campaigns[campaignId].amountCollected = s_campaigns[campaignId].amountCollected + msg.value;
    }

    function getCurrentCampaignId() external view returns (uint256) {
        return s_campaignId;
    }


	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

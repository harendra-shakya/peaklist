//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";


// - Any creator can launch their campain to raise money for thier manga or book. 5% is given to the DAO.
// - Implement chainlink CCIP for multichain transactions

contract CrowdFunding {

	error CrowdFunding__StartDate_ShouldBeInPresent();

	// State Variables
    uint256 private s_campaignsCount;

	// Events: a way to emit log statements from smart contract that can be listened to by external parties

    struct Campaign {
        address payable creator;
        uint256 id;
        string name;
        string description;
        uint256 targetAmount;
        uint256 amountCollected;
        uint256 amountWithdrawnByOwner;
    }


	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts

	// Modifiers: used to define a set of rules that must be met before or after a function is executed

	function createCampaign(
        string memory _name,
        string memory _description,
        uint256 _targetAmount,
        string memory _image
    ) external returns (uint256) {

        Campaign memory newCampaign = Campaign({
            creator: payable(msg.sender),
            id: s_campaignsCount,
            name: _name,
            description: _description,
            targetAmount: _targetAmount,
            amountCollected: 0,
            amountWithdrawnByOwner: 0
        });

    }


	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

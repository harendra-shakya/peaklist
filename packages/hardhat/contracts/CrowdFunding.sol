//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";


// - Any creator can launch their campain to raise money for thier manga or book. 5% is given to the DAO.
// - Implement chainlink CCIP for multichain transactions

contract CrowdFunding {
	// State Variables

	// Events: a way to emit log statements from smart contract that can be listened to by external parties

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts

	// Modifiers: used to define a set of rules that must be met before or after a function is executed


	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}

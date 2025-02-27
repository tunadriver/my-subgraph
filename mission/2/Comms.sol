// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// STEP 1: Import the Ownable contract from OpenZeppelin
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract for The Graph Builders Basecamp challenges
 * @author Kevin Jones
 */

// STEP 2: Inherit the Ownable contract
contract Comms is Ownable {
    uint8 public channel;
    uint8 public attempt;
    bool public isCommsEstablished = false;

    event CommsEstablished(address indexed account, bool isCommsEstablished);

    // STEP 3: Call the Ownable constructor with the owner address
    constructor(address _owner) Ownable(_owner) {
        channel = uint8(block.prevrandao % 6) + 1;
    }

    // STEP 4: Implement the onlyOwner modifier
    function establishComms() public onlyOwner {
        require(!isCommsEstablished, "Comms already established");

        attempt = uint8(block.prevrandao % 6) + 1;
        console.log("Attempt: %s", attempt);
        require(attempt == channel, "Attempt failed: Invalid channel, try again");

        isCommsEstablished = true;
        emit CommsEstablished(msg.sender, isCommsEstablished);
    }

    /**
     * Function that allows the contract to receive ETH
     */
    receive() external payable {}
}

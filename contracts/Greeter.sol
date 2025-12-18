// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title Greeter - Your First Smart Contract!
/// @notice A simple contract that stores and updates a greeting message
contract Greeter {
    // State variable to store the greeting
    string private greeting;

    // Event emitted when greeting changes
    event GreetingChanged(string oldGreeting, string newGreeting);

    /// @notice Creates the contract with an initial greeting
    /// @param _greeting The initial greeting message
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    /// @notice Returns the current greeting
    /// @return The greeting string
    function greet() public view returns (string memory) {
        return greeting;
    }

    /// @notice Updates the greeting to a new message
    /// @param _newGreeting The new greeting message
    function setGreeting(string memory _newGreeting) public {
        string memory oldGreeting = greeting;
        greeting = _newGreeting;
        emit GreetingChanged(oldGreeting, _newGreeting);
    }
}


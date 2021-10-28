pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Birosca is ERC20 {

    constructor(uint256 _supply) ERC20("Birosca", "BRSC") {
        _mint(msg.sender, _supply * (10 ** decimals()));
    }

}
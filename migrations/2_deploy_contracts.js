const Birosca = artifacts.require("Birosca");

module.exports = function (deployer) {
  deployer.deploy(Birosca, 1000000);
};

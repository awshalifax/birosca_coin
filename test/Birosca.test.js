const Birosca = artifacts.require("Birosca");

contract ("Birosca", (accounts) => {
    console.log(accounts)

    before(async () => {
        birosca =  await Birosca.deployed()
    })

    it("give owner of the token 1M tokens", async () => {
        let balance = await birosca.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 1000000, "Balance from new contract should be 1M")
    })


    it("transfer token Birosca between accounts", async () => {
        let amount = web3.utils.toWei('1000', 'ether')
        await birosca.transfer(accounts[1], amount, { from : accounts[0] })

        let balance = await birosca.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')

        assert.equal(balance, 1000, "Balance from account[1] should be 1000")
    })

})
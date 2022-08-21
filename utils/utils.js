const { ethers } = require('hardhat')
const { getContractAddress } = require('@ethersproject/address');

async function main() {
    const [owner] = await ethers.getSigners()
    const transactionCount = await owner.getTransactionCount()

    const getExpectedContractAddress = getContractAddress({
        from: owner.address,
        nonce: transactionCount
    })
}
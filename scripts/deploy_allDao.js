const hre = require("hardhat");
//const getExpectedContractAddress = require("../utils/utils")

async function main() {

  const [owner] = await hre.ethers.getSigners();

  const DummyPass = await hre.ethers.getContractFactory("MyDummyPass");
  const dummyPass = await DummyPass.deploy();  
  await dummyPass.deployed();

  console.log(`PassNFT was deployed to the following address:", ${dummyPass.address}`);
  console.log("PassNFT owner address:", owner.address);

  //const DaoExpectedAddress = await getExpectedContractAddress(owner);
  const timelockDelay = 2;
  
  const TimeLock = await hre.ethers.getContractFactory("Timelock");
  const timeLock = await TimeLock.deploy(owner.address, timelockDelay);  
  await timeLock.deployed();

  console.log(`TimeLock was deployed to the following address:", ${timeLock.address}`);
  console.log("TimeLock owner address:", owner.address);
  //console.log(`Dao Expected Address is: ${DaoExpectedAddress}`)

  const Dao = await hre.ethers.getContractFactory("MyPassyNft");
  const dao = await Dao.deploy(dummyPass.address, timeLock.address);

  await dao.deployed();

  console.log(`Dao was deployed to the following address:", ${dao.address}`);
  console.log(`Dao owner address: ${owner.addres}`);
  //console.log(`Dao Expected Address is: ${DaoExpectedAddress}`)
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});

import { ethers } from 'ethers';
import Web3 from 'web3';

import polygon from './polygon.json';
import usdc from './usdc.json';

const usdcAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
const web3 = new Web3('https://polygon-rpc.com');

const signer =
  typeof window !== 'undefined'
    ? new ethers.providers.Web3Provider(window.ethereum).getSigner()
    : new ethers.providers.getDefaultProvider();
export const ContractAddress = [
  '0x5799fFCd4F51ebd9a84259296b072467FedB25d5', // polygon
  '0x6AFa41b6266430DAefec207B767C0C7083382bc4', // defi
  '0xAd76a0cCdc3862C5053b56d577c687ba61D93FF5', // web3
];

export const contracts = [
  {
    instance: new ethers.Contract(ContractAddress[0], polygon.abi, signer),
    governor: '0x5799fFCd4F51ebd9a84259296b072467FedB25d5',
    order: 1,
  },
  {
    instance: new ethers.Contract(ContractAddress[1], polygon.abi, signer),
    governor: '0x5D82E3179A9a5DEb09ddAf4e0518ECb458ec5B56',
    order: 2,
  },
  {
    instance: new ethers.Contract(ContractAddress[2], polygon.abi, signer),
    governor: '0xAd76a0cCdc3862C5053b56d577c687ba61D93FF5',
    order: 2,
  },
];
const usdcSM = new web3.eth.Contract(usdc, usdcAddress);

export const toWei = (n) => (n * 10 ** 18).toLocaleString('fullwide', { useGrouping: false });
export const fromWei = (n) => {
  try {
    return ethers.utils.formatEther(`${n}`);
  } catch {
    return n;
  }
};

export const toSzabo = (n) => (n * 10 ** 6).toLocaleString('fullwide', { useGrouping: false });

export const fromSzabo = (n) => (n / 10 ** 6).toLocaleString('fullwide', { useGrouping: false });

export const getAllowance = async (owner, spender) => {
  const balance = await usdcSM.methods.allowance(owner, spender).call();

  return ethers.BigNumber.from(balance);
};

export const approveUSDCToken = async (address, amount) => {
  const contract = new ethers.Contract(
    usdcAddress,
    usdc,
    new ethers.providers.Web3Provider(window.ethereum).getSigner(),
  );
  const transaction = await contract.approve(address, ethers.BigNumber.from(toSzabo(amount)));
  const transactionMined = await transaction.wait();
  return transactionMined;
};

export const deposit = async (address, total, swapData) => {
  const contract = new ethers.Contract(address, polygon.abi, signer);
  const transaction = await contract.deposit(total, swapData);
  const transactionMined = await transaction.wait();
  return transactionMined;
};

export const withdraw = async (address, amount) => {
  const contract = new ethers.Contract(address, polygon.abi, signer);
  const transaction = await contract.withdraw(amount);
  const transactionMined = await transaction.wait();
  return transactionMined;
};

export { usdcSM };

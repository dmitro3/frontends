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
export const contracts = [
  new ethers.Contract('0x5799fFCd4F51ebd9a84259296b072467FedB25d5', polygon.abi, signer),
  new ethers.Contract('0x6AFa41b6266430DAefec207B767C0C7083382bc4', polygon.abi, signer),
  new ethers.Contract('0xAd76a0cCdc3862C5053b56d577c687ba61D93FF5', polygon.abi, signer),
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

export const getAllowance = async (address) => {
  const balance = await usdcSM.methods.allowance(address, usdcAddress).call();

  return ethers.BigNumber.from(balance);
};

export const isEnoughAllowance = async (address, needAmount) => {
  const amount = await getAllowance(address);

  return ethers.BigNumber.from(amount).gte(ethers.BigNumber.from(needAmount));
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

import Web3 from 'web3';

import smartContractABI from './abi.json';

const smAddress = '0x4F6b90DEFBAF8ef800e5E2709fD431759FEFafc6';

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');
const interactContract = new web3.eth.Contract(smartContractABI, smAddress);
export { smAddress, interactContract };

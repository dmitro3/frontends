import Web3 from 'web3';

import polygon from './polygon.json';
import usdc from './usdc.json';

const smAddress = '0x0f41602721aCFa7f0fE74b9232C7606642D805B1';
const usdcAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
const web3 = new Web3('https://polygon-rpc.com');
const interactContractUSDC = new web3.eth.Contract(polygon, smAddress);
const usdcSM = new web3.eth.Contract(usdc, usdcAddress);
export { smAddress, interactContractUSDC, usdcSM };

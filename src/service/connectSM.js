import Web3 from 'web3';

import polygon from './polygon.json';

const smAddress = '0xa7697fc2655ffBe5b0B0e2102C11845bF9A6B49a';

const web3 = new Web3('https://polygon-rpc.com');
const interactContractUSDC = new web3.eth.Contract(polygon, smAddress);
export { smAddress, interactContractUSDC };

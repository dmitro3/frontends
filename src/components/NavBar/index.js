import { ButtonBase, Stack } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Web3 from 'web3';

const NavBar = () => {
  const [userInfor, setUserInfor] = useState({
    account: '',
    balance: null,
  });
  const connectWallet = async () => {
    if (typeof window !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      const userAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = `${userAccount[0].slice(0, 5)}...${userAccount[0].slice(-4)}`;
      const balance = (await web3.eth.getBalance(userAccount[0])) / 10 ** 18;
      setUserInfor({
        ...userInfor,
        account,
        balance,
      });
    }
  };
  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 border-b border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <img src="logo.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        </Link>
        {userInfor.account ? (
          <Stack direction="row" spacing={2}>
            <p style={{ color: '#fff' }}>{userInfor.account}</p>
            <p style={{ color: '#fff' }}>{`${userInfor.balance} MATIC`}</p>
          </Stack>
        ) : (
          <ButtonBase
            onClick={connectWallet}
            component="button"
            className="relative text-white bg-main-100 hover:bg-main-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Connect wallet
          </ButtonBase>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

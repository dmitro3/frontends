import { ButtonBase, Stack } from '@mui/material';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'src/store/userInfo';

const NavBar = () => {
  const dispatch = useDispatch();

  const account = useSelector((state) => state.user);

  const connectWallet = async () => {
    if (typeof window !== 'undefined') {
      try {
        dispatch(fetchUser());
      } catch (error) {
        console.log('error:', error);
      }
    }
  };
  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 border-b border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <img src="logo.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        </Link>
        {account.address ? (
          <Stack direction="row" spacing={2}>
            <p style={{ color: '#fff' }}>{`${account.address.slice(0, 5)}...${account.address.slice(-4)}`}</p>
            {/* <p style={{ color: '#fff' }}>{`${userInfor.balance} MATIC`}</p> */}
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

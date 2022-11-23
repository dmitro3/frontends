import { ButtonBase } from '@mui/material';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import Badge from 'src/components/Badge';
import BadgeType from 'src/components/Badge/BadgeType';
import LineBreak from 'src/components/LineBreak';
import Table from 'src/components/Table';
import { openModal } from 'src/store/modal';
import ModalTypes from 'src/store/modal/ModalTypes';

const Automation = () => {
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(
      openModal({
        modalType: ModalTypes.DEPOSIT_MODAL,
      }),
    );
  };

  const handleWithdraw = () => {
    dispatch(
      openModal({
        modalType: ModalTypes.WITHDRAW_MODAL,
      }),
    );
  };
  return (
    <div>
      <div className="block mb-2 text-lg text-white">Pool Available</div>
      <div className="inline-flex rounded-md shadow-sm mb-6" role="group">
        {['GameFi', 'NFT', 'Token'].map((name) => (
          <ButtonBase
            component="button"
            key={name}
            className={classNames(
              name === 'GameFi' && 'bg-main-100',
              'py-2 px-6 mr-2 text-sm font-medium rounded-full border border-gray-200 focus:z-10 focus:ring-2 bg-gray-700 dark:border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white',
            )}
          >
            {name}
          </ButtonBase>
        ))}
      </div>
      <LineBreak />
      <div className="flex my-6 ">
        <div>
          <div className=" text-white mb-3">Top 10 Token</div>
          <Table />
        </div>
      </div>
      <LineBreak />
      <div>
        <div className=" text-white mb-3 font-bold">Statistic</div>

        <div className="flex items-center my-3">
          <div className="w-52 text-gray-300 mr-3">Total value:</div>
          <div className=" text-white font-bold">100,000,000$</div>
        </div>
        <div className="flex items-center my-3">
          <div className="w-52 text-gray-300 mr-3">Unrealized PNL today:</div>
          <div className=" text-white font-bold">
            <Badge type={BadgeType.SUCCESS}>+100,000,000$</Badge>
          </div>
        </div>

        <div className="flex items-center my-3">
          <div className="w-52 text-gray-300 mr-3">Start Open Fund At: </div>
          <div className=" text-white font-bold">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              <svg
                aria-hidden="true"
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              19/11/2022
            </span>
          </div>
        </div>
      </div>
      <LineBreak />
      <div>
        <div className=" text-white mb-3 font-bold">Your Locked</div>

        <div className="flex items-center my-3">
          <div className="w-52 text-gray-300 mr-3">Total value:</div>
          <div className=" text-white font-bold">100,000,000$</div>
        </div>
        <div className="flex items-center my-3">
          <div className="w-52 text-gray-300 mr-3">Unrealized PNL today:</div>
          <div className=" text-white font-bold">
            <Badge type={BadgeType.SUCCESS}>+100,000,000$</Badge>
          </div>
        </div>

        <div className="flex items-center my-3">
          <div className="w-52 text-gray-300 mr-3">Start Lock At: </div>
          <div className=" text-white font-bold">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              <svg
                aria-hidden="true"
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              19/11/2022
            </span>
          </div>
        </div>
      </div>
      <LineBreak />

      <div className="flex justify-end">
        <ButtonBase
          onClick={handleWithdraw}
          component="button"
          className="relative text-white border border-main-100 border-solid bg-transparent hover:bg-main-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
        >
          Withdraw
        </ButtonBase>
        <ButtonBase
          component="button"
          className="relative text-white bg-main-100 hover:bg-main-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
        >
          Extend more
        </ButtonBase>
        <ButtonBase
          onClick={handleDeposit}
          component="button"
          className="relative text-white bg-main-100 hover:bg-main-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
        >
          Start investing
        </ButtonBase>
      </div>
    </div>
  );
};

export default Automation;

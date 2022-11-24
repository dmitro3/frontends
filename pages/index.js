import { Box, ButtonBase, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Badge from 'src/components/Badge';
import BadgeType from 'src/components/Badge/BadgeType';
import LineBreak from 'src/components/LineBreak';
import Table from 'src/components/Table';
import { openModal } from 'src/store/modal';
import ModalTypes from 'src/store/modal/ModalTypes';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Automation = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <div className="flex gap-4">
      <div className="w-2/12">
        <div className="block mb-2 text-lg text-white">Pool Available</div>
        <Tabs
          orientation="vertical"
          centered={false}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="First Pool" />
          <Tab label="Second Pool" />
        </Tabs>
      </div>
      <div className="w-10/12">
        <TabPanel value={value} index={0}>
          <div className="flex justify-end">
            <ButtonBase
              component="button"
              className="relative text-white bg-main-100 hover:bg-main-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            >
              Rebalance Pool
            </ButtonBase>
          </div>

          <div className="flex flex-col my-6 ">
            <div className="text-lg text-white mb-3 font-bold">Tokens Pool</div>
            <Table />
          </div>
          <LineBreak />
          <div>
            <div className=" text-white mb-3 font-bold text-lg">About</div>

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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="block mb-2 text-lg text-white">Coming soon</div>
        </TabPanel>
      </div>
    </div>
  );
};

export default Automation;

import { Box, ButtonBase, Tab, Tabs } from '@mui/material';
import currency from 'currency.js';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'src/components/Badge';
import BadgeType from 'src/components/Badge/BadgeType';
import LineBreak from 'src/components/LineBreak';
import Table from 'src/components/Table';
import { interactContractUSDC } from 'src/service/connectSM';
import { setContractOverview } from 'src/store/contract';
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
  const [userInfo, setUserInfo] = useState(0);

  const contractOverview = useSelector((state) => state.contract.overview);
  const account = useSelector((state) => state.user);

  // ((usdvValue / tokenBalce ) - 1) * 100 < 0 -> đỏ
  // ((usdvValue / tokenBalce ) - 1) * 100 > 0 -> green

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await interactContractUSDC.methods.overview().call();

      dispatch(setContractOverview(response));
    };

    fetchInfo();
  }, []);

  useEffect(() => {
    if (!account.address) return;
    const fetchUserInfo = async () => {
      const response = await interactContractUSDC.methods.userInfo(account.address).call();
      setUserInfo(response);
    };

    fetchUserInfo();
  }, [account.address]);

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

  // const percent =
  //   !_.isEmpty(userInfo) && parseFloat(userInfo.usdValue !== 0 && userInfo.tokenBalance !== 0
  //     ? parseFloat(userInfo.usdValue) / parseFloat(userInfo.tokenBalance) - 1
  //     : 0;

  // const isGreen = !_.isEmpty(userInfo) ? percent > 0 : false;

  return (
    <div className="flex gap-4">
      <div className="w-2/12">
        <div className="block mb-2 text-lg text-white">Active Pools</div>
        <Tabs
          orientation="vertical"
          centered={false}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label={contractOverview.fundName} />
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
              <div className=" text-white font-bold">
                {currency(contractOverview.tokenSupply, {
                  symbol: '',
                }).format()}{' '}
                <span className="text-sm text-gray-400">( {currency(contractOverview.usdValue).format()})</span>
              </div>
            </div>
          </div>
          <LineBreak />
          <div>
            <div className=" text-white mb-3 font-bold">Your Locked</div>

            <div className="flex items-center my-3">
              <div className="w-52 text-gray-300 mr-3">Total value:</div>
              <div className=" text-white font-bold">
                {currency(userInfo.tokenBalance, {
                  symbol: '',
                }).format()}{' '}
                <span className="text-sm text-gray-400">( {currency(userInfo.usdValue).format()})</span>
              </div>
            </div>
            {/* <div className="flex items-center my-3">
              <div className="w-52 text-gray-300 mr-3">ROI:</div>
              <div className=" text-white font-bold">
                <Badge type={BadgeType.SUCCESS}>{percent}%</Badge>
              </div>
            </div> */}
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

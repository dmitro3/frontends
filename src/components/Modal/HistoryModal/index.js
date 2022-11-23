import { ButtonBase, Dialog, DialogContent, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDispatch } from 'react-redux';
import CloseModalIcon from 'src/components/Icon/CloseModalIcon';
import Table from 'src/components/Table';
import { closeModal } from 'src/store/modal';

import Transition from '../Transition';

const HistoryModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog open TransitionComponent={Transition} onClose={onClose} maxWidth="lg">
      <DialogContent>
        <CloseModalIcon onClick={onClose} />
        <div className="p-3 text-center mb-3 text-xl">History Deposit</div>
        <div className="mt-5 p-3">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex gap-6">
              <DatePicker
                label="Start Date"
                value={new Date()}
                onChange={(newValue) => {}}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                label="End Date"
                value={new Date()}
                onChange={(newValue) => {}}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </LocalizationProvider>
          <div className="my-4">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Token
                    </th>
                    <th scope="col" className="py-3 px-6" />
                    <th scope="col" className="py-3 px-6" />
                    <th scope="col" className="py-3 px-6" />
                    <th scope="col" className="py-3 px-6">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                      BTC
                    </th>
                    <td className="py-4 px-6" />
                    <td className="py-4 px-6" />
                    <td className="py-4 px-6" />
                    <td className="py-4 px-6">
                      <a href="#" className="font-medium text-blue-500 hover:underline">
                        200$
                      </a>
                    </td>
                  </tr>
                  <tr className=" border-b  bg-gray-800 border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap  text-white">
                      BTC
                    </th>
                    <td className="py-4 px-6" />
                    <td className="py-4 px-6" />
                    <td className="py-4 px-6" />
                    <td className="py-4 px-6">
                      <a href="#" className="font-medium text-blue-500 hover:underline">
                        200$
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryModal;

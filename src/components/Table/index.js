import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TokenMaps } from 'src/constants';

import Tr from './Tr';

const Table = () => {
  const [assets, setAssets] = useState([]);

  const contractOverview = useSelector((state) => state.contract.overview);

  useEffect(() => {
    if (contractOverview?.assets?.length > 0) {
      setAssets(
        contractOverview.assets.map((asset) => ({
          symbol: TokenMaps[asset.token].symbol,
          logo: TokenMaps[asset.token].logo,
          name: TokenMaps[asset.token].name,
          amount: asset.amount,
          token: asset.token,
          weight: asset.weight,
        })),
      );
    }
  }, [contractOverview]);

  return (
    <div className="overflow-x-auto relative">
      <table className="text-sm text-left text-gray-400 w-full">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            {[
              {
                name: 'Name',
              },
              {
                name: 'Price',
                isNumber: true,
              },
              {
                name: 'Volume',
                isNumber: true,
              },
              {
                name: 'Weight in Pool',
                isNumber: true,
              },
              {
                name: 'Total Pool Holds',
                isNumber: true,
              },
              {
                name: 'Last 7 Days',
                isChart: true,
              },
            ].map((e) => (
              <th
                scope="col"
                className={classNames('py-3 px-6 whitespace-nowrap', e.isNumber && 'text-right', e.isChart && 'w-40')}
                key={e.name}
              >
                <span className="ml-3">{e.name}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <Tr key={asset.symbol} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

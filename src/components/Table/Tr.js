import axios from 'axios';
import currency from 'currency.js';
import moment from 'moment';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { printChart } from 'src/utils/charts';

const Tr = ({ asset }) => {
  const [marketPrice, setMarketPrice] = useState([]);
  const [prices, setPrices] = useState([]);
  const [times, setTimes] = useState([]);

  const printed = useRef(false);

  useEffect(() => {
    const fetchPrices = async () => {
      axios.get(`https://api-v2.blockpour.com/api/prices/average/hourly/${asset.symbol}`).then((response) => {
        const responseFormatted = response.data.data;
        setMarketPrice(responseFormatted);
        setPrices(responseFormatted.map((rs) => parseFloat(rs.price)));
        setTimes(responseFormatted.map((rs) => moment(rs.time).toDate()));
      });
    };
    fetchPrices();
  }, []);

  useEffect(() => {
    if (!printed.current && prices.length > 0 && times.length > 0) {
      printChart(times, prices, asset.symbol);

      printed.current = true;
    }
  }, [times, prices]);
  return (
    <tr className="border-b bg-gray-800 border-gray-700">
      <th scope="row" className="thClass">
        <div className="flex items-center">
          <Image src={asset.logo} width={20} height={20} alt="polygon" />
          <span className="ml-3">{asset.name}</span>
        </div>
      </th>
      <th className="thClass text-right">
        {marketPrice.length > 0 && currency(marketPrice[marketPrice.length - 1].price).format()}
      </th>
      <th className="thClass text-right">
        {marketPrice.length > 0 && currency(asset.balance * marketPrice[marketPrice.length - 1].price).format()}
      </th>
      <th className="thClass text-right w-5">
        {currency(asset.balance, {
          symbol: '',
          precision: 6,
        }).format(0)}
      </th>
      <th className="thClass text-right w-5">{asset.weight}%</th>

      <th className="thClass relative">
        <canvas id={asset.symbol} />
      </th>
    </tr>
  );
};

export default Tr;

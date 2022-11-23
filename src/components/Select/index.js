const Select = () => {
  return (
    <div>
      <div className="block mb-2 text-sm font-medium text-white">Select an category</div>
      <select className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
        <option value="GameFi">GameFi</option>
        <option value="CA">DeFi</option>
        <option value="NFT">NFT</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};

export default Select;

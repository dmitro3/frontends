import Image from 'next/image';

const Table = () => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
          <tr>
            {['Name', 'Price', 'Market Cap'].map((name) => (
              <th scope="col" className="py-3 px-6" key={name}>
                <div className="flex items-center">
                  <span className="ml-3">{name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-bbg-gray-800 border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-white">
              <span className="ml-3">25 %</span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

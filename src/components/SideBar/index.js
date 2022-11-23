import { ButtonBase } from '@mui/material';
import Link from 'next/link';
import AutomationIcon from 'src/Icon/AutomationIcon';
import DashboardIcon from 'src/Icon/DashboardIcon';

const SideBar = () => {
  return (
    <aside className="w-64 h-full min-h-screen" aria-label="Sidebar">
      <div className="h-full min-h-screen overflow-y-auto py-4 px-3 rounded-tr rounded-br bg-gray-900">
        <ul className="space-y-2">
          <li>
            <Link href="/">
              <ButtonBase
                component="button"
                className="flex items-center p-2 w-full text-base font-normal rounded-lg text-white hover:bg-gray-700"
              >
                <DashboardIcon />
                <span className="ml-3 flex-grow text-left">Dashboard</span>
              </ButtonBase>
            </Link>
          </li>
          <li>
            <Link href="/automation">
              <ButtonBase
                component="button"
                className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-700"
              >
                <AutomationIcon />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Automation</span>
              </ButtonBase>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-700" />
      </div>
    </aside>
  );
};

export default SideBar;

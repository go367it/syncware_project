import React from "react";

// importing icons
import HandIcon from "@heroicons/react/solid/HandIcon";
import ChartPie from '@heroicons/react/solid/ChartPieIcon';
import DeviceTabletIcon from '@heroicons/react/solid/DeviceTabletIcon'
import PresentationChartLineIcon from '@heroicons/react/solid/PresentationChartLineIcon'
import CogIcon from '@heroicons/react/solid/CogIcon'
import CursorClickIcon from '@heroicons/react/solid/CursorClickIcon'
import MapIcon from '@heroicons/react/solid/MapIcon'
import InformationCircleIcon from '@heroicons/react/solid/InformationCircleIcon'
import BellIcon from '@heroicons/react/solid/BellIcon'
import ChatAlt2Icon from '@heroicons/react/solid/ChatAlt2Icon'
import LogoutIcon from '@heroicons/react/outline/LogoutIcon'

// importing images
import UserPhoto from '../Images/user.jpeg'

// importing routes
import { Switch, Route, Link } from "react-router-dom";
import Devices from './Devices/Devices'
import Settings from "./Settings/Settings";


const Dashboard = () => {
  
  // function for toggling the menubar on mobile view
  const showMobileMenu = () => {
    document.querySelector(".sidebar").classList.toggle("-translate-x-full");
  };

  return (
    <div>
      <div className="relative min-h-screen md:flex">
        {/* <!-- mobile menu bar --> */}
        <div className="grid grid-cols-2 md:grid-cols-1">
          {/* <!-- sidebar --> */}
          <div
            style={{ backgroundColor: "#172A46" }}
            className="sidebar overflow-y-auto text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
          >
            {/* <!-- logo --> */}
            <a className="text-white flex items-center space-x-2 px-4">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span className="text-2xl">
                <strong>SYNC</strong>WARE.
                <span className="font-thin text-xl">AI</span>
              </span>
            </a>

            {/* <!-- nav --> */}
            <div style={{ color: "#B3B3B3" }}>
              <Link to='/'>
              <span
                className="block flex gap-4 items-center text-left py-4 px-4 rounded transition duration-300 hover:text-white
                transform duration-300 cursor-pointer
                "
              >
                <HandIcon className="h-5 w-5" />
                Welcome
              </span>
              </Link>
              <Link to='/dashboard'>
              <span
                className="block flex gap-4 items-center text-left py-4 px-4 rounded transition duration-300 hover:text-white
              transform duration-300 cursor-pointer"
              >
                <ChartPie className="h-5 w-5" />
                Dashboard
              </span>
              </Link>
              <Link to='/devices'>
              <span
                className="block flex gap-4 items-center text-left py-4 px-4 rounded transition duration-300 hover:text-white
                transform duration-300 cursor-pointer"
              >
                <DeviceTabletIcon className="h-5 w-5" />
                Devices
              </span>
              </Link>
              <Link to='/buisness_insights'>
              <span
                className="block flex gap-4 items-center text-left py-4 px-4 rounded transition duration-300 hover:text-white
                transform duration-300 cursor-pointer"
              >
                <PresentationChartLineIcon className="h-5 w-5" />
                Buisness Insights
              </span>
              </Link>
              <Link to='/system_builder'>
              <span
                className="block flex gap-4 items-center text-left py-4 px-4 rounded transition duration-300 hover:text-white
                transform duration-300 cursor-pointer"
              >
                <CursorClickIcon className="h-5 w-5" />
                System Builder
              </span>
              </Link>
              <Link to='/map_layout'>
              <span
                className="block flex gap-4 items-center text-left py-4 px-4 rounded transition duration-300 hover:text-white
                transform duration-300 cursor-pointer"
              >
                <MapIcon className="h-5 w-5" />
                Map Layout
              </span>
              </Link>
              <div className="inset-x-0 bottom-0">
              <Link to='/settings'>
                <span
                  className="block flex gap-4 items-center text-left py-4 px-4 rounded transition duration-300 hover:text-white
                  transform duration-300 cursor-pointer"
                >
                  <CogIcon className="h-5 w-5" />
                  Settings
                </span>
                </Link>
                <Link to='/help'>
                <span
                  className="block flex gap-4 items-center text-left py-4 px-4 rounded transition duration-300 hover:text-white
                  transform duration-300 cursor-pointer"
                >
                  <InformationCircleIcon className="h-5 w-5" />
                  Help
                </span>
                </Link>
              </div>
            </div>
          </div>

          <div className=" grid grid-rows-2 md:hidden">
            <div className="absolute text-gray-400 flex justify-between md:hidden">
              {/* <!-- mobile menu button --> */}
              <button
                onClick={() => showMobileMenu()}
                className="mobile-menu-button p-2 focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- content --> */}
        <div style={{backgroundColor:'#0A192F'}} className="flex-1 min-h-screen">
          <div>
            <div className="navbar w-full px-4 py-4 flex justify-between items-center">
              <div>
                <h1 className="text-white text-3xl">Devices</h1>
              </div>
              <div className="functions flex justify-end items-center text-white gap-5">

                <BellIcon className="h-7 w-7 cursor-pointer" />

                <ChatAlt2Icon className="h-7 w-7 cursor-pointer" />

                <img 
                className="h-7 w-7 rounded-full cursor-pointer"
                src={UserPhoto} 
                />

                <p className="text-md">Leer Meester</p>

                <button 
                className="px-4 py-2 focus:outline focus:outline-red-500 focus:outline-offset-2 focus:outline-2 flex gap-2 
                items-center justify-center rounded-md bg-red-500 transform duration-300 hover:bg-red-700
                ">
                  <LogoutIcon className="h-5 w-5" /> Logout
                </button>

              </div>
            </div>

            <div>

              <Switch>
                <Route path={'/devices'} exact component={Devices} />
                <Route path='/settings' exact component={Settings} />
              </Switch>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

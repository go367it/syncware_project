import React from 'react'
import { Tab } from "@headlessui/react";

// importing Icons
import RefreshIcon from '@heroicons/react/outline/RefreshIcon';
import UserGroupIcon from '@heroicons/react/solid/UserGroupIcon';
import ShieldCheckIcon from '@heroicons/react/solid/ShieldCheckIcon';
import UserCircleIcon from '@heroicons/react/solid/UserCircleIcon';
import LightBulbIcon from '@heroicons/react/solid/LightBulbIcon';
import CubeTransparentIcon from '@heroicons/react/solid/CubeTransparentIcon';
import TranslateIcon from '@heroicons/react/outline/TranslateIcon';
import DesktopComputerIcon from '@heroicons/react/solid/DesktopComputerIcon';
import CashIcon from '@heroicons/react/solid/CashIcon';
import RewindIcon from '@heroicons/react/solid/RewindIcon'

//importing different section
import BillingSetting from './BillingSetting/Index'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Settings = () => {
    return (
        <div className='m-5'>
            <Tab.Group>
                <div className='grid grid-cols-4 divide-x divide-gray-400'>
                <Tab.List>
                    <Tab
                        key="1"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <RefreshIcon className='h-5 w-5' />
                            You And Syncware
                        </span>
                    </Tab>
                    <Tab
                        key="2"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <UserGroupIcon className='h-5 w-5' />
                            Your Team
                        </span>
                    </Tab>
                    <Tab
                        key="3"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <ShieldCheckIcon className='h-5 w-5' />
                            Privacy And Security
                        </span>
                    </Tab>
                    <Tab
                        key="4"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <UserCircleIcon className='h-5 w-5' />
                            Appearance
                        </span>
                    </Tab>
                    <Tab
                        key="5"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <LightBulbIcon className='h-5 w-5' />
                            On Startup
                        </span>
                    </Tab>
                    <Tab
                        key="6"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <CubeTransparentIcon className='h-5 w-5' />
                            Network Information
                        </span>
                    </Tab>
                    <Tab
                        key="7"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <TranslateIcon className='h-5 w-5' />
                            Language
                        </span>
                    </Tab>
                    <Tab
                        key="8"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <DesktopComputerIcon className='h-5 w-5' />
                            System Settings
                        </span>
                    </Tab>
                    <Tab
                        key="9"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <CashIcon className='h-5 w-5' />
                            Billing Setting
                        </span>
                    </Tab>
                    <Tab
                        key="10"
                        className={({ selected }) =>
                          classNames(
                            "px-4 py-3 w-full flex gap-2 rounded-sm text-sm leading-5 font-medium transition hover:text-white duration-300",
                            selected ? "text-white" : "text-gray-400"
                          )
                        }
                    >
                        <span className='gap-3 flex'>
                            <RewindIcon className='h-5 w-5' />
                            Reset Settings
                        </span>
                    </Tab>
                </Tab.List>
                <div  className='col-span-3'>
                <Tab.Panels>
                    <Tab.Panel key="1">
                        <div className='flex justify-center text-2xl text-white'>
                            No Data
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key="2">
                        <div className='flex justify-center text-2xl text-white'>
                            No Data
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key="3">
                        <div className='flex justify-center text-2xl text-white'>
                            No Data
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key="4">
                        <div className='flex justify-center text-2xl text-white'>
                            No Data
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key="5">
                        <div className='flex justify-center text-2xl text-white'>
                            No Data
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key="6">
                        <div className='flex justify-center text-2xl text-white'>
                            No Data
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key="7">
                        <div className='flex justify-center text-2xl text-white'>
                            No Data
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key="8">
                        <div className='flex justify-center text-2xl text-white'>
                            No Data
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key="9">
                        <div className='flex justify-center text-2xl text-white'>
                            <BillingSetting />
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key="10">
                        <div className='flex justify-center text-2xl text-white'>
                            No Data
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
                </div>
                </div>
            </Tab.Group>
        </div>
    )
}

export default Settings

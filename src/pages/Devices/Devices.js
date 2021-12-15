import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const Devices = () => {
  const [deviceData, setDeviceData] = useState([
    {
      name: "NFT Computer 1012",
      variables: "Boolean, Bar Code, Dummy Inter, Int64, String",
      sign: "True",
      indicator: true,
    },
    {
      name: "Asimo Honda 2k11",
      variables: "Inter, Int64, String, Dummy",
      sign: "200",
      indicator: false,
    },
    {
      name: "Scanner WebX",
      variables: "Boolean, Bar Code, Dummy",
      sign: "False",
      indicator: false,
    },
    {
      name: "Yamha RoboXG12",
      variables: "Dummy, Inter, String, Float",
      sign: "Teelop GenX",
      indicator: false,
    },
  ]);
  const [enabled, setEnabled] = useState(false)

  // function for changing button state
  const onClicked = (id) =>{
    const newData = [...deviceData]
    newData[id].indicator = !newData[id].indicator
    setDeviceData(newData)
    console.log(newData[id].indicator)
  }

  return (
    <div className="text-white px-10 w-full">
      <table className="w-full">
        <thead>
          <tr className="divide-x divide-gray-700 text-left">
            <th scope="col" className="px-2">
              Device Name
            </th>
            <th scope="col" className="px-2">
              Variables
            </th>
            <th scope="col" className="px-2">
              Signal Value
            </th>
            <th scope="col" className="px-2">
              Indicator
            </th>
          </tr>
        </thead>
        <tbody>
          {deviceData.map((j, index) => {
            return (
              <tr key={index} className="mt-5 divide-x divide-gray-700 text-gray-600 text-left">
                <td className="px-2 py-4">{j.name}</td>
                <td className="px-2 py-4">{j.variables}</td>
                <td className="px-2 py-4">{j.sign}</td>
                <td className="px-2 py-4">
                  <Switch
                    checked={j.indicator}
                    onChange={()=>onClicked(index)}
                    className={`${j.indicator ? "bg-teal-900" : "bg-teal-700"}
                      relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${j.indicator ? 'translate-x-9' : 'translate-x-0'}
                        pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                    />
                  </Switch>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Devices;

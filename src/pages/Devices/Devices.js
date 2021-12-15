import React, { useState } from "react";

let data = [
  {
    nams: "NFT Computer 1012",
    variables: "Boolean, Bar Code, Dummy Inter, Int64, String",
    sign: "True",
    indicator: true,
  },
  {
    nams: "Asimo Honda 2k11",
    variables: "Inter, Int64, String, Dummy",
    sign: "200",
    indicator: false,
  },
  {
    nams: "Scanner WebX",
    variables: "Boolean, Bar Code, Dummy",
    sign: "False",
    indicator: false,
  },
  {
    nams: "Yamha RoboXG12",
    variables: "Dummy, Inter, String, Float",
    sign: "Teelop GenX",
    indicator: false,
  },
];

const Devices = () => {
  const [deviceData, setDeviceData] = useState(data);

  return (
    <div className="text-white">
      <table className="border-collapse border border-gray-400 ...">
        <thead>
          <tr>
            <th class="border border-gray-300 ...">State</th>
            <th class="border border-gray-300 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 ...">Indiana</td>
            <td class="border border-gray-300 ...">Indianapolis</td>
          </tr>
          <tr>
            <td class="border border-gray-300 ...">Ohio</td>
            <td class="border border-gray-300 ...">Columbus</td>
          </tr>
          <tr>
            <td class="border border-gray-300 ...">Michigan</td>
            <td class="border border-gray-300 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Devices;

import React, { useEffect, useState } from "react";
import region from "../api/region";

export default function Region() {
  const [Region, setRegion] = useState<any[]>([]);
  useEffect(() => {
    region.GetData().then((data) => {
      setRegion(data);
    });
  });
  return (
    <div>
      <h2>List Region</h2>
      <table>
        <thead>
          <tr>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Region Photo</th>
          </tr>
        </thead>
        <tbody>
          {Region &&
            Region.map((item) => {
              return (
                <>
                  <tr>
                    <th>{item.regionId}</th>
                    <td>{item.regionName}</td>
                    <td>{item.photo}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

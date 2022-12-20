import React from "react";
import "../App.css";
import { useParams, Link } from "react-router-dom";
const gpsdata = [
  {
    DeviceId: "D-1567",
    DeviceType: "Aircraft",
    Timestamp: "21-08-2022 10:05",
    location: "L1",
  },
  {
    DeviceId: "D-1467",
    DeviceType: "Aircraft",
    Timestamp: "18-08-2022 10:05",
    location: "L2",
  },
  {
    DeviceId: "D-1568",
    DeviceType: "Personal",
    Timestamp: "11-08-2022 10:05",
    location: "L1",
  },
  {
    DeviceId: "D-1532",
    DeviceType: "Aircraft",
    Timestamp: "31-08-2022 10:05",
    location: "L4",
  },
  {
    DeviceId: "D-1523",
    DeviceType: "Asset",
    Timestamp: "30-08-2022 10:05",
    location: "L6",
  },
  {
    DeviceId: "D-1953",
    DeviceType: "Personal",
    Timestamp: "31-08-2022 10:05",
    location: "L3",
  },
  {
    DeviceId: "D-1560",
    DeviceType: "Personal",
    Timestamp: "29-08-2022 10:05",
    location: "L7",
  },
  {
    DeviceId: "D-1531",
    DeviceType: "Aircraft",
    Timestamp: "16-08-2022 10:05",
    location: "L4",
  },
  {
    DeviceId: "D-1509",
    DeviceType: "Asset",
    Timestamp: "31-08-2022 10:05",
    location: "L1",
  },
  {
    DeviceId: "D-1598",
    DeviceType: "Aircraft",
    Timestamp: "11-08-2022 10:05",
    location: "L2",
  },
  {
    DeviceId: "D-1500",
    DeviceType: "Personal",
    Timestamp: "22-08-2022 10:05",
    location: "L1",
  },
  {
    DeviceId: "D-1523",
    DeviceType: "Asset",
    Timestamp: "31-08-2022 10:05",
    location: "L2",
  },
  {
    DeviceId: "D-1515",
    DeviceType: "Aircraft",
    Timestamp: "10-08-2022 10:05",
    location: "L1",
  },
  {
    DeviceId: "D-1566",
    DeviceType: "Asset",
    Timestamp: "31-08-2022 10:05",
    location: "L1",
  },
  {
    DeviceId: "D-1509",
    DeviceType: "Aircraft",
    Timestamp: "31-08-2022 10:05",
    location: "L6",
  },
  {
    DeviceId: "D-1564",
    DeviceType: "Asset",
    Timestamp: "31-08-2022 10:05",
    location: "L1",
  },
];
function Table({ setItem, setId }) {
  const handleSelectedRow = (item, index) => {
    setId(index + 1);
    setItem(item);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">DeviceId</th>
            <th scope="col">Device Type</th>
            <th scope="col">Timestamp</th>
            <th scope="col">location</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {gpsdata.map((item, index) => {
            return (
              <tr onClick={() => handleSelectedRow(item, index)}>
                <td scope="row">{item.DeviceId}</td>
                <td>{item.DeviceType}</td>
                <td>{item.Timestamp}</td>
                <td>{item.location}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/detailPage/${index}`,
                      data: { item: item },
                    }}
                  >
                    detail
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

import React, { useEffect, useRef } from "react";
import { DATA_TABLE } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
export const Table = () => {

  return (
    <>
      <table id="dashboard-table" className="table">
        <thead>
          <tr>
            {
              DATA_TABLE.tableHeader?.map((item, idx) => (
                <th scope="col" key={idx} className={item.class}>{item.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            DATA_TABLE.tableData?.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <div className="task-title d-flex align-items-center">
                    {/* <i className="fa-solid fa-list-check"></i> */}
                    <i>
                      <FontAwesomeIcon icon={faListCheck} />

                    </i>
                    <div className="task-name">
                      <a href="#">
                        <p>
                          {
                            item["task-name"]
                          }
                        </p>
                      </a>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 text-center">
                  <span className={`badge ${item.status.toLowerCase()}`}>{item.status}</span>
                </td>
                <td className="px-4 text-center">{item["task-type"]}</td>
                <td className="px-4 text-center">
                  <a href={item.view}>View</a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {/* {PAGINATION} */}
      <div className="border-top d-flex justify-content-between align-items-center pt-2 " style={{
        backgroundColor: "r"
      }}>
          <div>
          Showing 1 to 3 of 3 entries
          </div>
          <div className="d-flex align-items-center">
            <a>Previous</a>
            <button className="mx-3 py-2 px-3 border"  style={{
                background: "linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)",
                cursor: "pointer"
              }}>1
            </button>
            <a> Next</a>
          </div>
      </div>
    </>

  );
};

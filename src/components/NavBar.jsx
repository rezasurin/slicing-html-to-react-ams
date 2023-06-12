import React from "react";
import { Dropdown } from "react-bootstrap";
import { useViewContext } from "../hooks/useViewContext";
import { OPEN_SIDE_NAV, OPEN_SIDE_NOTIF } from "../store/actions";
import { DropdownButtonBrandName, DropdownButtonProfile } from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMediaQuery from "../hooks/useMediaQuery";
import { faBars, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export const TopNavBar = () => {
  const { dispatch } = useViewContext();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const onClickOpenNav = () => {
    dispatch({
      type: OPEN_SIDE_NAV,
    });
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark ${
        isMobile
          ? "navbar-mobile d-md-none d-flex "
          : "justify-content-between d-none d-md-flex "
      } fixed-top align-items-center pt-2`}
    >
      {isMobile ? (
        <>
          <span>
            <FontAwesomeIcon icon={faBars} onClick={onClickOpenNav} />
          </span>
          <div
            className="row"
            style={{
              paddingRight: "8px",
            }}
          >
            <div
              className="notif"
              onClick={() => {
                dispatch({
                  type: OPEN_SIDE_NOTIF,
                });
              }}
            >
              <span>3</span>
              <FontAwesomeIcon
                icon={faBell}
                size="2xs"
                style={{
                  marginTop: "11px",
                }}
              />
            </div>
            &nbsp;
            <img
              src={"../../src/assets/images/icons/divider.svg"}
              style={{
                width: "20px",
                height: "25px",
              }}
            />
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              style={{
                color: "rgba(143, 255, 218, 0.838)",
                marginTop: "11px",
              }}
            />
            &nbsp;
          </div>
        </>
      ) : (
        <>
          <a
            href="#"
            className="hamburger"
            id="open-hamburger"
            onClick={onClickOpenNav}
          >
            <svg
              width="21"
              height="13"
              viewBox="0 0 21 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.440918 1.74219H20.4409"
                stroke="#5D6E82"
                stroke-width="2"
              />
              <path
                d="M0.440918 6.74219H20.4409"
                stroke="#5D6E82"
                stroke-width="2"
              />
              <path
                d="M0.440918 11.7422H20.4409"
                stroke="#5D6E82"
                stroke-width="2"
              />
            </svg>
          </a>
          <div className="main-area">
            <div className="container-fluid">
              <div className="col-md-6 p-0 d-flex align-items-center">
                <Dropdown className="your-brand-name">
                  <Dropdown.Toggle as={DropdownButtonBrandName}>
                    Your Brand Name
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="col-md-6 d-flex justify-content-end">
                <Dropdown className="brand-name-dropdown">
                  <Dropdown.Toggle as={DropdownButtonProfile}>
                    <img
                      src="https://picsum.photos/100"
                      className="mr-2"
                      alt=""
                    />
                    <p>
                      Neyna Rahmadhani <span>(Brand Owner)</span>
                    </p>
                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end">
                    <Dropdown.Item>My Settings</Dropdown.Item>
                    <Dropdown.Item>Switch to Desk</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

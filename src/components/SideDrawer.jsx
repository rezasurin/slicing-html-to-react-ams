import React from "react";
import { useViewContext } from "../hooks/useViewContext";
import useMediaQuery from "../hooks/useMediaQuery";
import { OPEN_SIDE_NAV, OPEN_SIDE_NOTIF } from "../store/actions";
import { DropdownButtonBrandName } from "./Dropdown";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const MENU_SIDE_NAV = [
  {
    title: "Dashboard",
    icon: "../assets/images/sidebar-icons/Dashboard.png",
    href: "#",
  },
  {
    title: "Manuals Library",
    icon: "../assets/images/sidebar-icons/Operations Library.png",
    href: "#",
  },
  {
    title: "Training",
    icon: "../assets/images/sidebar-icons/Training.png",
    href: "#",
  },
  {
    title: "Audits",
    icon: "../assets/images/sidebar-icons/Audits.png",
    href: "#",
  },
];

export const SideDrawer = () => {
  const { state, dispatch } = useViewContext();
  const isMobile = useMediaQuery("(max-width: 767px)");

  if (isMobile) {
    return (
      <>
        <SideNavMobile
          isMobile={isMobile}
          openSideNav={state.openSideNav}
          dispatch={dispatch}
        />
        <SideNotifDrawer
          isMobile={isMobile}
          openSideNotif={state.openSideNotifNav}
          dispatch={dispatch}
        />
      </>
    );
  } else {
    return (
      <div
        id="mySidenav"
        className="sidenav d-non d-md-flex"
        style={{
          width: state.openSideNav ? "250px" : "",
        }}
      >
        <div className="box">
          {MENU_SIDE_NAV.map((item, idx) => (
            <a href={item.href} key={idx}>
              <img src={new URL(item.icon, import.meta.url)} alt="" />
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
};

export const SideNavMobile = ({ isMobile, openSideNav, dispatch }) => {
  return (
    <>
      <div
        id="mobile-overlay"
        className="mobile-overlay"
        onClick={() => {
          dispatch({
            type: OPEN_SIDE_NAV,
          });
        }}
      />
      <div
        id="sidenav-mobile"
        className="sidenav-mobile"
        style={{
          width: openSideNav && isMobile ? "80%" : "",
        }}
      >
        <div className="box d-flex flex-column justify-content-between">
          <div className="top">
            <div className="brand-name mb-4">
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
            {MENU_SIDE_NAV.map((item, idx) => (
              <a href={item.href} key={idx}>
                <img src={new URL(item.icon, import.meta.url)} alt="" />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="close">
          <button
            className="btn"
            onClick={() => {
              dispatch({
                type: OPEN_SIDE_NAV,
              });
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      </div>
    </>
  );
};

export const SideNotifDrawer = ({ isMobile, openSideNotif, dispatch }) => {
  return (
    <div
      id="notif-mobile"
      className="notif-mobile"
      style={{
        width: isMobile && openSideNotif ? "100%" : "",
      }}
    >
      <div className="notif-title p-3">
        <h4>Notifications</h4>
        <div className="close">
          <a href="#">
            <i className="fa-solid fa-check-double"></i> Mark all as read
          </a>
          <button
            className="btn"
            onClick={() => {
              dispatch({
                type: OPEN_SIDE_NOTIF,
              });
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="notif">
          <div className="photo-area">
            <div className="dot"></div>
            <img src="https://picsum.photos/100" alt="" />
          </div>
          <div className="text-area">
            <p>
              <strong>Wei Si</strong> assigned a new task{" "}
              <strong>Task Name</strong> to you.
            </p>
            <span>1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

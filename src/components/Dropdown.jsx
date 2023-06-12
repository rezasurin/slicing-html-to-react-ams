import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const BasicDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle></Dropdown.Toggle>
    </Dropdown>
  );
};

export const DropdownFilterCheckbox = ({ buttonTitle, options }) => {
  const [selectedCb, setSelectedCb] = useState([]);

  const checkAll = (ele) => {
    const { name } = ele.target;
    if (!selectedCb.includes(name)) {
      setSelectedCb((prev) => {
        return [...prev, name].concat(options);
      });
    } else {
      setSelectedCb((prev) => {
        return [];
      });
    }
  };

  const handleCheck = (ele) => {
    const { name } = ele.target;

    if (!selectedCb.includes(name)) {
      setSelectedCb((prev) => {
        return [...prev, name];
      });
    } else {
      setSelectedCb((prev) => {
        return prev.filter((item) => item !== name);
      });
    }
  };

  return (
    <Dropdown className="">
      <Dropdown.Toggle as={DropdownCustomToggle}>{buttonTitle}</Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          color: "#344050",
        }}
      >
        <li style={{ listStyle: "none" }}>
          <b style={{ fontSize: "14px" }}>Filter by status</b>
        </li>
        <li
          style={{
            listStyle: "none",
          }}
        >
          <input
            type="checkbox"
            name="select-all"
            onChange={checkAll}
            checked={selectedCb.includes("select-all")}
          />
          <span style={{ fontSize: "14px" }}> Select All</span>
        </li>
        {options.map((item, idx) => (
          <li
            key={idx}
            style={{
              listStyle: "none",
            }}
          >
            <input
              type="checkbox"
              checked={selectedCb.includes(item)}
              onChange={handleCheck}
              name={item}
            />
            <span style={{ fontSize: "14px" }}> {item}</span>
          </li>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const DropdownCustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul
          className="items"
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            color: "#3444050",
          }}
        >
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

DropdownCustomMenu.displayName = DropdownCustomMenu;

export const DropdownCustomToggle = React.forwardRef(
  ({ children, onClick }, ref) => (
    <button
      className="btn d-flex align-items-center custom-select"
      type="button"
      style={{
        padding: "10px",
      }}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <span className="mb-0 mr-3">{children}</span>
    </button>
  )
);

DropdownCustomToggle.displayName = DropdownCustomToggle;

export const DropdownButtonBrandName = React.forwardRef(
  ({ children, onClick }, ref) => (
    <button
      className="btn p-0 d-flex align-items-center w-100"
      type="button"
      data-toggle="dropdown"
      aria-expanded="false"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <h4 className="mb-0 mr-3">{children}</h4>
      <svg
        width="17"
        height="11"
        viewBox="0 0 17 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.486039 1.35866C0.720449 1.12432 1.03833 0.992676 1.36979 0.992676C1.70124 0.992676 2.01913 1.12432 2.25354 1.35866L8.44104 7.54616L14.6285 1.35866C14.8643 1.13096 15.18 1.00497 15.5078 1.00782C15.8355 1.01066 16.1491 1.14213 16.3808 1.37389C16.6126 1.60565 16.744 1.91916 16.7469 2.24691C16.7497 2.57465 16.6237 2.89041 16.396 3.12616L9.32479 10.1974C9.09038 10.4317 8.77249 10.5634 8.44104 10.5634C8.10958 10.5634 7.7917 10.4317 7.55729 10.1974L0.486039 3.12616C0.2517 2.89175 0.120056 2.57386 0.120056 2.24241C0.120056 1.91095 0.2517 1.59307 0.486039 1.35866Z"
          fill="#344050"
        />
      </svg>
    </button>
  )
);
export const DropdownButtonProfile = React.forwardRef(
  ({ children, onClick }, ref) => (
    <a
      className="dropdown-toggle d-flex align-items-center"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  )
);

DropdownButtonBrandName.displayName = DropdownButtonBrandName;
DropdownButtonProfile.displayName = DropdownButtonProfile;

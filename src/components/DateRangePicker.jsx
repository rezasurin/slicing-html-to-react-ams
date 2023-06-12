import moment from "moment/moment";
import React, { useEffect, useRef, useState } from "react";
// import DateRangePicker from 'react-bootstrap-daterangepicker';
import { DateRangePicker } from "rsuite";

const DateRangePickerCstom = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState(null)

  // eslint-disable-next-line react/display-name
  const InputField = React.forwardRef((props, ref) => {
    
    return (
      <input
        className="form-control mb-3"
        type="text"
        name="datefilter"
        value={value?.map(item => moment(item).format("MMMM D, yyyy")).join(" - ")}
        placeholder="March 21, 2023 - March 31, 2023"
        onClick={(e) => {
          e.preventDefault();
          props.onClick(e);
        }}
        // {...rest}
        ref={ref}
      />
    )
  });
  // InputFIeld.disp
  return <DateRangePicker as={InputField} value={value} format="MMMM dd, yyyy" onChange={setValue} defaultValue={[new Date("2023-03-21"), new Date("2023-03-31")]} placement="autoHorizontalStart" />;
};

export default DateRangePickerCstom;

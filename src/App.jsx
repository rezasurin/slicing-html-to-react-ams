import { useState } from "react";
import { Layout } from "./components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { Table } from "./components/Table";
import {
  DropdownFilterCheckbox,
} from "./components/Dropdown";
import DateRangePicker from "./components/DateRangePicker";
import { DATA_WIDGETS } from "./data";
import WidgetCounter from "./components/WidgetCounter";

function App() {

  return (
    <>
      <Layout>
        {/* BANNER WELCOME */}
        <Container fluid className="mb-4">
          <Row>
            <Col md={12}>
              <div className="top-brand-name d-flex flex-column justify-content-between p-4">
                <div
                  className="brand-title d-flex align-items-end"
                  style={{
                    paddingTop: "100px",
                  }}
                >
                  <img
                    src="https://picsum.photos/300"
                    className="mr-3"
                    alt=""
                  />
                  <h1 className="mb-3">
                    Hello, welcome to <br />
                    [Brand Name] dashboard!
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* END OF BANNER WELCOME */}

        {/* BUTTON REFRESH */}
        <Container fluid className="mb-4">
          <Row>
            <div className="col-12 d-flex justify-content-end top-button-area">
              <button className="btn btn-refresh mr-2">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7477 12.1519C17.5378 12.0865 17.3104 12.1067 17.1153 12.2082C16.9202 12.3096 16.7731 12.4841 16.7061 12.6936C16.3124 13.8973 15.5449 14.944 14.5152 15.6814C13.4855 16.4188 12.2474 16.8084 10.9811 16.7936C9.41468 16.8114 7.90517 16.2073 6.78353 15.1138C5.6619 14.0203 5.01968 12.5266 4.99772 10.9603C5.01968 9.39393 5.6619 7.90024 6.78353 6.80672C7.90517 5.71321 9.41468 5.10912 10.9811 5.12692C12.3957 5.1235 13.7668 5.61593 14.8561 6.51859L13.0477 6.21859C12.9393 6.20075 12.8285 6.20452 12.7216 6.22967C12.6147 6.25482 12.5138 6.30086 12.4247 6.36514C12.3357 6.42942 12.2602 6.51067 12.2026 6.60422C12.1451 6.69777 12.1066 6.80178 12.0894 6.91025C12.0716 7.01863 12.0753 7.12946 12.1005 7.23638C12.1256 7.3433 12.1717 7.44419 12.2359 7.53325C12.3002 7.62231 12.3815 7.69778 12.475 7.75533C12.5686 7.81288 12.6726 7.85137 12.7811 7.86859L16.3144 8.45192H16.4561C16.5527 8.45181 16.6486 8.43489 16.7394 8.40192C16.7699 8.39033 16.7981 8.3734 16.8227 8.35192C16.8825 8.3297 16.9386 8.29882 16.9894 8.26025L17.0644 8.16859C17.0644 8.12692 17.1394 8.09359 17.1727 8.04359C17.2061 7.99359 17.1727 7.96025 17.2144 7.92692C17.2374 7.87839 17.2569 7.82826 17.2727 7.77692L17.8977 4.44359C17.9185 4.33415 17.9175 4.22169 17.8949 4.11263C17.8722 4.00357 17.8283 3.90004 17.7656 3.80796C17.7029 3.71587 17.6227 3.63703 17.5296 3.57595C17.4364 3.51486 17.3322 3.47271 17.2227 3.45192C17.1133 3.43113 17.0008 3.43209 16.8918 3.45476C16.7827 3.47743 16.6792 3.52136 16.5871 3.58404C16.4011 3.71063 16.273 3.90591 16.2311 4.12692L16.0061 5.33525C14.611 4.12629 12.827 3.46061 10.9811 3.46025C8.97267 3.44248 7.03925 4.22217 5.60506 5.62824C4.17087 7.03431 3.35305 8.95191 3.33105 10.9603C3.35305 12.9686 4.17087 14.8862 5.60506 16.2923C7.03925 17.6983 8.97267 18.478 10.9811 18.4603C12.6087 18.4853 14.2013 17.987 15.5245 17.0389C16.8477 16.0908 17.8315 14.7428 18.3311 13.1936C18.3627 13.0869 18.3726 12.975 18.3602 12.8644C18.3479 12.7538 18.3135 12.6468 18.2591 12.5497C18.2048 12.4526 18.1315 12.3674 18.0437 12.2991C17.9558 12.2308 17.8552 12.1807 17.7477 12.1519Z"
                    fill="white"
                  />
                </svg>{" "}
                Refresh
              </button>
            </div>
          </Row>
        </Container>
        {/* END OF BUTTON REFRESH */}

        {/* WIDGETS */}
        <Container fluid className="mb-4">
          <Row className="row">
            {
              DATA_WIDGETS.map((item, idx) => (
                <WidgetCounter title={item.title} value={item.value} key={idx} />
              ))
            }
          </Row>
        </Container>
        {/* END OF WIDGETS */}

        {/* TABLE WIDGETS */}
        <Container fluid className="mb-4">
          <Row>
            <Col>
              <div className="white-box pt-5 px-5 pb-3">
                <Row className="mb-3">
                  <Col md={8}>
                    <h4 className="m-0">My Tasks</h4>
                  </Col>
                  <Col
                    md={4}
                    className="d-flex justify-content-end"
                    style={{ paddingRight: "18px" }}
                  >
                    <Row>
                      <Col
                        md={4}
                        style={{
                          paddingRight: "5px !important",
                          paddingLeft: "5px !important",
                          paddingTop: "8px",
                        }}
                      >
                        <span>Show:</span>
                      </Col>
                      <Col
                        md={8}
                        style={{
                          fontSize: "12px",
                          paddingLeft: "8px !important",
                        }}
                      >
                        <select
                          className="custom-select"
                          id="inputGroupSelect03"
                        >
                          <option selected value="5">
                            5
                          </option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row
                  className="mb-3"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  <Col md={5}>
                    <Col
                      md={9}
                      style={{
                        paddingRight: "5px !important",
                        paddingLeft: "5px !important",
                      }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder="Search by keywords, min 3 character"
                      />
                    </Col>
                  </Col>

                  <Col md={7}>
                    <Row>
                      <Col md={3}>
                        <DropdownFilterCheckbox
                          buttonTitle={"Task Type"}
                          options={[
                            "Do Audit",
                            "Audit Action",
                            "Read Manual",
                            "Acknowledge Audit",
                          ]}
                        />
                      </Col>
                      <Col md={3}>
                        <DropdownFilterCheckbox
                          buttonTitle={"Status"}
                          options={[
                            "Orange",
                            "Grapes",
                            "Berry",
                            "Mango",
                            "Banana",
                            "Tomato",
                          ]}
                        />
                      </Col>
                      <Col md={6}>
                        <DateRangePicker />
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <div className="table-responsive">
                      <Table />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        {/* END OF TABLE WIDGETS */}
      </Layout>
    </>
  );
}

export default App;

import { Col } from "react-bootstrap";

export default function WidgetCounter({ title, value }) {
  return (
    <Col md={3} className="mt-2 mt-md-0">
      <div className="white-box p-4">
        <h4 className="mb-3">{title}</h4>
        <h4 className="mb-1">{value}</h4>
      </div>
    </Col>
  );
}

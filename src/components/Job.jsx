import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const selectedBtn = useSelector(
    (state) => state.selectedBtn.content
  );
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{
        border: "1px solid #00000033",
        borderRadius: 4,
      }}
    >
      <Col xs={3} className="d-flex align-items-center">
        <Link to={`/${data.company_name}`}>
          {data.company_name}
        </Link>
        <Button
          variant="btn"
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAVORITES",
              payload: data.company_name,
            });
            dispatch({
              type: "SELECTED_BUTTON",
              payload: data,
            });
          }}
        >
          <p
            className={
              selectedBtn?._id === data._id
                ? "text-danger m-0"
                : "text-black m-0"
            }
          >
            <i
              className={
                selectedBtn?._id === data._id
                  ? "bi bi-heart-fill"
                  : "bi bi-heart"
              }
            ></i>
          </p>
        </Button>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

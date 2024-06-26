import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const dispatch = useDispatch();
  const favoriteCompany = useSelector(
    (state) => state.favoriteCompany.content
  );
  return (
    <ListGroup>
      {favoriteCompany.length > 0 ? (
        favoriteCompany.map((company, i) => {
          return (
            <ListGroup.Item key={i}>
              <Link to={`/${company}`}>{company}</Link>

              <Button
                variant="danger mx-3"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_FAVORITES",
                    payload: company,
                  });
                }}
              >
                <i className="bi bi-trash3"></i>
              </Button>
            </ListGroup.Item>
          );
        })
      ) : (
        <ListGroup.Item>
          Nessuna azienda aggiunta ai preferiti
        </ListGroup.Item>
      )}
    </ListGroup>
  );
};
export default Favourites;

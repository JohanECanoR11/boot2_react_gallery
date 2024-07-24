import { Link } from "react-router-dom";
import { Orquidea1 } from "./Orquidea1";
import { Orquidea2 } from "./Orquidea2";
import { Orquidea3 } from "./Orquidea3";
import { Orquidea4 } from "./Orquidea4";
import { Orquidea5 } from "./Orquidea5";
import { Orquidea6 } from "./Orquidea6";

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
        <Link to="/orquidea1" className="links">
          <figure className="image-size">
            <Orquidea1 />
            <figcaption>Orquídea Calanthe</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea2" className="links">
          <figure className="image-size">
            <Orquidea2 />
            <figcaption>Orquídea Cattleya</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea3" className="links">
          <figure className="image-size">
            <Orquidea3 />
            <figcaption>Orquídea Cymbidium</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea4" className="links">
          <figure className="image-size">
            <Orquidea4 />
            <figcaption>Orquídea Masdevallia</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea5" className="links">
          <figure className="image-size">
            <Orquidea5 />
            <figcaption>Orquídea Aerangis</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea6" className="links">
          <figure className="image-size">
            <Orquidea6 />
            <figcaption>Orquídea Dendrobium</figcaption>
          </figure>
        </Link>
    </div>
  )
}

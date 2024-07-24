import { Link } from "react-router-dom";
import { Orquidea1 } from "./Orquidea1";
import { Orquidea2 } from "./Orquidea2";
import { Orquidea3 } from "./Orquidea3";
import { Orquidea4 } from "./Orquidea4";
import { Orquidea5 } from "./Orquidea5";
import { Orquidea6 } from "./Orquidea6";

export const Navigation = () => {
  return (
    <div>
        <Link to="/orquidea1">
          <figure>
            <Orquidea1 />
            <figcaption>Orquídea 1</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea2">
          <figure>
            <Orquidea2 />
            <figcaption>Orquídea 2</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea3">
          <figure>
            <Orquidea3 />
            <figcaption>Orquídea 3</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea4">
          <figure>
            <Orquidea4 />
            <figcaption>Orquídea 4</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea5">
          <figure>
            <Orquidea5 />
            <figcaption>Orquídea 5</figcaption>
          </figure>
        </Link>
        <Link to="/orquidea6">
          <figure>
            <Orquidea6 />
            <figcaption>Orquídea 6</figcaption>
          </figure>
        </Link>
    </div>
  )
}

import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { genres } from '../../const';

export default function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <Fragment key={genre}>
          <li className="catalog__genres-item catalog__genres-item--active">
            <Link to="/" className="catalog__genres-link">{genre}</Link>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

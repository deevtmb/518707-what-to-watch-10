import { Fragment } from 'react';
import { Link } from 'react-router-dom';

type GenresListProps = {
  genres: string[],
  selectedGenre: string,
  onGenreItemClick: (film: string) => void,
}

export default function GenresList({genres, selectedGenre, onGenreItemClick}: GenresListProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <Fragment key={genre}>
          <li className={`catalog__genres-item ${genre === selectedGenre && 'catalog__genres-item--active'}`}>
            <Link onClick={() => onGenreItemClick(genre)} to="/" className="catalog__genres-link">{genre}</Link>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

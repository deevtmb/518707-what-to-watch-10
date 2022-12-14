import { MouseEvent, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingLayout from '../../components/loading-layout/loading-layout';
import PlayerTimer from '../../components/player-timer/player-timer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFilmInfoAction } from '../../store/api-actions';
import { getFilmInfo, getLoadingErrorStatus } from '../../store/films-data/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';

export default function PlayerScreen(): JSX.Element {
  const film = useAppSelector(getFilmInfo);
  const isLoadingError = useAppSelector(getLoadingErrorStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const handlePlayButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setPlaying((prevState) => !prevState);
    }
  };

  const onTimerChangeHandler = (fullTime: number, leftTime: number): void => {
    const prog = (1 - leftTime / fullTime) * 100;
    setProgress(prog);
  };

  useLayoutEffect(() => {
    if (id && Number(id)) {
      dispatch(fetchFilmInfoAction(id));
    }

    if (videoRef.current) {
      videoRef.current.addEventListener('play', () => {
        setPlaying(true);
      });

      videoRef.current.addEventListener('pause', () => {
        setPlaying(false);
      });
    }
  }, [id, dispatch]);

  if (!id || isLoadingError || !Number(id)) {
    return (
      <NotFoundScreen />
    );
  }

  if (!film || (id && film.id !== +id)) {
    return (
      <LoadingLayout />
    );
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        preload="auto"
        muted
        autoPlay
        loop
      >
      </video>

      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          {progress &&
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100"></progress>
              <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
            </div>}
          <PlayerTimer runTime={film.runTime} isPlaying={isPlaying} onTimerChangeHandler={onTimerChangeHandler} />
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayButtonClick}>
            {isPlaying ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </> :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>}
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={() => videoRef.current && videoRef.current.requestFullscreen()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

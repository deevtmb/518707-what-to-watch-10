import { useRef } from 'react';
import { Film } from '../../types/film';

type SmallFilmCardPlayerProps = {
  film: Film,
  activeCardId: number | null,
}

export default function SmallFilmCardPlayer({film, activeCardId}: SmallFilmCardPlayerProps): JSX.Element {
  const VIDEO_PLAY_DELAY = 1000;
  const {previewImage, previewVideoLink} = film;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  setTimeout(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, VIDEO_PLAY_DELAY);

  return (
    <video ref={videoRef} src={previewVideoLink} poster={previewImage} loop muted width="280" height="175" ></video>
  );
}

import {Watch} from 'react-loader-spinner';

export default function LoadingLayout() {
  return (
    <div
      className="spinner"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'linear-gradient(-180deg,#180202 0%,#000 100%)'
      }}
    >
      <Watch color="#DFCF77" height="150" width="150" />
    </div>
  );
}

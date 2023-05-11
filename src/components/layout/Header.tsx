import { Link, useLocation } from 'react-router-dom';
import headerUrl from '../../assets/ashby-logo.svg';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div className="flex justify-start items-center py-8">
      {!isHomePage && (
        <Link
          className="flex items-center text-sm hover:underline text-ashby-700"
          to="/"
        >
          <svg
            className="inline mr-1"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.80001 12.8833L0.183344 7.28333C0.116677 7.21667 0.0693437 7.14444 0.0413437 7.06667C0.0133437 6.98889 -0.000434028 6.90556 1.04167e-05 6.81667C1.04167e-05 6.72778 0.0140104 6.64444 0.0420104 6.56667C0.0700104 6.48889 0.117122 6.41667 0.183344 6.35L5.80001 0.733333C5.95557 0.577778 6.15001 0.5 6.38334 0.5C6.61668 0.5 6.81668 0.583333 6.98334 0.75C7.15001 0.916667 7.23334 1.11111 7.23334 1.33333C7.23334 1.55556 7.15001 1.75 6.98334 1.91667L2.08334 6.81667L6.98334 11.7167C7.1389 11.8722 7.21668 12.064 7.21668 12.292C7.21668 12.52 7.13334 12.7171 6.96668 12.8833C6.80001 13.05 6.60557 13.1333 6.38334 13.1333C6.16112 13.1333 5.96668 13.05 5.80001 12.8833Z"
              fill="#5246D8"
            />
          </svg>
          Back to Jobs
        </Link>
      )}
      <Link
        to="/"
        className={`mx-auto relative ${isHomePage ? '' : 'right-12'}`}
      >
        <img alt="ashby logo" src={headerUrl} />
      </Link>
    </div>
  );
}

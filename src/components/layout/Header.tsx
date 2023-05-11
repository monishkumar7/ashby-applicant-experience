import { Link } from 'react-router-dom';
import headerUrl from '../../assets/ashby-logo.svg';

export default function Header() {
  return (
    <div className="flex justify-center py-8">
      <Link to="/">
        <img alt="ashby logo" src={headerUrl} />
      </Link>
    </div>
  );
}

import headerUrl from '../../assets/ashby-logo.svg';

export default function Header() {
  return (
    <div className="flex justify-center py-8">
      <img alt="ashby logo" src={headerUrl} />
    </div>
  );
}

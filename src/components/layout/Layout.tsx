import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <div className="bg-ashby-50 font-body text-gray-700 min-h-screen px-4 py-8">
      <Header />
      {props.children}
    </div>
  );
}

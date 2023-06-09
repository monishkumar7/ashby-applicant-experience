import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <div className="bg-ashby-50 font-body text-gray-700 min-h-screen px-6 pt-8">
      <div className="flex flex-col max-w-prose mx-auto min-h-[calc(100vh-50px)]">
        <Header />
        <div className="grow">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
}

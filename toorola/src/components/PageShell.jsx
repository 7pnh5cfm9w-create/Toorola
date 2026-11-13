import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

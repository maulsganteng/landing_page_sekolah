import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './komponen/header';
import Footer from './komponen/footer';
import Profile from './komponen/profil';
import Carousel from './komponen/carousel';

function App() {
  return (
  <>
  <Header />
  <Carousel />
  <Profile />
  <Footer />
  </>
  );
}

export default App;

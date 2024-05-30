import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './komponen/header';
import Footer from './komponen/footer';
import Profile from './komponen/profil';
import MyCarousel from './komponen/carousel';
import Fasilitas from './komponen/fasilitas';

function App() {
  return (
  <>
  <Header />
  <MyCarousel />
  <Profile />
  <Fasilitas />
  <Footer />
  </>
  );
}

export default App;

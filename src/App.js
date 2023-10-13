import Footer from './Pages/Footer/Footer';
import Faq from './Pages/Home/Faq/Faq';
import Feedback from './Pages/Home/Feedback/Feedback';
import Home from './Pages/Home/Home/Home';
import Order from './Pages/Home/Order/Order';
import Product from './Pages/Home/Product/Product';
import Video from './Pages/Home/Video/Video';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <Navbar></Navbar>
      <Video></Video>
      <Home></Home>
      <Product></Product>
      <Feedback></Feedback>
      <Faq></Faq>
      <Order></Order>
      <Footer></Footer>
    </div>
  );
}

export default App;

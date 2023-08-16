import './App.css';

import Sidebar from './components/sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;

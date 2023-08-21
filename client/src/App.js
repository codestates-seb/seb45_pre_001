import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AskQuestionPage from './pages/AskQuestionPage';
// import LoginPage from './pages/LoginPage';
// import LoginPage from './pages/LoginPage';
// import QuestionListPage from './pages/QuestionPageList';

// import SignupPage from './pages/SignupPage';

// import Sidebar from './components/sidebar';
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header />
      <Sidebar />
      <Footer /> */}
        {/* <SignupPage /> */}
        {/* <QuestionListPage /> */}
        {/* <LoginPage /> */}
        <AskQuestionPage />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

/*page*/
import LoginPage from './pages/LoginPage';
import QuestionListPage from './pages/QuestionPageList';
import SignupPage from './pages/SignupPage';
import AskQuestionPage from './pages/AskQuestionPage';
import QuestionDetail from './pages/QuestionDetail';

/*component*/
import Header from './components/Header';
import Footer from './components/Footer';
// import Sidebar from './components/sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<QuestionListPage />} />
          <Route
            path="/questions/new-questions"
            element={<AskQuestionPage />}
          />
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/new-user" element={<SignupPage />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
        </Routes>
        <Footer />
      </div>
      {/* <Sidebar /> */}
    </BrowserRouter>
  );
}

export default App;

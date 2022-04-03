import Game from './sharedComponents/TicTacToe/Game';
import Menu from './sharedComponents/Menu';
import MyButton from './sharedComponents/MyButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './sharedComponents/Home';
import News from './sharedComponents/News';
import NewsDetail from './sharedComponents/NewsDetail';
import SignInForm from './sharedComponents/SignInForm';
import Alert from './sharedComponents/Alert';
import Greet from './sharedComponents/Greet';
import NewsEditForm from './sharedComponents/NewsEditForm';
import SearchFilter from './sharedComponents/SearchFilter';
import { ThemeContextProvider } from './context/ThemeContext';
import { NewsContextProvider } from './context/NewsContext';
import Weather from './sharedComponents/Weather';
import PhoneInput from './sharedComponents/PhoneInput';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/news"
            element={
              <NewsContextProvider>
                <News />
              </NewsContextProvider>
            }
          />
          <Route path="/news/:id" element={<NewsEditForm />} />
          <Route path="/news/edit/:id" element={<NewsEditForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/alert/:id" element={<Alert show={true} color="red" text="Toto je můj alert!!" />} />
          <Route path="/greet" element={<Greet name="Roman" />} />
          <Route path="/search" element={<SearchFilter values={['Banana', 'Apple', 'Pear', 'Ananas']} />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/phone" element={<PhoneInput />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;


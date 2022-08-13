import logo from './logo.svg';
import './App.css';
import Contacts from "./components/Contacts";
import Forum from "./components/Forum";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import TeacherReviews from './components/forum/TeacherReviews';
import ProwadzacyLanding from './components/prowadzacy/ProwadzacyLanding'
import ZajeciaProwadzacyResult from './components/prowadzacy/ZajeciaProwadzacyResult';
import TeacherQueryResult from './components/prowadzacy/results/TeacherQueryResult';
import SalaQueryResult from './components/prowadzacy/results/SalaQueryResult'
import Pozostale from './components/Pozostale';

function App() {
  return (
    <Router>
    <div className="container-fluid" href="/">
      <nav>
        <div className="nav-wrapper center-align black">
          <a href="/" className='flow-text'>PWr-API sandbox</a>
        </div>
      </nav>
      </div>
    <Routes>
    <Route path="/parking" element={<Contacts />} />
    <Route path="/" element={<Home/>}/>
    <Route path="/forum" element={<Forum/>}/>
    <Route path="/opinieNauczyciel" element={<TeacherReviews/>}/>
    <Route path="/prowadzacy" element={<ProwadzacyLanding/>}/>
    <Route path="/zajeciaprowadzacy" element={<TeacherQueryResult/>}/>
    <Route path="/zajeciasala" element={<SalaQueryResult/>}/>
    <Route path="/pozostale" element={<Pozostale/>}/>
    </Routes>
    </Router>
  );
}


const Home = () => (
  <div className="container">
  <h2 className="align-center">Wybierz, co chcesz przetestować</h2>
  <h5><italic>PWr-API sandbox to epicka strona internetowa stworzona korzystając z reacta, która pozwala na praktyczne poznanie ogólnodostępnych funkcjonalności PWr-API</italic></h5>
      <div class="row">
    <div class="col s12 m6" >
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">PARKING</span>
          <p>Sprawdź obecny stan parkingów, ostatnie aktualizacje i trendy.</p>
        </div>
        <div class="card-action">
          <Link to="/parking">*klik*</Link>
        </div>
      </div>
    </div>
    <div class="col s12 m6" >
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">FORUM</span>
          <p>Przejrzyj ranking nauczycieli, statystyki bazy danych</p>
        </div>
        <div class="card-action">
          <Link to="/forum">*klik*</Link>
        </div>
      </div>
    </div>
    <div class="col s12 m6" >
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">PROWADZACY</span>
          <p>Przejrzyj plany prowadzących</p>
        </div>
        <div class="card-action">
        <Link to="/prowadzacy">*klik*</Link>

        </div>
      </div>
    </div>
    <div class="col s12 m6" >
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">POZOSTAŁE</span>
          <p>Dowiedz się więcej o pozostałych sposobach korzystania z PWr-API</p>
        </div>
        <div class="card-action">
        <Link to="/pozostale">*klik*</Link>
        </div>
      </div>
    </div>
  </div>
    </div>
)

export default App;

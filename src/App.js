import './App.css';
import Banner from './componet/Banner';
import Nav from './componet/Nav';
import Row from './componet/Row';
import requests from './request';
function App() {
  return (
    <div >
      <Nav/>
       <Banner fetchUrl={requests.fetchNetflixOriginals}/>
       <Row  isPoster={true} title="Trending Movies" fetchUrl={requests.fetchTrending}/>

       <Row  title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;

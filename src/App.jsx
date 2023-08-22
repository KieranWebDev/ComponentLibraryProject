import './App.css';
import Badges from './Components/Badges/Badges';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <>
      <h1>Component Library</h1>
      <Badges />
      <h2>Banner</h2>
      <Banner
        status="success"
        title="testin yo"
        text="lorem ipsum to the maxxxxxxxxxxxxxx"
      ></Banner>
      <Banner
        status="warning"
        title="testin yo"
        text="lorem ipsum to the maxxxxxxxxxxxxxx"
      ></Banner>
      <Banner
        status="error"
        title="testin yo"
        text="lorem ipsum to the maxxxxxxxxxxxxxx"
      ></Banner>
      <Banner
        status="neutral"
        title="testin yo"
        text="lorem ipsum to the maxxxxxxxxxxxxxx"
      ></Banner>
    </>
  );
}

export default App;

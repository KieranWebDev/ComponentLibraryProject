import './App.css';
import Badges from './Components/Badges/Badges';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <>
      <h1>Component Library</h1>
      <Badges />
      <Banner status="neutral"></Banner>
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Slider from './components/Slider/Slider';
import { SlideProps } from './components/Slide/Slide';
import NoData from './components/NoData/NoData';
import './App.css';

const URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [slidesData, setSlidesData] = useState<SlideProps[]>();

  useEffect(() => {
    fetch(`${URL}/slides`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((json) => setSlidesData(json))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="app-container">
      {slidesData ? <Slider slidesData={slidesData} /> : <NoData />}
    </div>
  );
}

export default App;

import DiseaseRecognition from './pages/DiseaseRecognition/DiseaseRecognition';
import CropRecommendation from './pages/CropRecommendation/CropRecommendation';
import FertilizerRecommendation from './pages/FertilizerRecommendation/FertilizerRecommendation';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route
          path="/fertilizer_recommend"
          element={<FertilizerRecommendation />}
        />
        <Route path="/crop_recommend" element={<CropRecommendation />} />

        <Route path="/disease_rec" element={<DiseaseRecognition />} />
      </Routes>
    </div>
  );
}

export default App;

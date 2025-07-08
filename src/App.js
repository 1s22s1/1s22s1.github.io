import './App.css';

import Home from "./Home";
import SelfIntroduction from "./SelfIntroduction";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/self_introduction" element={<SelfIntroduction />} />
          <Route path="*" element={<p>ページは存在しないよ～。</p>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

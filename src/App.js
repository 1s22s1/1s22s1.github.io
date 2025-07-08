import Home from "./Home";
import SelfIntroduction from "./SelfIntroduction";
import Oss from "./Oss"
import Qualification from './Qualification';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/self_introduction" element={<SelfIntroduction />} />
          <Route path="/oss" element={<Oss />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="*" element={<p>ページは存在しないよ～。</p>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

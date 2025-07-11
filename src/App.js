import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";

import Home from "./pages/Home";
import SelfIntroduction from "./pages/SelfIntroduction";
import Oss from "./pages/Oss"
import Qualification from './pages/Qualification';
import LuckyUUID from "./pages/LuckyUUID";
import LuckyColor from "./pages/LuckyColor";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/self_introduction" element={<SelfIntroduction />} />
            <Route path="/oss" element={<Oss />} />
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/lucky_uuid" element={<LuckyUUID />} />
            <Route path="/lucky_color" element={<LuckyColor />} />
            <Route path="*" element={<p>ページは存在しないよ～。</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

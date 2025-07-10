import Home from "./Home";
import SelfIntroduction from "./SelfIntroduction";
import Oss from "./Oss"
import Qualification from './Qualification';
import LuckyUUID from "./LuckyUUID";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";

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
            <Route path="*" element={<p>ページは存在しないよ～。</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

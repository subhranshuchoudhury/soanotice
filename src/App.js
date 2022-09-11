import axios from 'axios';
import Layout from './Layout';
import Card from './components/Card';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
function App() {
  const [Version, setVersion] = useState([]);
  const checkVersion = async () => {

    try {
      const { data } = await axios.get(`https://api.npoint.io/1b63ea07012d5864b558`);
      setVersion(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkVersion();
  }, []);
  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/soanotice" element={<Layout info={Version} />}>
          <Route index element={<Card info={Version} APIPARAM={"gn"} />} />
          <Route path="exam-notice" element={<Card info={Version} APIPARAM={"en"} />} />
          <Route path="student-notice" element={<Card info={Version} APIPARAM={"sn"} />} />
        </Route>
      </Routes>
    </BrowserRouter>


  </>
}

export default App;

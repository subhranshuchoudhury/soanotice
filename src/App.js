import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import Card from './components/Card';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [Notifications, setNotifications] = useState([]);
  const [ApiLink, setApiLink] = useState('gn');
  const setLink = (param) => {
    alert("set link active")
    setApiLink(param);
  }
  const loadNotifications = async () => {

    try {
      const { data } = await axios.get(`https://soanoticeserver.herokuapp.com/${ApiLink}`);
      setNotifications(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadNotifications();
  }, []);
  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/soanotice" element={<Layout />}>
          <Route index element={<Card APIPARAM={"gn"} />} />
          <Route path="exam-notice" element={<Card APIPARAM={"en"} />} />
          <Route path="student-notice" element={<Card APIPARAM={"sn"} />} />
        </Route>
      </Routes>
    </BrowserRouter>


  </>
}

export default App;

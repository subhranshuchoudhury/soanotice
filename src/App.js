import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
function App() {

  // update these:
  const DEVELOPE_VERSION = 2;
  // const API_URL = 'https://raw.githubusercontent.com/subhranshuchoudhury/soanotice/main/NoticesDB.json';
  const API_URL = 'https://api.npoint.io/ed674700a8f2b7fb9da4';

  // no need to update
  const [Notices, setNotices] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(new Date().getHours() < 17);

  const fetchData = async () => {
    try {
      await fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          setNotices(data);
          setIsLoading(false);
        })


    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    return isDarkMode;
  }


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App" style={isDarkMode ? null : { backgroundColor: "black", color: "white" }}>
      <NavBar data={Notices} toggleMode={toggleDarkMode} currentMode={isDarkMode} developeVersion={DEVELOPE_VERSION} />
      <br></br><br></br><br></br>

      {
        isLoading ? <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div className="spinner-border text-warning ms-auto" role="status" aria-hidden="true"></div>
        </div> : null
      }
      {
        isError ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>⚠️Error! </strong> check internet connection or reopen/refresh the app.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> : null
      }

      {
        Notices.map((d, index) => {
          return <Card data={d} index={index} />
        })
      }
      <br></br><br></br><br></br><br></br>
      {
        Notices.length === 0 ? null : <Footer data={Notices} />
      }


    </div>
  );
}

export default App;

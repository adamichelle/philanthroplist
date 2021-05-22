import React from 'react';
import { useState } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFaucet, faBookReader, faMapMarkerAlt, faAt, faPhoneAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

library.add(fab, faFaucet, faBookReader, faMapMarkerAlt, faAt, faPhoneAlt, faLink);

function App() {
  const [navType, setNavType] = useState("landing");

  const getNavType = (navType) => {
    setNavType(navType);
  }

  return (
    <React.Fragment>  
      <Header navType={navType} />
      <main style={{minHeight: 450}}>
        <Main getNavType={getNavType} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

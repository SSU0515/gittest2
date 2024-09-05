import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./page/Landing";
import Features from "./page/Features";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: "Noto Sans", sans-serif;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
};

export default App;

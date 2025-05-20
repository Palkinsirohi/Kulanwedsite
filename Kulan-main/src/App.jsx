import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import EmailHero from "./components/EmailHero";
import DisplayAds from "./Pages/DisplayAds"; 
import ContentSyndication from "./Pages/ContentSyndication";
import SalesDevelopment from "./Pages/SalesDevelopment";
import AudienceMarketing from "./Pages/AudienceMarketing";
import AudienceSales from "./Pages/AudienceSales";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email-hero" element={<EmailHero />} />

        <Route path="/about" element={<About />} />
        <Route path="/display-ads" element={<DisplayAds />} />
        <Route path="/content-syndication" element={<ContentSyndication />} />
        <Route path="/sales-development" element={<SalesDevelopment/>} />
        <Route path="/audience-marketing" element={<AudienceMarketing/>} />
        <Route path="/audience-sale" element={<AudienceSales/>} />
      </Routes>
    </Router>
  );
}

export default App;

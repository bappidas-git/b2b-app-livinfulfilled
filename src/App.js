import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import PartnerDashboard from "./components/PartnerDashboard";
import MaterialsForCoachees from "./components/MaterialsForCoachees";
import MarketingAssets from "./components/MarketingAssets";
import ContentComingSoon from "./components/ContentComingSoon";
import StandalonePage from "./components/StandalonePage";
import LiveSessions from "./components/LiveSessions";
import Outcomes from "./components/Outcomes";
import Modules from "./components/Modules";
import Whiteboard from "./components/Whiteboard";
import EvidenceGallery from "./components/EvidenceGallery";
import ImageZoomModal from "./components/ImageZoomModal";
import "./styles/App.css";

// Cloudinary URL for Life Model image
const LIFE_MODEL_IMG =
  "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607852/Transformation-Visualization_uvcln0.png";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={<PartnerDashboard onLogout={handleLogout} />}
        />

        {/* Materials for End Users Route */}
        <Route path="/materials" element={<MaterialsForCoachees />} />

        {/* Live Sessions Route */}
        <Route
          path="/live-sessions"
          element={
            <StandalonePage title="Using Our LIVE Sessions">
              <LiveSessions />
            </StandalonePage>
          }
        />

        {/* Outcomes Route */}
        <Route
          path="/outcomes"
          element={
            <StandalonePage title="Your Outcomes">
              <Outcomes />
            </StandalonePage>
          }
        />

        {/* Life Model Route - Opens Zoom Modal */}
        <Route
          path="/life-model"
          element={
            <>
              <PartnerDashboard onLogout={handleLogout} />
              <ImageZoomModal
                isOpen={true}
                onClose={() => window.history.back()}
                imageUrl={LIFE_MODEL_IMG}
                title="Living Fulfilled Life Model"
              />
            </>
          }
        />

        {/* Modules Route */}
        <Route
          path="/modules"
          element={
            <StandalonePage title="18 Modules Programme">
              <Modules />
            </StandalonePage>
          }
        />

        {/* Whiteboard Route - Full Screen */}
        <Route
          path="/whiteboard"
          element={
            <StandalonePage title="" fullScreen>
              {" "}
              {/* ← title is already empty string */}
              <Whiteboard standalone={true} />
            </StandalonePage>
          }
        />

        {/* Evidence Gallery Route */}
        <Route
          path="/evidence-gallery"
          element={
            <StandalonePage title="Evidence Based Life Planning">
              <EvidenceGallery />
            </StandalonePage>
          }
        />

        {/* Marketing Assets Route */}
        <Route path="/marketing-assets" element={<MarketingAssets />} />

        {/* Content Coming Soon Route - for all marketing asset sub-pages */}
        <Route path="/coming-soon/:section" element={<ContentComingSoon />} />

        {/* Brand & Messaging Playbook Route - redirects to coming soon */}
        <Route
          path="/brand-messaging"
          element={<Navigate to="/coming-soon/brand-messaging" replace />}
        />

        {/* Media Kit Route - redirects to coming soon */}
        <Route
          path="/media-kit"
          element={<Navigate to="/coming-soon/media-kit" replace />}
        />

        {/* Default Route - Redirect to Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

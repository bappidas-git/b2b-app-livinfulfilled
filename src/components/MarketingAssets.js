import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowBack, ArrowForward, RecordVoiceOver, ViewCarousel, Assignment, Create, OndemandVideo, AccountTree, Videocam } from "@mui/icons-material";
import Logo from "../assets/Logo.png";
import "../styles/MarketingAssets.css";

const MarketingAssets = () => {
  const navigate = useNavigate();

  // Marketing Assets folder cards
  const marketingAssetCards = [
    {
      id: "user-testimonials",
      title: "User Testimonials Videos and Words",
      IconComponent: RecordVoiceOver,
      route: "/coming-soon/user-testimonials",
    },
    {
      id: "web-banner",
      title: "Web Banner",
      IconComponent: ViewCarousel,
      route: "/coming-soon/web-banner",
    },
    {
      id: "online-form",
      title: "Online Form",
      IconComponent: Assignment,
      route: "/coming-soon/online-form",
    },
    {
      id: "sales-copy",
      title: "Copy for Sales Page",
      IconComponent: Create,
      route: "/coming-soon/sales-copy",
    },
    {
      id: "explainer-video",
      title: "Explainer Video",
      IconComponent: OndemandVideo,
      route: "/coming-soon/explainer-video",
    },
    {
      id: "b2b-funnel",
      title: "Funnel for B2B Partners",
      IconComponent: AccountTree,
      route: "/coming-soon/b2b-funnel",
    },
    {
      id: "b2b-brand-video",
      title: "B2B Brand Video",
      IconComponent: Videocam,
      route: "/coming-soon/b2b-brand-video",
    },
  ];

  return (
    <div className="marketing-assets-page">
      {/* Header */}
      <header className="marketing-assets-header">
        <div className="header-left-marketing">
          <img src={Logo} alt="Living Fulfilled" className="header-logo-small" />
          <button className="back-button-marketing" onClick={() => navigate("/dashboard")}>
            <ArrowBack fontSize="small" />
            <span>Dashboard</span>
          </button>
        </div>
        <h1 className="marketing-assets-page-title">Marketing Assets</h1>
        <div className="header-spacer"></div>
      </header>

      {/* Main Content */}
      <main className="marketing-assets-main">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="marketing-assets-content"
        >
          <div className="marketing-assets-cards-grid">
            {marketingAssetCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="marketing-asset-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                onClick={() => navigate(card.route)}
              >
                <h3 className="marketing-asset-title">{card.title}</h3>
                <div className="marketing-asset-icon">
                  <card.IconComponent className="marketing-asset-mui-icon" />
                </div>
                <button className="marketing-action-button explore">
                  Explore Now
                  <ArrowForward className="button-icon" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MarketingAssets;

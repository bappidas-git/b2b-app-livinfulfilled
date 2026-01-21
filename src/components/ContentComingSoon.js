import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack, Construction, RocketLaunch } from "@mui/icons-material";
import Logo from "../assets/Logo.png";
import "../styles/ContentComingSoon.css";

const ContentComingSoon = () => {
  const navigate = useNavigate();
  const { section } = useParams();

  // Map section slugs to display titles
  const sectionTitles = {
    "user-testimonials": "User Testimonials Videos and Words",
    "web-banner": "Web Banner",
    "online-form": "Online Form",
    "sales-copy": "Copy for Sales Page",
    "coachee-testimonials": "2 Coachee Testimonial Videos",
    "explainer-video": "Explainer Video",
    "b2b-funnel": "Funnel for B2B Partners",
    "b2b-brand-video": "B2B Brand Video",
    "brand-messaging": "Brand & Messaging Playbook",
    "media-kit": "Living Fulfilled Media Kit",
  };

  const title = sectionTitles[section] || "Content";

  return (
    <div className="coming-soon-page">
      {/* Header */}
      <header className="coming-soon-header">
        <div className="header-left-coming-soon">
          <img src={Logo} alt="Living Fulfilled" className="header-logo-small" />
          <button className="back-button-coming-soon" onClick={() => navigate(-1)}>
            <ArrowBack fontSize="small" />
            <span>Back</span>
          </button>
        </div>
        <h1 className="coming-soon-page-title">{title}</h1>
        <div className="header-spacer"></div>
      </header>

      {/* Main Content */}
      <main className="coming-soon-main">
        <motion.div
          className="coming-soon-content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="coming-soon-card">
            <motion.div
              className="coming-soon-icon-container"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Construction className="coming-soon-icon primary" />
              <RocketLaunch className="coming-soon-icon secondary" />
            </motion.div>

            <motion.h2
              className="coming-soon-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Content Coming Soon
            </motion.h2>

            <motion.p
              className="coming-soon-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              We're working hard to bring you amazing content for <strong>{title}</strong>.
              Stay tuned for updates!
            </motion.p>

            <motion.div
              className="coming-soon-decoration"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <span className="progress-label">In Development</span>
            </motion.div>

            <motion.button
              className="coming-soon-back-button"
              onClick={() => navigate(-1)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowBack className="button-icon" />
              Go Back
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ContentComingSoon;

import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import "../styles/Outcomes.css";

const Outcomes = ({ standalone = false }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    type: "",
    url: "",
  });

  const outcomes = [
    {
      title: "Life Plan Excel",
      icon: "📊",
      color: "#4CAF50",
      // Google Sheets embed link (read-only preview)
      url: "https://docs.google.com/spreadsheets/d/1qsUo8mEiYq4umWT2PH09XWThj3gb3KuX2tMMnxtj8YA/preview",
      type: "excel",
      description:
        "Comprehensive spreadsheet to plan and track your life goals",
    },
    {
      title: "One Day Blueprint",
      icon: "📝",
      color: "#2196F3",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/One-Page-Living-Fulfilled-Life-Blueprint.pdf",
      type: "pdf",
      description: "Your complete life blueprint on a single page",
    },
    {
      title: "Vision Board",
      icon: "🎨",
      color: "#FF9800",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/Living-Fulfilled-Transformation-Visuals.pdf",
      type: "pdf",
      description: "Visual representation of your transformation journey",
    },
    {
      title: "Balconies and Basements",
      icon: "📝",
      color: "#c131ceff",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/Balconies-and-Basements.pdf",
      type: "pdf",
      description:
        "See your strengths clearly — elevate the balcony, manage the basement.",
    },
    {
      title: "5 Day Program Workbook",
      icon: "📖",
      color: "#9C27B0",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/Workbook-V0.pdf",
      type: "pdf",
      description: "Comprehensive 5-day workbook for guided transformation",
    },
    {
      title: "Explainer Video",
      icon: "🎬",
      color: "#E91E63",
      url: "https://video.gumlet.io/688f394969cc5f5f003525c3/6992eb4496b6566b13fdc75f/download.mp4",
      type: "video",
      description: "Introduction video explaining the programme structure",
    },
  ];

  const openModal = (outcome) => {
    setModalContent(outcome);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <motion.section
      className={`outcomes-section ${standalone ? "standalone-mode" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="outcomes-container">
        <div className="section-header">
          <h2 className="section-title">Your Outcomes</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Tangible results you'll achieve through this programme
          </p>
        </div>

        <div className="outcomes-grid">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              className="outcome-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(outcome)}
            >
              <motion.div
                className="outcome-icon"
                style={{ backgroundColor: outcome.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {outcome.icon}
              </motion.div>
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
              <span className="click-hint">Click to view</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal content */}
      <Modal isOpen={modalOpen} onClose={closeModal} title={modalContent.title}>
        {/* PDF Viewer */}
        {modalContent.type === "pdf" && (
          <div className="pdf-viewer">
            <iframe
              src={`${modalContent.url}#toolbar=1&navpanes=1&scrollbar=1`}
              className="modal-iframe"
              title={modalContent.title}
            />
          </div>
        )}

        {/* Embedded Google Sheet Viewer (for Excel type) */}
        {modalContent.type === "excel" && (
          <div className="excel-embed-container">
            <iframe
              src={modalContent.url}
              title="Life Plan Excel"
              className="excel-iframe"
              allowFullScreen
            ></iframe>
            <div className="excel-actions">
              <a
                href="https://docs.google.com/spreadsheets/d/1qsUo8mEiYq4umWT2PH09XWThj3gb3KuX2tMMnxtj8YA/export?format=xlsx"
                className="download-btn-small"
                target="_blank"
                rel="noopener noreferrer"
              >
                📥 Download Excel File
              </a>
            </div>
          </div>
        )}

        {/* Video Viewer */}
        {modalContent.type === "video" && (
          <div className="video-viewer">
            <video
              className="modal-video"
              controls
              controlsList="nodownload"
              autoPlay
              preload="metadata"
            >
              <source src={modalContent.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-info">
              <p className="video-description">{modalContent.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </motion.section>
  );
};

export default Outcomes;

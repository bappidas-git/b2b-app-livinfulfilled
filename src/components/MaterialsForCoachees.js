import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowBack,
  ArrowForward,
  Close,
  PlayArrow,
  Visibility,
  Download,
  MenuBook,
  OndemandVideo,
  BalconyOutlined,
  Description,
  TableChart,
  AutoGraph,
  PictureAsPdf,
  Article,
} from "@mui/icons-material";
import Logo from "../assets/Logo.png";
import V0Image from "../assets/V0.jpg";
import V1Image from "../assets/V1.jpg";
import V2Image from "../assets/V2.jpg";
import V3Image from "../assets/V3.jpg";
import V4Image from "../assets/V4.jpg";
import V5Image from "../assets/V5.jpg";
import "../styles/MaterialsForCoachees.css";

// Using Material-UI icons as fallbacks since icon files are not available

const MaterialsForCoachees = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("main"); // main, workbook, pdf-files, google-docs
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    type: "",
    url: "",
    title: "",
  });

  // Main materials cards - using MUI icons since image files are not available
  const mainMaterials = [
    {
      id: "five-day-program",
      title: "Program Booklets & Worksheets",
      IconComponent: MenuBook,
      action: "explore",
      onClick: () => setCurrentView("workbook"),
    },
    {
      id: "explainer-video",
      title: "Explainer Video",
      IconComponent: OndemandVideo,
      action: "play",
      onClick: () =>
        openVideoModal(
          "https://video.gumlet.io/688f394969cc5f5f003525c3/6992eb4496b6566b13fdc75f/download.mp4",
          "Explainer Video",
        ),
    },
    {
      id: "balcony-basement",
      title: "Balcony and Basement",
      IconComponent: BalconyOutlined,
      action: "view-download",
      pdfUrl:
        "https://livinfulfilled.com/wp-content/uploads/2026/01/Balconies-and-Basements.pdf",
    },
    {
      id: "one-page-blueprint",
      title: "1 Page Blueprint",
      IconComponent: Description,
      action: "view-download",
      pdfUrl:
        "https://livinfulfilled.com/wp-content/uploads/2026/01/One-Page-Living-Fulfilled-Life-Blueprint.pdf",
    },
    {
      id: "life-plan-excel",
      title: "Life Plan Actions & Decisions Blueprint",
      IconComponent: TableChart,
      action: "download-only",
      downloadUrl:
        "https://docs.google.com/spreadsheets/d/1qsUo8mEiYq4umWT2PH09XWThj3gb3KuX2tMMnxtj8YA/export?format=xlsx",
    },
    {
      id: "visualisations",
      title: "Visualisations PDF",
      IconComponent: AutoGraph,
      action: "view-download",
      pdfUrl:
        "https://livinfulfilled.com/wp-content/uploads/2026/01/Living-Fulfilled-Transformation-Visuals.pdf",
    },
  ];

  // Workbook format options - using MUI icons
  const workbookFormats = [
    {
      id: "pdf-files",
      title: "Program Booklets (PDF Files)",
      IconComponent: PictureAsPdf,
      onClick: () => setCurrentView("pdf-files"),
    },
    {
      id: "google-docs",
      title: "Editable Worksheets (Doc Files)",
      IconComponent: Article,
      onClick: () => setCurrentView("google-docs"),
    },
  ];

  // PDF Workbook files - using external URLs with cover images
  const pdfWorkbooks = [
    {
      id: "workbook-0",
      title: "Bookelet 0",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/Workbook-V0.pdf",
      image: V0Image,
    },
    {
      id: "workbook-1",
      title: "Bookelet 1",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/Workbook-V1-1.pdf",
      image: V1Image,
    },
    {
      id: "workbook-2",
      title: "Bookelet 2",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/Workbook-V2.pdf",
      image: V2Image,
    },
    {
      id: "workbook-3",
      title: "Bookelet 3",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/Workbook-V3.pdf",
      image: V3Image,
    },
    {
      id: "workbook-4",
      title: "Bookelet 4",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/Workbook-V4.pdf",
      image: V4Image,
    },
    {
      id: "workbook-5",
      title: "Bookelet 5",
      url: "https://livinfulfilled.com/wp-content/uploads/2026/01/Workbook-V5.pdf",
      image: V5Image,
    },
  ];

  // Word Document Workbooks for Google Docs section
  const wordDocWorkbooks = [
    {
      id: "booklet-1",
      title: "Booklet 1 Editable Worksheet",
      url: "https://res.cloudinary.com/ddfxshxwx/raw/upload/v1767611880/Booklet_1_Editable_Worksheet_rahcpx.docx",
    },
    {
      id: "booklet-2",
      title: "Booklet 2 Editable Worksheet",
      url: "https://res.cloudinary.com/ddfxshxwx/raw/upload/v1767611880/Booklet_2_Editable_Worksheet_zswzwa.docx",
    },
    {
      id: "booklet-3",
      title: "Booklet 3 Editable Worksheet",
      url: "https://res.cloudinary.com/ddfxshxwx/raw/upload/v1767611882/Booklet_3_Editable_Worksheet_x02s2q.docx",
    },
    {
      id: "booklet-4",
      title: "Booklet 4 Editable Worksheet",
      url: "https://res.cloudinary.com/ddfxshxwx/raw/upload/v1767611882/Booklet_4_Editable_Worksheet_tee4mb.docx",
    },
    {
      id: "booklet-5",
      title: "Booklet 5 Editable Worksheet",
      url: "https://res.cloudinary.com/ddfxshxwx/raw/upload/v1767611881/Booklet_5_Editable_Worksheet_biogtz.docx",
    },
  ];

  const openPdfModal = (url, title) => {
    setModalContent({ type: "pdf", url, title });
    setModalOpen(true);
  };

  const openVideoModal = (url, title) => {
    setModalContent({ type: "video", url, title });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ type: "", url: "", title: "" });
  };

  const handleDownload = async (url, filename) => {
    try {
      // Fetch the file to force download instead of opening in browser
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename || url.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      // Fallback to direct link if fetch fails
      const link = document.createElement("a");
      link.href = url;
      link.download = filename || url.split("/").pop();
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getBackNavigation = () => {
    switch (currentView) {
      case "workbook":
        return { label: "Materials", onClick: () => setCurrentView("main") };
      case "pdf-files":
      case "google-docs":
        return {
          label: "Workbook Formats",
          onClick: () => setCurrentView("workbook"),
        };
      default:
        return { label: "Dashboard", onClick: () => navigate("/dashboard") };
    }
  };

  const getPageTitle = () => {
    switch (currentView) {
      case "workbook":
        return "5 Day Program Workbook";
      case "pdf-files":
        return "PDF Workbooks";
      case "google-docs":
        return "Google Word Documents";
      default:
        return "Materials for End Users";
    }
  };

  const backNav = getBackNavigation();

  const renderMainCards = () => (
    <div className="materials-cards-grid">
      {mainMaterials.map((material, index) => (
        <motion.div
          key={material.id}
          className="material-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
        >
          <h3 className="material-title">{material.title}</h3>
          <div className="material-icon">
            <material.IconComponent className="material-mui-icon" />
          </div>
          <div className="material-actions">
            {material.action === "explore" && (
              <button
                className="action-button explore"
                onClick={material.onClick}
              >
                Explore Now
                <ArrowForward className="button-icon" />
              </button>
            )}
            {material.action === "play" && (
              <button className="action-button play" onClick={material.onClick}>
                <PlayArrow className="button-icon" />
                Play
              </button>
            )}
            {material.action === "view-download" && (
              <div className="dual-actions">
                <button
                  className="action-button view"
                  onClick={() => openPdfModal(material.pdfUrl, material.title)}
                >
                  <Visibility className="button-icon" />
                  View
                </button>
                <button
                  className="action-button download"
                  onClick={() =>
                    handleDownload(material.pdfUrl, material.title + ".pdf")
                  }
                >
                  <Download className="button-icon" />
                  Download
                </button>
              </div>
            )}
            {material.action === "download-only" && (
              <button
                className="action-button download full-width"
                onClick={() =>
                  handleDownload(
                    material.downloadUrl,
                    "Living-Fulfilled-Life-Plan-Spreadsheet.xlsx",
                  )
                }
              >
                <Download className="button-icon" />
                Download
              </button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderWorkbookFormats = () => (
    <div className="materials-cards-grid two-cols">
      {workbookFormats.map((format, index) => (
        <motion.div
          key={format.id}
          className="material-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
          onClick={format.onClick}
        >
          <h3 className="material-title">{format.title}</h3>
          <div className="material-icon">
            <format.IconComponent className="material-mui-icon" />
          </div>
          <button className="action-button explore">
            Explore Now
            <ArrowForward className="button-icon" />
          </button>
        </motion.div>
      ))}
    </div>
  );

  const renderPdfWorkbooks = () => (
    <div className="materials-cards-grid pdf-workbooks-grid">
      {pdfWorkbooks.map((workbook, index) => (
        <motion.div
          key={workbook.id}
          className="material-card pdf-workbook-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
        >
          <h3 className="material-title">{workbook.title}</h3>
          <div className="workbook-image-container">
            <img
              src={workbook.image}
              alt={workbook.title}
              className="workbook-cover-image"
            />
          </div>
          <div className="dual-actions">
            <button
              className="action-button view"
              onClick={() => openPdfModal(workbook.url, workbook.title)}
            >
              <Visibility className="button-icon" />
              View
            </button>
            <button
              className="action-button download"
              onClick={() =>
                handleDownload(workbook.url, workbook.title + ".pdf")
              }
            >
              <Download className="button-icon" />
              Download
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderGoogleDocs = () => (
    <div className="materials-cards-grid">
      {wordDocWorkbooks.map((workbook, index) => (
        <motion.div
          key={workbook.id}
          className="material-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
        >
          <h3 className="material-title">{workbook.title}</h3>
          <div className="material-icon">
            <Article className="material-mui-icon" />
          </div>
          <button
            className="action-button download full-width"
            onClick={() =>
              handleDownload(workbook.url, workbook.title + ".docx")
            }
          >
            <Download className="button-icon" />
            Download
          </button>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="materials-page">
      {/* Header */}
      <header className="materials-header">
        <div className="header-left-materials">
          <img
            src={Logo}
            alt="Living Fulfilled"
            className="header-logo-small"
          />
          <button className="back-button-materials" onClick={backNav.onClick}>
            <ArrowBack fontSize="small" />
            <span>{backNav.label}</span>
          </button>
        </div>
        <h1 className="materials-page-title">{getPageTitle()}</h1>
        <div className="header-spacer"></div>
      </header>

      {/* Main Content */}
      <main className="materials-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="materials-content"
          >
            {currentView === "main" && renderMainCards()}
            {currentView === "workbook" && renderWorkbookFormats()}
            {currentView === "pdf-files" && renderPdfWorkbooks()}
            {currentView === "google-docs" && renderGoogleDocs()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modal for PDF/Video */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="materials-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={`materials-modal-container ${
                modalContent.type === "video" ? "video-modal" : ""
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="materials-modal-header">
                <h2>{modalContent.title}</h2>
                <button className="modal-close-btn" onClick={closeModal}>
                  <Close />
                </button>
              </div>
              <div className="materials-modal-content">
                {modalContent.type === "pdf" && (
                  <iframe
                    src={`${modalContent.url}#toolbar=1&navpanes=1&scrollbar=1`}
                    className="pdf-iframe"
                    title={modalContent.title}
                  />
                )}
                {modalContent.type === "video" && (
                  <video
                    className="video-player"
                    controls
                    autoPlay
                    preload="metadata"
                  >
                    <source src={modalContent.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MaterialsForCoachees;

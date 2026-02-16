import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Logout, ArrowForward } from "@mui/icons-material";
import Swal from "sweetalert2";
import "../styles/PartnerDashboard.css";
import Logo from "../assets/Logo.png";

// B2B Card Icons - Cloudinary URLs
const MaterialsForCoacheesIcon =
  "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607850/Materials-for-Coachees_ep8t7z.png";
const BrandMessagingIcon =
  "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607850/Brand-and-Messaging-Playbook-Icon_rd5kip.png";
const MarketingAssetsIcon =
  "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607850/Marketing-Assets_afksza.png";
const MediaKitIcon =
  "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607851/Media-Kit_b2imso.png";

const PartnerDashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "apple-alert",
        confirmButton: "apple-button-confirm",
        cancelButton: "apple-button-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userEmail");

        Swal.fire({
          icon: "success",
          title: "Logged Out",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });

        onLogout();
      }
    });
  };

  const folderSections = [
    {
      id: "materials",
      title: "Materials for Coachees",
      icon: MaterialsForCoacheesIcon,
      route: "/materials",
    },
    {
      id: "brand",
      title: "Brand & Messaging Playbook",
      icon: BrandMessagingIcon,
      route: "/brand-messaging",
    },
    {
      id: "marketing",
      title: "Marketing Assets",
      icon: MarketingAssetsIcon,
      route: "/marketing-assets",
    },
    {
      id: "media",
      title: "Living Fulfilled Media Kit",
      icon: MediaKitIcon,
      route: "/media-kit",
    },
  ];

  // Get user email and organization from localStorage
  const userEmail =
    localStorage.getItem("userEmail") || "partner@livingfulfilled.com";
  const organization =
    localStorage.getItem("organization") || "Living Fulfilled";

  return (
    <div className="partner-dashboard">
      {/* Header */}
      <header className="partner-header">
        <div className="header-left">
          <img src={Logo} alt="Living Fulfilled" className="header-logo" />
        </div>

        <h1 className="header-title">Living Fulfilled - Fulfillment Hub</h1>
        <h5>Your One Stop Shop for all Living Fulfilled Assets</h5>

        <button className="logout-button-header" onClick={handleLogoutClick}>
          <Logout fontSize="small" />
          <span>Logout</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="partner-main">
        <div className="partner-content">
          {/* Folder Cards Grid */}
          <div className="folder-cards-grid">
            {folderSections.map((section, index) => (
              <motion.div
                key={section.id}
                className="folder-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                onClick={() => navigate(section.route)}
              >
                <h3 className="folder-title">{section.title}</h3>
                <div className="folder-icon">
                  <img
                    src={section.icon}
                    alt={section.title}
                    className="folder-icon-img"
                  />
                </div>
                <button className="explore-button">
                  Explore Now
                  <ArrowForward className="button-arrow" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="partner-footer">
        <div className="footer-left">
          <span className="footer-user-label">Logged in as:</span>
          <span className="footer-user-email">{userEmail}</span>
          <span className="footer-separator">•</span>
          <span className="footer-organization">{organization}</span>
        </div>
        <div className="footer-right">
          <span className="footer-copyright">© 2025 Living Fulfilled</span>
          <span className="footer-separator">•</span>
          <a href="#privacy" className="footer-link">
            Privacy Policy
          </a>
          <span className="footer-separator">•</span>
          <a href="#terms" className="footer-link">
            Terms of Use
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PartnerDashboard;

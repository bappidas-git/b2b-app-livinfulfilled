import React, { useState } from "react";
import { motion } from "framer-motion";
import GalleryModal from "./GalleryModal";
import "../styles/EvidenceGallery.css";

// Evidence Gallery images - Cloudinary URLs (placeholder images for now)
const WB1 = "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607852/Transformation-Visualization_uvcln0.png";
const WB2 = "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607850/Materials-for-Coachees_ep8t7z.png";
const WB3 = "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607850/Brand-and-Messaging-Playbook-Icon_rd5kip.png";
const WB4 = "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607850/Marketing-Assets_afksza.png";
const WB5 = "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607851/Media-Kit_b2imso.png";
const WB6 = "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607850/5-Day-Program_vzfvyd.png";
const WB7 = "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607850/Balconies-and-Basements_iitigd.png";
const WB8 = "https://res.cloudinary.com/ddfxshxwx/image/upload/v1767607850/1-Page-Blueprint_dmvp1l.png";

const EvidenceGallery = ({ standalone = false }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      thumb: WB1,
      full: WB1,
      title: "Transformation Visualization",
      description: "",
    },
    {
      thumb: WB2,
      full: WB2,
      title: "Materials for Coachees",
      description: "",
    },
    {
      thumb: WB3,
      full: WB3,
      title: "Brand & Messaging",
      description: "",
    },
    {
      thumb: WB4,
      full: WB4,
      title: "Marketing Assets",
      description: "",
    },
    {
      thumb: WB5,
      full: WB5,
      title: "Media Kit",
      description: "",
    },
    {
      thumb: WB6,
      full: WB6,
      title: "5-Day Program",
      description: "",
    },
    {
      thumb: WB7,
      full: WB7,
      title: "Balconies and Basements",
      description: "",
    },
    {
      thumb: WB8,
      full: WB8,
      title: "1-Page Blueprint",
      description: "",
    },
  ];

  const openGallery = (index) => {
    setCurrentIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  return (
    <motion.section
      className="evidence-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="evidence-container">
        <div className="section-header">
          <h2 className="section-title">
            Evidence Based Life Planning & Self-Development
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Research-backed methodologies and proven frameworks
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openGallery(index)}
            >
              <img src={img.thumb} alt={img.title} />
              <motion.div
                className="gallery-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span>🔍 View</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <GalleryModal
        isOpen={galleryOpen}
        onClose={closeGallery}
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </motion.section>
  );
};

export default EvidenceGallery;

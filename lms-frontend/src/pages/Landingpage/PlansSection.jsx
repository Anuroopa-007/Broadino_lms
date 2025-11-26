import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./PlansSection.css"; // 👈 Import CSS file

const PlansSection = () => {
const labs = [
  {
    icon: "💡",
    title: "Innovative Manufacturing",
    desc: "Broadino with Siemens powers precision manufacturing through reverse engineering and 3D metal printing.",
  },
  {
    icon: "🏭",
    title: "Smart Factory",
    desc: "Broadino Smart Factory uses Siemens Industry 4.0 tools to optimize and transform manufacturing.",
  },
  {
    icon: "🕶️",
    title: "AR | VR | XR",
    desc: "Broadino AR/VR/MR Lab develops immersive simulations enhancing training, learning, and real-world workflows.",
  },
  {
    icon: "📋",
    title: "Product Lifecycle Management",
    desc: "Broadino PLM Center uses Siemens Teamcenter to streamline product lifecycle, collaboration, and innovation.",
  },
  {
    icon: "📦",
    title: "Product Innovation",
    desc: "Broadino Product Innovation Center uses Siemens tools to accelerate efficient, creative product development.",
  },
  {
    icon: "✅",
    title: "Predictive Engineering",
    desc: "Broadino Predictive Engineering Center uses Siemens tools to simulate, analyze, and optimize products.",
  },
  {
    icon: "⚙️",
    title: "Asset Performance",
    desc: "Broadino Asset Performance uses advanced engineering & computing methods to determine predictive and preventive asset performance.",
  },
  {
    icon: "🔗",
    title: "Industrial IoT & Equipment",
    desc: "Broadino Industrial IIoT & Equipment performance center uses edge computing and industrial automation tools to enhance efficiency and productivity.",
  },
  {
    icon: "🤖",
    title: "Digital Technologies",
    desc: "Broadino Digital Technologies center uses Artificial Intelligence & Machine Learning techniques for vision computing and digitization.",
  },
];

  return (
        <section className="innovation-section" id="innovation-labs">
      <h2 className="innovation-title">
        <span>INNOVATION</span> LABS
      </h2>

      <div className="labs-grid">
        {labs.map((lab, index) => (
          <div key={index} className="lab-card">
            <div className="lab-icon">{lab.icon}</div>
            <h3 className="lab-title">{lab.title}</h3>
            <p className="lab-desc">{lab.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;

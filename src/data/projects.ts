import nfcImg from "@/assets/nfc_cover.png";
import nfc1 from "@/assets/nfc_1.png";
import nfc2 from "@/assets/nfc_2.png";
import nfc3 from "@/assets/nfc_3.png";
import nfc4 from "@/assets/nfc_4.png";

import compImg from "@/assets/competetion_cover.png";
import comp1 from "@/assets/competetion_1.png";
import comp2 from "@/assets/competetion_2.png";
import comp3 from "@/assets/competetion_3.png";
import comp4 from "@/assets/competetion_4.png";
import comp5 from "@/assets/competetion_5.png";

import pemf1 from "@/assets/PEMF.png";
import pemf2 from "@/assets/PEMF (2).png";

export interface Project {
  id: number;
  title: string;
  type: string;
  shortDesc: string;
  techIcons: { name: string; devicon: string }[];
  overview: string;
  built: string[];
  challenges: string[];
  takeaway: string;
  images: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart NFC Attendance System",
    type: "Web · Hardware",
    shortDesc: "Real-time NFC-based attendance with a live Firebase dashboard",
    techIcons: [
      { name: "React", devicon: "react" },
      { name: "Next.js", devicon: "nextjs" },
      { name: "Firebase", devicon: "firebase" },
      { name: "JavaScript", devicon: "javascript" },
    ],
    overview: "Built the frontend dashboard and handled the full Firebase integration for a smart NFC attendance system using ESP32 hardware.",
    built: [
      "Real-time dashboard showing live attendance data",
      "Full Firebase Realtime Database ↔ frontend integration",
      "Clean responsive interface",
    ],
    challenges: [
      "Zero React and Firebase knowledge at the start",
      "Researched both from scratch under real project pressure",
      "Used AI strategically — directed it with precise prompts based on what she understood, not blindly",
    ],
    takeaway: "Learned React, Next.js, and Firebase integration under real project pressure. Proved she can pick up any technology on the fly when there's a real problem to solve.",
    images: [nfcImg, nfc1, nfc2, nfc3, nfc4],
    liveUrl: "https://we-nfc.netlify.app",
  },
  {
    id: 2,
    title: "Project & Competition Management Platform",
    type: "Web · Platform",
    shortDesc: "Full platform for managing school projects and competitions at We School",
    techIcons: [
      { name: "React", devicon: "react" },
      { name: "Next.js", devicon: "nextjs" },
      { name: "Firebase", devicon: "firebase" },
      { name: "JavaScript", devicon: "javascript" },
    ],
    overview: "Contributed to a full competition and project management platform used by students and staff at We School of Applied Technology.",
    built: [
      "Complete frontend UI",
      "Firebase data integration",
      "Multi-feature interface for real daily use by students and staff",
    ],
    challenges: [
      "Complex feature set requiring careful state management",
      "Building for real users — no room for bugs",
      "Applied React skills in a bigger, more complex context",
    ],
    takeaway: "Reinforced React and Next.js skills in a collaborative, multi-feature platform with actual users.",
    images: [compImg, comp1, comp2, comp3, comp4, comp5],
    liveUrl: "https://competition11.netlify.app",
  },
  {
    id: 3,
    title: "PEMF Cell Growth Stimulator",
    type: "Hardware · Research",
    shortDesc: "Electromagnetic device that accelerates wound healing for diabetic patients",
    techIcons: [
      { name: "Arduino", devicon: "arduino" },
      { name: "C++", devicon: "cplusplus" },
    ],
    overview: "Designed and built a PEMF (Pulsed Electromagnetic Field) device that generates electromagnetic waves to stimulate cellular growth — scientifically validated through a research paper targeting wound healing in diabetic patients.",
    built: [
      "Physical device generating EM waves at precise frequencies",
      "Arduino firmware in C++ controlling output",
      "AI-assisted programming with full technical decision-making",
      "Backing research paper proving scientific validity",
    ],
    challenges: [
      "Bridging hardware electronics with software programming",
      "Translating academic PEMF research into a working physical device",
      "Scientifically validating the output through research, not just building",
    ],
    takeaway: "Proved she can work across the full stack — from physical circuits to research-backed scientific claims. Demonstrated that being a vibe engineer means directing AI with precision, not replacing your own thinking.",
    images: [pemf1, pemf2],
  },
];

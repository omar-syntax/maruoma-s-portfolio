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
    images: [
      "https://placehold.co/800x500/0d1520/a855f7?text=NFC+Dashboard",
      "https://placehold.co/800x500/0d1520/a855f7?text=Attendance+View",
      "https://placehold.co/800x500/0d1520/a855f7?text=Real-time+Data",
    ],
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
    images: [
      "https://placehold.co/800x500/0d1520/a855f7?text=Platform+Home",
      "https://placehold.co/800x500/0d1520/a855f7?text=Competition+View",
      "https://placehold.co/800x500/0d1520/a855f7?text=Management+Panel",
    ],
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
    images: [
      "https://placehold.co/800x500/0d1520/a855f7?text=PEMF+Device",
      "https://placehold.co/800x500/0d1520/a855f7?text=Circuit+Design",
      "https://placehold.co/800x500/0d1520/a855f7?text=Research+Paper",
    ],
  },
];

export const email = "seblemamush93@gmail.com";
export const github = "https://github.com/seblemamush93-gif";
export const telegram = "https://t.me/seblim12";
export const youtube = "https://youtube.com/@kingmass-q2s";
export const whatsapp = "https://wa.me/251963488480";
export const portraitImages = {
  hero: "/images/hero-portrait.png",
  about: "/images/about-portrait.png",
  cv: "/images/cv-portrait.png",
  monochrome: "/images/monochrome-portrait.png",
};
export const skills = [
  ["Languages", "Python", "Java", "JavaScript", "PHP", "Dart", "HTML5 / CSS3"],
  ["Frameworks & mobile", "React", "Vite", "Node.js", "Flutter", "Java Swing"],
  [
    "AI & machine learning",
    "OpenCV",
    "MediaPipe",
    "TensorFlow / PyTorch",
    "Pandas",
    "Scikit-Learn",
  ],
  [
    "Databases & backend",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "JDBC",
    "Socket Programming",
    "RESTful APIs",
  ],
  ["Developer tools", "Git & GitHub", "VS Code", "Android Studio", "NetBeans", "Streamlit"],
];
export const projects = [
  {
    id: "accessvision",
    name: "AccessVision AI",
    category: "AI & ML",
    subtitle: "Making the world more accessible.",
    description:
      "A planned AI-powered assistive application designed to analyze scenes, recognize objects, and convert visual data into descriptive, real-time voice updates for visually impaired individuals.",
    stack: ["Python", "OpenCV", "TensorFlow", "Text-to-speech"],
    features: ["Real-time video scene analysis", "Object recognition", "Descriptive voice updates"],
    repo: "",
    planned: true,
    featured: true,
  },
  {
    id: "signbridge",
    name: "SignBridge AI",
    category: "AI & ML",
    subtitle: "Understanding beyond words.",
    description:
      "A planned machine-learning translation model intended to bridge the communication gap by converting sign language gestures into text and spoken speech in real time.",
    stack: ["Python", "MediaPipe", "OpenCV", "Deep Learning"],
    features: ["Hand landmark tracking", "Gesture recognition", "Real-time text and speech output"],
    repo: "",
    planned: true,
    featured: true,
  },
  {
    id: "food",
    name: "Food Delivery Application",
    category: "Web & Mobile",
    subtitle: "Good food. One tap away.",
    description:
      "A full-stack application for seamless food ordering, real-time menu browsing, cart management, and order status tracking.",
    stack: ["React", "Vite", "Node.js", "PostgreSQL"],
    features: [
      "Menu browsing",
      "Cart management",
      "User authentication",
      "Bank, card and wallet payments",
      "Order status tracking",
      "Rider chat",
    ],
    repo: "https://github.com/seblemamush93-gif/food-delivery",
    featured: true,
  },
  {
    id: "chat",
    name: "Chat Application",
    category: "Networking",
    subtitle: "Talk in real time.",
    description:
      "A real-time desktop chat application built with Java Swing and socket programming, using a MySQL database through XAMPP.",
    stack: ["Java", "Java Swing", "Socket Programming", "MySQL (XAMPP)"],
    features: [
      "Real-time messaging",
      "Socket client-server connection",
      "Java Swing interface",
      "MySQL database (XAMPP)",
    ],
    repo: "https://github.com/seblemamush93-gif/chatapplication",
    featured: false,
  },
  {
    id: "registration",
    name: "Student Registration System",
    category: "Desktop & Web",
    subtitle: "Enrollment made simple.",
    description:
      "A student registration system built with HTML, CSS, and Java and running on XAMPP, for registering students and keeping their information organized.",
    stack: ["HTML", "CSS", "Java", "XAMPP"],
    features: ["Student registration", "Student records", "Organized information"],
    repo: "https://github.com/seblemamush93-gif/student-registration-system",
    featured: false,
  },
  {
    id: "house",
    name: "House Price Prediction",
    category: "AI & ML",
    subtitle: "Turning data into better decisions.",
    description:
      "A machine-learning project analyzing real estate data and predicting housing prices based on property features using regression models.",
    stack: ["Python", "Pandas", "Scikit-Learn"],
    features: ["Real estate feature analysis", "Regression models", "Housing value prediction"],
    repo: "https://github.com/seblemamush93-gif/house-price-prediction",
    featured: false,
  },
  {
    id: "grades",
    name: "Student Grade Management System",
    category: "Web & Mobile",
    subtitle: "Less paperwork. More possibility.",
    description:
      "A desktop and web application for student records, automated grade calculations, and academic report generation.",
    stack: ["Java", "PHP", "MySQL", "Swing"],
    features: ["Student records", "Automated grade calculations", "Academic reports"],
    repo: "https://github.com/seblemamush93-gif/student-grade-management",
    featured: false,
  },
  {
    id: "calculator",
    name: "Java Smart Calculator",
    category: "Desktop",
    subtitle: "Small details. Smarter calculations.",
    description:
      "A custom desktop calculator featuring arithmetic evaluations and smart single-digit backspace undo functionality.",
    stack: ["Java", "Swing GUI"],
    features: ["Arithmetic operations", "Single-digit backspace undo", "Desktop interface"],
    repo: "https://github.com/seblemamush93-gif/java-calculator",
    featured: false,
  },
];
export type Project = (typeof projects)[number];
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} \u2014 Seble Mamush` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} \u2014 Seble Mamush` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

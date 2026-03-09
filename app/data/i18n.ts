export type Locale = "en" | "th";

export const uiText = {
  en: {
    navbar: {
      navItems: [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" },
      ],
      languageButton: "TH",
      mobileLanguageButton: "เปลี่ยนเป็นภาษาไทย",
      toggleMenuLabel: "Toggle menu",
    },
    hero: {
      availability: "Available for opportunities",
      title: "Full Stack Developer",
      tagline: "Building modern web experiences with passion and precision",
      location: "Bangkok, Thailand",
      getInTouch: "Get in Touch",
      scrollToAbout: "Scroll to about",
    },
    about: {
      badge: "About Me",
      heading: "A passionate developer who loves building things",
      paragraph:
        "I am a full stack developer with web application experience, from database design to RESTful APIs and backend development. I build frontend with Vue/Nuxt and React/Next, then deploy to production with Docker, Nginx, PM2, and VPS. I understand JWT/OAuth authentication, system architecture, and AI/LLM integrations.",
      stats: ["Years Experience", "Projects Delivered", "Cups of Coffee"],
      languages: "Languages",
      interests: "Interests",
    },
    experience: {
      badge: "Experience",
      heading: "Where I've worked",
    },
    skills: {
      badge: "Skills",
      heading: "Technologies I work with",
      description:
        "Here are the tools and technologies I use daily to build modern, scalable applications.",
      skillsSuffix: "skills",
      bottomNote: "...and always learning something new",
      labels: {
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Database",
        "DevOps & Tools": "DevOps & Tools",
      },
    },
    projects: {
      badge: "Projects",
      heading: "Projects that are still in use.",
      otherProjects: "Other completed projects",
      code: "Code",
      liveDemo: "Live Demo",
      videoDemo: "Video Demo",
    },
    education: {
      badge: "Education",
      heading: "Learning never stops",
      cardTitle: "Bachelor of Science in Computer Science",
      school: "Naresuan University",
      location: "Phitsanulok, Thailand",
      sectionTitle: "Education",
    },
    contact: {
      badge: "Contact",
      heading: "Let's work together",
      description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      email: "Email",
      phone: "Phone",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
      using: "using Next.js & Tailwind CSS",
    },
  },
  th: {
    navbar: {
      navItems: [
        { label: "เกี่ยวกับ", href: "#about" },
        { label: "ประสบการณ์", href: "#experience" },
        { label: "ทักษะ", href: "#skills" },
        { label: "ผลงาน", href: "#projects" },
        { label: "การศึกษา", href: "#education" },
        { label: "ติดต่อ", href: "#contact" },
      ],
      languageButton: "EN",
      mobileLanguageButton: "Switch to English",
      toggleMenuLabel: "เปิด/ปิดเมนู",
    },
    hero: {
      availability: "พร้อมรับโอกาสงานใหม่",
      title: "นักพัฒนา Full Stack",
      tagline: "สร้างประสบการณ์เว็บสมัยใหม่ด้วยความตั้งใจและความพิถีพิถัน",
      location: "กรุงเทพฯ ประเทศไทย",
      getInTouch: "ติดต่อผม",
      scrollToAbout: "เลื่อนไปส่วนเกี่ยวกับ",
    },
    about: {
      badge: "เกี่ยวกับผม",
      heading: "นักพัฒนาที่หลงใหลในการสร้างสิ่งใหม่ ๆ",
      paragraph:
        "ผมเป็นนักพัฒนา Full Stack ที่มีประสบการณ์พัฒนาเว็บแอป ตั้งแต่การออกแบบฐานข้อมูล การทำ RESTful API และฝั่ง Backend ผมพัฒนา Frontend ด้วย Vue/Nuxt และ React/Next และ deploy ระบบขึ้น Production ด้วย Docker, Nginx, PM2 และ VPS รวมถึงมีความเข้าใจเรื่อง JWT/OAuth, การออกแบบสถาปัตยกรรมระบบ และการเชื่อมต่อ AI/LLM",
      stats: ["ปีประสบการณ์", "โปรเจกต์ที่ส่งมอบ", "แก้วกาแฟ"],
      languages: "ภาษา",
      interests: "ความสนใจ",
    },
    experience: {
      badge: "ประสบการณ์",
      heading: "ที่ที่ผมเคยทำงาน",
    },
    skills: {
      badge: "ทักษะ",
      heading: "เทคโนโลยีที่ผมใช้งาน",
      description:
        "นี่คือเครื่องมือและเทคโนโลยีที่ผมใช้เป็นประจำในการสร้างแอปพลิเคชันสมัยใหม่ที่ขยายต่อได้",
      skillsSuffix: "ทักษะ",
      bottomNote: "และยังเรียนรู้อะไรใหม่ ๆ อยู่เสมอ",
      labels: {
        Frontend: "ฟรอนต์เอนด์",
        Backend: "แบ็กเอนด์",
        Database: "ฐานข้อมูล",
        "DevOps & Tools": "เดฟออปส์และเครื่องมือ",
      },
    },
    projects: {
      badge: "ผลงาน",
      heading: "โครงการที่ยังคงใช้งานอยู่",
      otherProjects: "โปรเจกต์อื่น ๆ ที่ทำเสร็จแล้ว",
      code: "โค้ด",
      liveDemo: "ลิงก์ใช้งาน",
      videoDemo: "วิดีโอเดโม",
    },
    education: {
      badge: "การศึกษา",
      heading: "การเรียนรู้ไม่มีวันสิ้นสุด",
      cardTitle: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
      school: "มหาวิทยาลัยนเรศวร",
      location: "พิษณุโลก ประเทศไทย",
      sectionTitle: "การศึกษา",
    },
    contact: {
      badge: "ติดต่อ",
      heading: "มาร่วมงานกัน",
      description:
        "ผมยินดีเสมอสำหรับการพูดคุยเกี่ยวกับโปรเจกต์ใหม่ ไอเดียสร้างสรรค์ หรือโอกาสที่จะได้ร่วมเป็นส่วนหนึ่งของวิสัยทัศน์ของคุณ",
      email: "อีเมล",
      phone: "โทรศัพท์",
    },
    footer: {
      rights: "สงวนลิขสิทธิ์",
      builtWith: "พัฒนาด้วย",
      using: "โดยใช้ Next.js และ Tailwind CSS",
    },
  },
} as const;

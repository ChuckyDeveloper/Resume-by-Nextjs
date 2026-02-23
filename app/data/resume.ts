// =============================================================================
// 📝 RESUME DATA — แก้ไขข้อมูลตรงนี้เพื่ออัปเดต Resume ทั้งหมด
// =============================================================================

export const personalInfo = {
  name: "Athit O.",
  title: "Full Stack Developer",
  tagline: "Building modern web experiences with passion and precision",
  email: "athit@example.com",
  phone: "+66 XX-XXX-XXXX",
  location: "Bangkok, Thailand",
  website: "https://athit.dev",
  linkedin: "https://linkedin.com/in/athit",
  github: "https://github.com/athit",
  avatar: "/avatar.jpg", // ใส่รูปใน public/avatar.jpg
  summary:
    "Full Stack Developer with a passion for crafting exceptional digital experiences. Specialized in React, Next.js, Node.js, and cloud technologies. I thrive on turning complex problems into elegant, user-friendly solutions. Currently focused on building scalable web applications with modern architectures.",
};

export const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Creaive",
    location: "Bangkok, Thailand",
    period: "2023 — Present",
    website: "https://creaive.ai",
    description:
      "I am responsible for system development and analysis. Starting requirement gathering, design system, Frontend and Backend development to implementation and quality control the system is ready for production.",
    highlights: [
      "Design and develop full-stack web application by Next.js, Nuxtjs/Vue, Node.js (Express), MongoDB",
      "Design and development RESTful APIs and Authentication (JWT/OAuth)",
      "Database structure design (MongoDB + Mongoose Schema Design)",
      "Connect and develop AI such as  OpenAI API (LLM Streaming, Tool Calling Architecture, STT), Elevenlabs (TTS, voice clone), Replicate (AI model hosting) and other third-party APIs",
      "Create AI chatbot, AI Microsite and Virtual Try-On (Lipstick AR)",
      "Development real-time application by WebSocket",
      "Deploy the system production by Github, Docker, Nginx, PM2, Cloudfire, Vutlr, AWS EC2 on VPS (Ubuntu)",
      "Server system management, Performance Optimization and Debug Production",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Nuxt 3",
      "Vue 3",
      "JavaScript",
      "TypeScript",
      "Node.js (Express)",
      "MongoDB",
      "AWS",
      "Vultr",
      "Cloudflare",
      "Firebase",
      "Nginx",
      "PM2",
      "Docker",
      "OpenAI APIs",
      "Replicate APIs",
      "Elevenlabs APIs",
    ],
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      role: "นักพัฒนา Full Stack ระดับกลาง",
      location: "กรุงเทพฯ ประเทศไทย",
      description:
        "รับผิดชอบการพัฒนาและวิเคราะห์ระบบ ตั้งแต่การเก็บ Requirement, ออกแบบระบบ, พัฒนา Frontend และ Backend ไปจนถึงการนำระบบขึ้น Production และควบคุมคุณภาพให้พร้อมใช้งาน",
      highlights: [
        "ออกแบบและพัฒนาเว็บแอปพลิเคชัน Full-stack ด้วย Next.js, Nuxt.js/Vue, Node.js (Express), MongoDB",
        "ออกแบบและพัฒนา RESTful APIs และระบบยืนยันตัวตน (JWT/OAuth)",
        "ออกแบบโครงสร้างฐานข้อมูล (MongoDB + Mongoose Schema Design)",
        "เชื่อมต่อและพัฒนา AI เช่น OpenAI API (LLM Streaming, Tool Calling, STT), Elevenlabs (TTS, Voice Clone), Replicate (AI Model Hosting) และ Third-party APIs อื่น ๆ",
        "สร้าง AI Chatbot, AI Microsite และ Virtual Try-On (Lipstick AR)",
        "พัฒนาแอปพลิเคชันแบบ Real-time ด้วย WebSocket",
        "Deploy ระบบขึ้น Production ด้วย GitHub, Docker, Nginx, PM2, Cloudflare, Vultr, AWS EC2 บน VPS (Ubuntu)",
        "ดูแลระบบเซิร์ฟเวอร์ ปรับแต่งประสิทธิภาพ และแก้ไขปัญหา Production",
      ],
    },
  },
  {
    id: 2,
    role: "Junior Full Stack Developer",
    company: "HashBX",
    location: "Bangkok, Thailand",
    period: "2019 — 2023",
    website: "https://hashbx.com",
    description:
      "I am responsible for system development and analysis. Starting requirement gathering, design system, Frontend and Backend development to implementation and quality control the system is ready for production.",
    highlights: [
      "Design uxui and frontend for application development by React native for application can use android and ios.  ",
      "Upload application to app store and play store.",
      "Design and develop full-stack web application by Vue 3, Node.js (Express), MongoDB",
      "Design and development RESTful APIs, Authentication (JWT/OAuth) and system structure design",
      "Database structure design (MongoDB + Mongoose Schema Design)",
      "Connect and develop Web3 for signin wallet to deposit, withdrawal cryptocurrency by Binance smart chain (BEP20)",
      "Development bottrade rebalancing crypto by Node.js (Express)",
      "Development real-time application by WebSocket",
      "Deploy the system production by Github, Nginx, PM2, Cloudfire, Vutlr, on VPS (Ubuntu)",
      "Server system management, Performance Optimization and Debug Production",
    ],
    technologies: [
      "React Native",
      "Vue 3",
      "Web3.js",
      "BEP20",
      "JavaScript",
      "Node.js (Express)",
      "MongoDB",
      "Tailwind CSS",
      "Vultr",
      "Cloudflare",
      "Firebase",
      "Nginx",
      "PM2",
    ],
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      role: "นักพัฒนา Full Stack จูเนียร์",
      location: "กรุงเทพฯ ประเทศไทย",
      description:
        "รับผิดชอบการพัฒนาและวิเคราะห์ระบบ ตั้งแต่การเก็บ Requirement, ออกแบบระบบ, พัฒนา Frontend และ Backend ไปจนถึงการนำระบบขึ้น Production และควบคุมคุณภาพให้พร้อมใช้งาน",
      highlights: [
        "ออกแบบ UX/UI และ Frontend สำหรับพัฒนาแอปพลิเคชันด้วย React Native รองรับทั้ง Android และ iOS",
        "อัปโหลดแอปพลิเคชันขึ้น App Store และ Play Store",
        "ออกแบบและพัฒนาเว็บแอปพลิเคชัน Full-stack ด้วย Vue 3, Node.js (Express), MongoDB",
        "ออกแบบและพัฒนา RESTful APIs, ระบบยืนยันตัวตน (JWT/OAuth) และออกแบบโครงสร้างระบบ",
        "ออกแบบโครงสร้างฐานข้อมูล (MongoDB + Mongoose Schema Design)",
        "เชื่อมต่อและพัฒนา Web3 สำหรับเข้าสู่ระบบด้วย Wallet เพื่อฝาก-ถอนคริปโตผ่าน Binance Smart Chain (BEP20)",
        "พัฒนาระบบ Bot Trade Rebalancing คริปโตด้วย Node.js (Express)",
        "พัฒนาแอปพลิเคชันแบบ Real-time ด้วย WebSocket",
        "Deploy ระบบขึ้น Production ด้วย GitHub, Nginx, PM2, Cloudflare, Vultr บน VPS (Ubuntu)",
        "ดูแลระบบเซิร์ฟเวอร์ ปรับแต่งประสิทธิภาพ และแก้ไขปัญหา Production",
      ],
    },
  },
];

export const skills = {
  frontend: {
    label: "Frontend",
    items: [
      { name: "React.js / Next.js", level: 70 },
      { name: "Nuxt 3 / Vue 3", level: 80 },
      { name: "TypeScript / JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 75 },
    ],
  },
  backend: {
    label: "Backend",
    items: [
      { name: "Node.js / Express", level: 86 },
      { name: "REST API Design", level: 84 },
    ],
  },
  database: {
    label: "Database",
    items: [{ name: "MongoDB" }],
  },
  devops: {
    label: "DevOps & Tools",
    items: [
      { name: "Docker / PM2" },
      { name: "AWS / Vultr" },
      { name: "Nginx" },
      { name: "GitHub" },
      { name: "Cloudflare" },
      { name: "Firebase Hosting" },
    ],
  },
};

export const projects = [
  {
    id: 8,
    title: "AR Try-On Lipstick",
    description:
      "Website for trying on different lipstick shades using augmented reality technology.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Firebase Hosting",
      "Node.js (Express)",
      "MongoDB",
      "Cloudflare",
      "Vultr",
      "Nginx",
      "Docker",
    ],
    liveUrl: "https://tryon.bronxcolorsthailand.com/",
    githubUrl: "https://github.com/ChuckyDeveloper/Lipstick-AR-Nextjs",
    image: "/project/tryon.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "เว็บไซต์สำหรับลองทาลิปสติกสีต่าง ๆ ด้วยเทคโนโลยี Augmented Reality",
    },
  },
  {
    id: 1,
    title: "Nongnippon AI Chatbot",
    description:
      "An AI-powered chatbot that integrates with the OpenAI API, Elevenlabs API, Nippon Paint API to provide product information, color tone recommendations, calculate paint quantities and find stores.",
    technologies: [
      "Nuxt 3",
      "OpenAI API",
      "Elevenlabs API",
      "Nippon Paint API",
      "Tailwind CSS",
      "MonggoDB",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://nongnippon.nipponpaintdecor.com/nongnippon/th",
    githubUrl: null,
    image: "/project/chatbot-nippon.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "แชทบอท AI ที่เชื่อมต่อกับ OpenAI API, Elevenlabs API, Nippon Paint API เพื่อให้ข้อมูลผลิตภัณฑ์ แนะนำโทนสี คำนวณปริมาณสี และค้นหาร้านค้า",
    },
  },
  {
    id: 4,
    title: "Topter AI Chatbot ( For play mini Holovue only )",
    description:
      "An AI-powered chatbot that integrates with the OpenAI API to answer general questions, provide product information, recommend products, and indicate the location of product zones.",
    technologies: [
      "Nuxt 3",
      "OpenAI API",
      "StabilityAI API",
      "Tailwind CSS",
      "MonggoDB",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://tops-creaive.web.app/",
    githubUrl: null,
    image: "/project/tops.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "แชทบอท AI ที่เชื่อมต่อกับ OpenAI API เพื่อตอบคำถามทั่วไป ให้ข้อมูลสินค้า แนะนำสินค้า และบอกตำแหน่งโซนสินค้า",
    },
  },
  {
    id: 5,
    title: "MiAi - Your Business AI Guru",
    description:
      "Unlock expert advice on sharing your knowledge and ideas about the 'TSI WAY หรือวิถีชุมชนพัฒน์.' To enhance management efficiency, reduce costs, achieve profits and sustainable growth.",
    technologies: [
      "Nuxt 3",
      "OpenAI API",
      "Tailwind CSS",
      "MonggoDB",
      "Node.js (Express)",
      "Cloudflare",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://tsi-chat.com/",
    githubUrl: null,
    image: "/project/tsi.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "ปลดล็อกคำแนะนำจากผู้เชี่ยวชาญในการแบ่งปันความรู้เกี่ยวกับ 'TSI WAY หรือวิถีชุมชนพัฒน์' เพื่อเพิ่มประสิทธิภาพการจัดการ ลดต้นทุน สร้างกำไรและการเติบโตอย่างยั่งยืน",
    },
  },
  {
    id: 2,
    title: "Design You Home Colours",
    description:
      "Experiment with different color schemes in your home by uploading photos of your own room or using samples, then select colors and paint them onto the image.",
    technologies: [
      "Nuxt 3",
      "OpenAI API",
      "Tailwind CSS",
      "MonggoDB",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://designcolours.nipponpaintdecor.com/designcolours/th",
    githubUrl: null,
    image: "/project/designcolours.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "ทดลองใช้ชุดสีต่าง ๆ ในบ้านโดยอัปโหลดภาพห้องจริงหรือใช้ตัวอย่าง จากนั้นเลือกสีและทาลงบนภาพ",
    },
  },
  {
    id: 3,
    title: "AI Colour Design",
    description:
      "AI is used to design house color palettes (I2I), and AI is used to find wall colors that are similar to those of Nippon paint.",
    technologies: [
      "Nuxt 3",
      "OpenAI API",
      "StabilityAI API",
      "Nippon Paint API",
      "Tailwind CSS",
      "MonggoDB",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://designcolours.nipponpaintdecor.com/aidesigncolour/th",
    githubUrl: null,
    image: "/project/ai-colourdesign.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "ใช้ AI ออกแบบชุดสีบ้าน (I2I) และใช้ AI ค้นหาสีผนังที่ใกล้เคียงกับสีของนิปปอนเพ้นท์",
    },
  },
  {
    id: 6,
    title: "IPPS",
    description:
      "Website landing page for see data and contact IP Payment Solutions",
    technologies: ["React.js", "Tailwind CSS", "Firebase Hosting"],
    liveUrl: "https://ipps.co.th/",
    githubUrl: null,
    image: "/project/ipps.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "เว็บไซต์ Landing Page สำหรับดูข้อมูลและติดต่อ IP Payment Solutions",
    },
  },
  {
    id: 7,
    title: "hashbx",
    description:
      "Website for mining BTC, staking coin, transfer, deposit and withdrawal cryptocurrency",
    technologies: [
      "Vue3",
      "Tailwind CSS",
      "Firebase Hosting",
      "Web3.js",
      "BEP20",
      "Node.js (Express)",
      "MongoDB",
      "Cloudflare",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://hashbx.com/",
    githubUrl: null,
    image: "/project/hashbx.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "เว็บไซต์สำหรับขุด BTC, สเตกคอยน์, โอน, ฝากและถอนคริปโตเคอร์เรนซี",
    },
  },

  {
    id: 9,
    title: "Bronx",
    description: "Website ecommerce for selling cosmetics products",
    technologies: ["React.js", "Cloudflare", "Shopify"],
    liveUrl: "https://bronxcolorsthailand.com/",
    githubUrl: null,
    image: "/project/bronx.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description: "เว็บไซต์อีคอมเมิร์ซสำหรับขายผลิตภัณฑ์เครื่องสำอาง",
    },
  },
  {
    id: 10,
    title: "Autorebalance Bottrade Crypto",
    description:
      "Website for automated cryptocurrency trading and portfolio management (Bottrade Rebalancing Crypto)",
    technologies: [
      "Vue 3",
      "Firebase Hosting",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://autorebalance.co/",
    githubUrl: null,
    image: "/project/autorebalance.png",
    featured: false,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "เว็บไซต์สำหรับเทรดคริปโตอัตโนมัติและจัดการพอร์ตการลงทุน (Bottrade Rebalancing Crypto)",
    },
  },
  {
    id: 11,
    title: "Promptdue",
    description:
      "Website for buy and sell prompt for AI development. To help people who want to use AI but don't know how to write prompt, they can buy prompt that already write by expert and use it for their AI development. By use cryptocuurrency for payment and use wallet for signin.",
    technologies: [
      "Vue 3",
      "Firebase Hosting",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/project/promptdue.png",
    featured: false,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "เว็บไซต์สำหรับซื้อขาย Prompt สำหรับพัฒนา AI เพื่อช่วยผู้ที่ต้องการใช้ AI แต่ไม่รู้วิธีเขียน Prompt โดยใช้คริปโตในการชำระเงินและใช้ Wallet เข้าสู่ระบบ",
    },
  },
  {
    id: 12,
    title: "Minecoin",
    description:
      "Website for buy and sell top 20 stock in nasdaq by use cryptocurrency for payment and use wallet for signin.",
    technologies: ["Vue 3", "Node.js (Express)"],
    liveUrl: null,
    githubUrl: null,
    image: "/project/minecoin.png",
    featured: false,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "เว็บไซต์สำหรับซื้อขายหุ้น 20 อันดับแรกในตลาด Nasdaq โดยใช้สกุลเงินดิจิทัลในการชำระเงินและใช้กระเป๋าเงินดิจิทัลในการเข้าสู่ระบบ",
    },
  },
  {
    id: 13,
    title: "Creave Holovue Control",
    description:
      "The web CMS used to control content playback through Holobox kiosks includes a content playback system, play loop, chatbot, and face swap, allowing users to instruct the Holobox to play content according to their preferences.",
    technologies: [
      "Nuxt 3",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/project/creaive.png",
    featured: false,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "ระบบ CMS สำหรับควบคุมการเล่นคอนเทนต์ผ่านตู้ Holobox รวมถึงระบบเล่นคอนเทนต์, Play Loop, Chatbot และ Face Swap ให้ผู้ใช้สั่ง Holobox เล่นคอนเทนต์ตามต้องการ",
    },
  },
  {
    id: 14,
    title: "Veloce Chatbot (for Holovue)",
    description:
      "Create a virtual chatbot to answer company questions, interact using voice, and create games like a faceswap and acting game.",
    technologies: [
      "Nuxt 3",
      "OpenAI API",
      "Replicate API",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://velocecreaive.web.app/",
    githubUrl: null,
    image: "/project/veloce.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "สร้างแชทบอทเสมือนจริงเพื่อตอบคำถามเกี่ยวกับบริษัท โต้ตอบด้วยเสียง และสร้างเกม เช่น Face Swap และเกมแอ็กติ้ง",
    },
  },
  {
    id: 15,
    title: "Axis Chatbot (for Holovue)",
    description:
      "An AI-powered chatbot that integrates with the OpenAI API, Elevenlabs API to provide product information, and FAQ.",
    technologies: [
      "Nuxt 3",
      "OpenAI API",
      "Elevenlabs API",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/project/axis.png",
    featured: false,
    video_demo:
      "https://drive.google.com/file/d/1qxdbmv-u0eB2CBtbSkt8_LfXV9ApGPGQ/view?usp=sharing",
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "แชทบอท AI ที่เชื่อมต่อกับ OpenAI API, Elevenlabs API เพื่อให้ข้อมูลผลิตภัณฑ์และตอบคำถามที่พบบ่อย",
    },
  },
  {
    id: 22,
    title: "WaiWai (for Holovue)",
    description:
      "Create 4 game for paly in the event by use face swap and acting game.",
    technologies: [
      "Nuxt 3",
      "Replicate API",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Node.js (Express)",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://waiwaicreaive.web.app/",
    githubUrl: null,
    image: "/project/waiwai.png",
    featured: true,
    video_demo: null,
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "สร้าง 4 เกมสำหรับเล่นในงานอีเวนต์โดยใช้ Face Swap และเกมแอ็กติ้ง",
    },
  },
  {
    id: 16,
    title: "Central Lingerie (for Holovue)",
    description:
      "Create website for collect data and contact for Central Lingerie",
    technologies: [
      "Next.js",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/project/Lingerie.png",
    featured: false,
    video_demo:
      "https://drive.google.com/file/d/1qbdI8P2r_0XZtGLj3v6xTobdGRpDKN5O/view?usp=sharing",
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "สร้างเว็บไซต์สำหรับเก็บข้อมูลและติดต่อสำหรับ Central Lingerie",
    },
  },
  {
    id: 17,
    title: "Central Watch Fair (for Holovue)",
    description: "This website provides information and details about watches.",
    technologies: [
      "Next.js",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/project/watchfair.png",
    featured: false,
    video_demo:
      "https://drive.google.com/file/d/1q7zIt7qKJu7fC5FFd5gwAB7rVeLB16IB/view?usp=sharing",
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description: "เว็บไซต์ให้ข้อมูลและรายละเอียดเกี่ยวกับนาฬิกา",
    },
  },
  {
    id: 18,
    title: "Milo",
    description: "Game website for play facswap in the event.",
    technologies: [
      "Nuxt 3",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/project/milo.png",
    featured: false,
    video_demo:
      "https://drive.google.com/file/d/18m6zYIGJYENo1fjxMBz0f4e1ehoQTZwe/view?usp=sharing",
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description: "เว็บไซต์เกม Face Swap สำหรับเล่นในงานอีเวนต์",
    },
  },
  {
    id: 19,
    title: "Scasset",
    description:
      "Create website for collect data and use AI generate image for home design.",
    technologies: [
      "Nuxt 3",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/project/scasset.png",
    featured: false,
    video_demo:
      "https://drive.google.com/file/d/1Q0h74MONxLpwsKTXbUC5zz7YafhNopKh/view?usp=sharing",
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description: "สร้างเว็บไซต์สำหรับเก็บข้อมูลและใช้ AI สร้างภาพออกแบบบ้าน",
    },
  },
  {
    id: 20,
    title: "MAI",
    description:
      "The chatbot at the mai event of the Stock Exchange of Thailand was created by cloning Mr. Prapan and putting him into a Holovue booth. This allowed people at the event to interact with the chatbot to ask for information about each company without Mr. Prapan speaking in person.",
    technologies: [
      "Nuxt 3",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/project/mai.png",
    featured: false,
    video_demo:
      "https://drive.google.com/file/d/1Z_4ql4trWRiMoPElhZnF8ncOywfoIUkk/view?usp=sharing",
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description:
        "แชทบอทในงาน MAI ของตลาดหลักทรัพย์แห่งประเทศไทย สร้างโดยโคลนนิ่ง คุณประพันธ์ ใส่ในตู้ Holovue เพื่อให้ผู้ร่วมงานสามารถสอบถามข้อมูลบริษัทต่าง ๆ ผ่านแชทบอทได้",
    },
  },
  {
    id: 21,
    title: "Shepossible",
    description: "Game website for play facswap in the event.",
    technologies: [
      "Nuxt 3",
      "Node.js (Express)",
      "Tailwind CSS",
      "MonggoDB",
      "Vultr",
      "Nginx",
      "PM2",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/project/shepossible.png",
    featured: false,
    video_demo:
      "https://drive.google.com/file/d/1Dsq8Je5y5BRXX76dTPv0twWfHAy6orQx/view?usp=sharing",
    // 🇹🇭 คำแปลภาษาไทย
    th: {
      description: "เว็บไซต์เกม Face Swap สำหรับเล่นในงานอีเวนต์",
    },
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    location: "Bangkok, Thailand",
    period: "2017 — 2021",
    gpa: "3.65 / 4.00",
    highlights: [
      "Dean's List for 3 consecutive years",
      "Senior Project: AI-powered Student Advisory System",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    url: "https://aws.amazon.com/certification/",
  },
  {
    id: 2,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2023",
    url: "https://coursera.org/",
  },
  {
    id: 3,
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2023",
    url: "https://cloud.google.com/certification",
  },
];

export const languages = [
  { name: "Thai", level: "Native" },
  {
    name: "English",
    level: "Working Proficiency(Technical Reading), Limited Speaking",
  },
];

export const interests = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "DevOps Engineer",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

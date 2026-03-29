const config = {
  title: "Maha | Creative Developer",
  description: {
    long: "Explore the portfolio of Maha — a creative developer and technologist specializing in interactive web experiences, stunning visual design, and innovative digital solutions. Discover projects, skills, and a passion for building the future of the web.",
    short:
      "Creative developer crafting interactive web experiences and innovative digital solutions.",
  },
  keywords: [
    "Maha",
    "portfolio",
    "creative developer",
    "web development",
    "3D animations",
    "interactive websites",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
    "Three.js",
    "Technologist",
  ],
  author: "Maha",
  email: "hello@maha.dev",
  site: "https://maha.dev",

  // for github stars button
  githubUsername: "mac20060630",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/maha-akshay-r-96690926a/",
    instagram: "https://www.instagram.com/mac.9035?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/mac20060630",
  },
};
export { config };

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
  githubUsername: "maha",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/maha",
    linkedin: "https://www.linkedin.com/in/maha/",
    instagram: "https://www.instagram.com/maha",
    facebook: "https://www.facebook.com/maha/",
    github: "https://github.com/maha",
  },
};
export { config };

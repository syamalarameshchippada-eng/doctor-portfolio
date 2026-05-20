export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap:
      "https://doctor-portfolio-psi.vercel.app/sitemap.xml",
  };
}
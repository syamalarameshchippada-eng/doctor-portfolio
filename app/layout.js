import "./globals.css";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://doctor-portfolio-psi.vercel.app"),

  title:
    "Dr. Ramesh Kumar Chippada | Best ENT Specialist in Visakhapatnam",

  description:
    "Experienced ENT specialist in Visakhapatnam providing advanced treatment for ear, nose, throat, sinus, allergy, hearing, and voice disorders.",

  keywords: [
    "ENT Specialist in Visakhapatnam",
    "Best ENT doctor in Vizag",
    "ENT Surgeon Vizag",
    "Sinus treatment Visakhapatnam",
    "Ear Nose Throat doctor",
    "Hearing specialist Vizag",
    "ENT clinic Visakhapatnam",
    "Sinus surgery Vizag",
    "Hearing loss treatment",
    "Throat specialist Andhra Pradesh",
  ],

  authors: [{ name: "Dr. Ramesh Kumar Chippada" }],

  creator: "Dr. Ramesh Kumar Chippada",

  publisher: "Dr. Ramesh Kumar Chippada",

  applicationName: "Dr. Ramesh Kumar Chippada ENT Clinic",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://doctor-portfolio-psi.vercel.app",
  },

  openGraph: {
    title:
      "Dr. Ramesh Kumar Chippada | Best ENT Specialist in Visakhapatnam",

    description:
      "Expert ENT care in Visakhapatnam for sinus, hearing, allergy, throat, and voice disorders.",

    url: "https://doctor-portfolio-psi.vercel.app",

    siteName: "Dr. Ramesh Kumar Chippada",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/doctor.png",
        width: 1200,
        height: 630,
        alt: "Dr. Ramesh Kumar Chippada ENT Specialist",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dr. Ramesh Kumar Chippada | ENT Specialist in Visakhapatnam",

    description:
      "Advanced ENT care in Visakhapatnam for sinus, hearing, throat, allergy, and voice disorders.",

    images: ["/images/doctor.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  themeColor: "#0D5EAF",

  category: "healthcare",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
import ScrollToTop from "@/components/common/ScrollToTop";
import "./globals.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin"],
  display: "swap",
});

export const metadata = {
  title: "Paulinus Akhigbe",
  description:
    "I'm a dedicated master's student specializing in data analysis, with expertise in statistical methodologies, data mining, and predictive modeling. I have experience in data collection, cleansing, analysis, and visualization to drive data-driven decisions. My ability to translate complex data into actionable insights equips me to contribute to innovative, real-world solutions.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ScrollToTop /> {children}
      </body>
    </html>
  );
};

export default RootLayout;

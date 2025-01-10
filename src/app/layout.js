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
    "I am a results-driven Data Analyst and Machine Learning Engineer with a passion for harnessing the power of AI and Machine Learning to transform complex datasets into actionable insights. With a strong foundation in SQL, Python, and data visualization tools like Power BI and Tableau, I build intelligent, data-driven solutions that enhance business decision-making and drive operational efficiency. My expertise extends beyond traditional data analysis to developing and deploying machine learning models, predictive analytics, and AI-powered systems. I specialize in designing scalable data pipelines, automating ETL processes, and crafting interactive dashboards that empower stakeholders to easily interpret and act on data insights.",
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

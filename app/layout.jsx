import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
//
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
//
export const metadata = {
  title: "Mini Hackathon 2024",
  description: "MS Club Mini Hackathon 2024",
};
//
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-56">
      <body className={poppins.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

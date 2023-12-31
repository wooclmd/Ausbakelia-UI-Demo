import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ausbakelia Café | Xinbei",
  description: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Navbar />
        <div className="md:mt-32" style={{ marginTop: "120px" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

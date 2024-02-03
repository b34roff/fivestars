import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Fivestars",
  description: "Fivestars RP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="h-screen bg-fixed mci-c4f7c3b940b2fda375c61f1064b5e7f6 bg-gradient-to-tr from-amber-200 via-gray-300 to-orange-200">
        <Navbar />
        <main className="flex flex-grow w-screen md:w-3/4 min-h-full px-2 py-4 mx-auto mt-[60px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

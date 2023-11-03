import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fivestars",
  description: "Fivestars RP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="w-screen h-screen bg-orange-100">
        <Navbar />
        <main className="flex flex-grow w-full md:w-3/4 min-h-full px-2 py-4 mx-auto mt-[60px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

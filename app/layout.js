// app/layout.jsx
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import './globals.css';
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Finance Tracker",
  description: "Track your finances with AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
        <html lang="en" className={inter.variable}>
          
          <body className={`${inter.className}`}>

            <Header />

            <main className="min-h-screen">
              {children}
            </main>

            <Toaster richColors />

            
            <footer className="bg-blue-50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Finance Tracker</p>
              </div>
            </footer>

          </body>
        </html>
    </ClerkProvider>

  );
}

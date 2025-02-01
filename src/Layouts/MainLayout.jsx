
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { ThemeProvider } from "../components/ui/ThemeProvider";


import Loader from "../components/ui/Loader";


const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a loading delay (e.g., fetching data)
      const timer = setTimeout(() => {
        setLoading(false); // Set loading to false after 3 seconds
      }, 3000);
  
      return () => clearTimeout(timer); // Cleanup the timer
    }, []);
    return (
        <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        
        {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="p-0 flex-grow">
                  <Outlet />
                </main>
                <Footer/>
            </div>
        )}
        </ThemeProvider>
        </>
    );
};

export default MainLayout;

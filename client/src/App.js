import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import SpeakersPage from "./pages/SpeakersPage/SpeakersPage";
import TalksPage from "./pages/TalksPage/TalksPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import Footer from "./components/Footer/Footer";
import Gallery from "./pages/GalleryPage/GalleryPage";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";

function App() {

    const location = useLocation()
    const [page, setPage] = useState('');

    useEffect(() => {
        Aos.init({
            once: true
        })
        setPage(location.pathname.substring(1, location.pathname.length).split('/')[0])
    }, [location.pathname])


    return (
        <>
            <Navbar currentPage={page} />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/speakers/:year' element={<SpeakersPage />} />
                <Route path='/talks' element={<TalksPage />} />
                <Route path='/team' element={<TeamPage />} />
                {/* <Route path="/gallery" element={<Gallery />} /> */}

            </Routes>
            <Footer />
        </>
    );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import AboutUs from './components/pages/aboutUs';
import Services from './components/pages/services';
import Gallery from './components/pages/gallery';
import Blog from './components/pages/blogs';
import ContactUs from './components/pages/contactUs';
import DonateNow from './components/pages/donate';
import NotFound from './components/pages/notFound';


const RouteLinks: React.FC = () => {
    return (
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='services' element={<Services />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='blog' element={<Blog />} />
            <Route path='contact-us' element={<ContactUs />} />
            <Route path='donate' element={<DonateNow />} />

            {/* Handle 404 Not Found */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RouteLinks;

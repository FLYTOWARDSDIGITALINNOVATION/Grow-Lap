import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import SubServiceDetail from './pages/SubServiceDetail';
import SeoPage from './pages/SeoPage';
import MetaAdPage from './pages/MetaAdPage';
import GoogleAdPage from './pages/GoogleAdPage';
import OnlinePromotionPage from './pages/OnlinePromotionPage';
import SocialMediaPage from './pages/SocialMediaPage';
import EmailMarketingPage from './pages/EmailMarketingPage';
import WhatsappMarketingPage from './pages/WhatsappMarketingPage';
import LinkedinMarketingPage from './pages/LinkedinMarketingPage';
import ContentCreationPage from './pages/ContentCreationPage';
import PersonalBrandingPage from './pages/PersonalBrandingPage';
import ScriptWritingPage from './pages/ScriptWritingPage';
import VideoEditingPage from './pages/VideoEditingPage';
import ReelsEditingPage from './pages/ReelsEditingPage';
import VlogEditingPage from './pages/VlogEditingPage';
import WeddingEditingPage from './pages/WeddingEditingPage';
import PhotoEditingPage from './pages/PhotoEditingPage';
import LogoDesignPage from './pages/LogoDesignPage';
import PosterDesignPage from './pages/PosterDesignPage';
import FlexDesignPage from './pages/FlexDesignPage';
import GraphicsDesignPage from './pages/GraphicsDesignPage';
import AnimationPage from './pages/AnimationPage';
import DslrShootPage from './pages/DslrShootPage';
import ProductShootPage from './pages/ProductShootPage';
import MobileShootPage from './pages/MobileShootPage';
import DroneShootPage from './pages/DroneShootPage';
import ReelsShootPage from './pages/ReelsShootPage';
import PodcastShootPage from './pages/PodcastShootPage';
import IndustryPage from './pages/IndustryPage';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:categorySlug" element={<ServiceDetail />} />
            <Route path="/services/digital-marketing/seo" element={<SeoPage />} />
            <Route path="/services/digital-marketing/meta-ad" element={<MetaAdPage />} />
            <Route path="/services/digital-marketing/google-ad" element={<GoogleAdPage />} />
            <Route path="/services/digital-marketing/online-promotion" element={<OnlinePromotionPage />} />
            <Route path="/services/digital-marketing/social-media-marketing" element={<SocialMediaPage />} />
            <Route path="/services/digital-marketing/email" element={<EmailMarketingPage />} />
            <Route path="/services/digital-marketing/whatsapp" element={<WhatsappMarketingPage />} />
            <Route path="/services/digital-marketing/linkedin" element={<LinkedinMarketingPage />} />
            <Route path="/services/digital-marketing/content-creation" element={<ContentCreationPage />} />
            <Route path="/services/digital-marketing/personal-branding" element={<PersonalBrandingPage />} />
            <Route path="/services/digital-marketing/script-writing" element={<ScriptWritingPage />} />
            <Route path="/services/video-editing/editing" element={<VideoEditingPage />} />
            <Route path="/services/video-editing/reels-editing" element={<ReelsEditingPage />} />
            <Route path="/services/video-editing/vlog-editing" element={<VlogEditingPage />} />
            <Route path="/services/video-editing/wedding-editing" element={<WeddingEditingPage />} />
            <Route path="/services/video-editing/photo-editing" element={<PhotoEditingPage />} />
            <Route path="/services/video-editing/logo-design" element={<LogoDesignPage />} />
            <Route path="/services/video-editing/poster-design" element={<PosterDesignPage />} />
            <Route path="/services/video-editing/flex-design" element={<FlexDesignPage />} />
            <Route path="/services/video-editing/graphics-design" element={<GraphicsDesignPage />} />
            <Route path="/services/video-editing/animation" element={<AnimationPage />} />
            <Route path="/services/shoot/dslr-shoot" element={<DslrShootPage />} />
            <Route path="/services/shoot/product-shoot" element={<ProductShootPage />} />
            <Route path="/services/shoot/mobile-shoot" element={<MobileShootPage />} />
            <Route path="/services/shoot/drone-shoot" element={<DroneShootPage />} />
            <Route path="/services/shoot/reels-shoot" element={<ReelsShootPage />} />
            <Route path="/services/shoot/podcast-shoot" element={<PodcastShootPage />} />
            <Route path="/services/:categorySlug/:subServiceSlug" element={<SubServiceDetail />} />
            <Route path="/industry" element={<IndustryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;

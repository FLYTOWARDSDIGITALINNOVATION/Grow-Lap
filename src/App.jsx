import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';

// Eagerly load HomePage for fast initial load
import HomePage from './pages/HomePage';

// Lazy load all other pages to optimize initial bundle size & performance
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/services/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/services/ServiceDetail'));
const SubServiceDetail = lazy(() => import('./pages/services/SubServiceDetail'));
const SeoPage = lazy(() => import('./pages/services/SeoPage'));
const MetaAdPage = lazy(() => import('./pages/services/MetaAdPage'));
const GoogleAdPage = lazy(() => import('./pages/services/GoogleAdPage'));
const OnlinePromotionPage = lazy(() => import('./pages/services/OnlinePromotionPage'));
const SocialMediaPage = lazy(() => import('./pages/services/SocialMediaPage'));
const EmailMarketingPage = lazy(() => import('./pages/services/EmailMarketingPage'));
const WhatsappMarketingPage = lazy(() => import('./pages/services/WhatsappMarketingPage'));
const LinkedinMarketingPage = lazy(() => import('./pages/services/LinkedinMarketingPage'));
const ContentCreationPage = lazy(() => import('./pages/services/ContentCreationPage'));
const PersonalBrandingPage = lazy(() => import('./pages/services/PersonalBrandingPage'));
const ScriptWritingPage = lazy(() => import('./pages/services/ScriptWritingPage'));
const VideoEditingPage = lazy(() => import('./pages/services/VideoEditingPage'));
const ReelsEditingPage = lazy(() => import('./pages/services/ReelsEditingPage'));
const VlogEditingPage = lazy(() => import('./pages/services/VlogEditingPage'));
const WeddingEditingPage = lazy(() => import('./pages/services/WeddingEditingPage'));
const PhotoEditingPage = lazy(() => import('./pages/services/PhotoEditingPage'));
const LogoDesignPage = lazy(() => import('./pages/services/LogoDesignPage'));
const PosterDesignPage = lazy(() => import('./pages/services/PosterDesignPage'));
const FlexDesignPage = lazy(() => import('./pages/services/FlexDesignPage'));
const GraphicsDesignPage = lazy(() => import('./pages/services/GraphicsDesignPage'));
const AnimationPage = lazy(() => import('./pages/services/AnimationPage'));
const DslrShootPage = lazy(() => import('./pages/services/DslrShootPage'));
const ProductShootPage = lazy(() => import('./pages/services/ProductShootPage'));
const MobileShootPage = lazy(() => import('./pages/services/MobileShootPage'));
const DroneShootPage = lazy(() => import('./pages/services/DroneShootPage'));
const ReelsShootPage = lazy(() => import('./pages/services/ReelsShootPage'));
const PodcastShootPage = lazy(() => import('./pages/services/PodcastShootPage'));
const IndustryPage = lazy(() => import('./pages/industry/IndustryPage'));
import IndustryDetail from './pages/industry/IndustryDetail';
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

const PageLoader = () => (
  <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh', backgroundColor: 'var(--bg-dark)', color: '#fff' }}>
    <div style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--accent-orange)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 15px' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/industry/showrooms/:showroomType" element={<IndustryDetail />} />
              <Route path="/industry/:industrySlug" element={<IndustryDetail />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:blogId" element={<BlogDetail />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;

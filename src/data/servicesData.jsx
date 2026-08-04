import React from 'react';
import { FiTrendingUp, FiVideo, FiCamera } from 'react-icons/fi';

export const servicesData = [
  { 
    slug: 'digital-marketing',
    icon: <FiTrendingUp />, 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', 
    title: 'Digital Marketing', 
    description: 'Comprehensive digital strategies to grow your business online.',
    longDescription: 'Our growth-oriented digital marketing solutions are designed to elevate your brand. We combine SEO, Meta Ads, Google Ads, and targeted online promotions into a cohesive strategy that brings consistent leads and revenue.',
    benefits: [
      { 
        slug: 'seo', 
        title: 'SEO - Search Engine Optimization', 
        desc: 'Rank higher on Google and drive sustainable, high-quality organic traffic.', 
        image: '/pexels-markus-winkler-1430818-4604639.webp', 
        heroBg: 'none',
        advancedHero: {
          badge: 'Better Rankings, More Traffic, Bigger Growth',
          titlePrefix: 'Professional',
          titleOrange: 'SEO - Search Engine',
          titleSuffix: 'Optimization Services',
          desc: 'Improve your search rankings, increase organic traffic, and grow your business with data-driven SEO strategies tailored for long-term success.',
          features: [
            { icon: 'FaSearch', text: 'Keyword Research' },
            { icon: 'FaChartBar', text: 'On-Page SEO' },
            { icon: 'FaCogs', text: 'Technical SEO' },
            { icon: 'FaLink', text: 'Link Building' },
            { icon: 'FaMapMarkerAlt', text: 'Local SEO' },
            { icon: 'FaFileAlt', text: 'Monthly Reporting' }
          ],
          cta1: 'Get Free SEO Audit',
          cta2: 'View Our Services',
          bottomText: 'Smart SEO Strategies. Stronger Rankings. Real Results.'
        }
      },
      { slug: 'meta-ad', title: 'Meta Ads', desc: 'Highly targeted Facebook and Instagram ad campaigns to engage your exact audience.', image: '/Meta Ad.webp', video: 'https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4' },
      { slug: 'google-ad', title: 'Google Ads', desc: 'Capture high-intent leads instantly with optimized Google Search and Display ads.', image: '/5.24.22-google-ad-updates.webp' },
      { slug: 'online-promotion', title: 'Online Promotion', desc: 'Strategic promotions across digital channels to boost brand visibility.', image: '/online-promotion.webp' },
      { slug: 'social-media-marketing', title: 'Social Media Marketing', desc: 'Data-driven strategies to boost your presence across all major platforms.', image: '/InShot_20260725_115401421.jpg.webp' },
      { slug: 'email', title: 'Email Marketing', desc: 'Targeted email marketing campaigns to nurture leads.', image: '/email-marketing-strategy.webp' },
      { slug: 'whatsapp', title: 'WhatsApp Marketing', desc: 'Direct WhatsApp marketing for immediate customer engagement.', image: '/ChatGPT Image Jul 25, 2026, 12_17_57 PM.webp' },
      { slug: 'linkedin', title: 'LinkedIn Marketing', desc: 'Professional B2B marketing and networking on LinkedIn.', image: '/photo-1616469829581-73993eb86b02.webp' },
      { slug: 'content-creation', title: 'Content Creation', desc: 'High-quality content tailored to your brand voice.', image: '/ChatGPT Image Jul 25, 2026, 12_21_11 PM.webp' },
      { slug: 'personal-branding', title: 'Personal Branding', desc: 'Establish a memorable brand identity and presence.', image: '/1f8772e9-c97f-4379-8ff1-c8cfe996d04b.webp' },
      { slug: 'script-writing', title: 'Script Writing', desc: 'Persuasive script writing tailored to your target audience.', image: '/ChatGPT Image Jul 25, 2026, 12_50_20 PM.webp' }
    ],
    faqs: [
      { question: 'How long does it take to see results?', answer: 'Results vary by strategy. Paid ads can deliver leads within days, while SEO takes a few months to build strong, sustainable organic rankings.' },
      { question: 'How do you measure ROI?', answer: 'We track key performance indicators like conversion rates, CPA, and overall revenue generated.' }
    ]
  },
  { 
    slug: 'video-editing',
    icon: <FiVideo />, 
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80', 
    title: 'Editing', 
    description: 'Professional editing for videos, photos, and creative designs.',
    longDescription: 'Our post-production experts take your raw footage and turn it into masterpieces. From snappy Instagram Reels and engaging YouTube vlogs to cinematic wedding films and flawless photo retouching.',
    benefits: [
      { slug: 'editing', title: 'Video Editing', desc: 'Professional video editing for all types of content.', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80' },
      { slug: 'reels-editing', title: 'Reels Editing', desc: 'Trendy, fast-paced edits with captions designed to go viral.', image: '/Reels Editing.webp' },
      { slug: 'vlog-editing', title: 'Full Vlog Editing', desc: 'Engaging, well-paced vlog editing with sound design and B-roll.', image: '/Full Vlog Editing.webp' },
      { slug: 'wedding-editing', title: 'Wedding Editing', desc: 'Beautifully crafted highlight reels and full-length edits.', image: '/Wedding Editing.webp' },
      { slug: 'photo-editing', title: 'Photo Editing', desc: 'Flawless photo editing, background removal, and high-end retouching.', image: '/photo editing.webp' },
      { slug: 'logo-design', title: 'Logo Design', desc: 'Creative logo designs that establish a memorable brand identity.', image: '/logo.webp' },
      { slug: 'poster-design', title: 'Poster Design', desc: 'Eye-catching poster designs for events and marketing.', image: '/poster.webp' },
      { slug: 'flex-design', title: 'Flex Design', desc: 'High-quality flex banner designs for offline promotions.', image: '/flex.webp' },
      { slug: 'graphics-design', title: 'Graphics Design', desc: 'Comprehensive graphics design for all your visual needs.', image: '/Graphic Design.webp' },
      { slug: 'animation', title: 'Animation', desc: 'Custom animations to make your message unforgettable.', image: '/Animation.webp' }
    ],
    faqs: [
      { question: 'Can you edit videos for Instagram Reels?', answer: 'Yes, we specialize in short-form editing optimized for algorithms.' },
      { question: 'Do you offer design services?', answer: 'Yes, our creative team specializes in logos, posters, flex, and overall graphics design.' }
    ]
  },
  { 
    slug: 'shoot',
    icon: <FiCamera />, 
    image: '/service_shoots_new.webp', 
    title: 'Shooting', 
    description: 'High-quality photography and videography production.',
    longDescription: 'Visual storytelling is at the heart of modern marketing. Our production team provides everything from product and DSLR shoots to cinematic drone and podcast recording.',
    benefits: [
      { slug: 'dslr-shoot', title: 'DSLR Camera Shoot', desc: 'High-resolution photography and videography using advanced DSLR equipment.', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80' },
      { slug: 'product-shoot', title: 'Product Shoot', desc: 'Showcase your products with stunning photography that drives sales.', image: '/product shoot.webp' },
      { slug: 'mobile-shoot', title: 'Mobile Shoot', desc: 'Quick and trendy mobile shoots optimized for fast social media content.', image: '/Mobile Shoot.webp' },
      { slug: 'drone-shoot', title: 'Drone Shoot', desc: 'Capture breathtaking perspectives and aerial views.', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80' },
      { slug: 'reels-shoot', title: 'Reels Shoot', desc: 'On-location shoots specifically planned and directed for short-form reels.', image: '/reels shoot.webp' },
      { slug: 'podcast-shoot', title: 'Podcast Shoot', desc: 'Professional audio and multi-camera setups for podcast recordings.', image: '/Podcast.webp' }
    ],
    faqs: [
      { question: 'Do you provide on-location shoots?', answer: 'Yes! We offer on-location shoots using advanced DSLR and Drone equipment.' },
      { question: 'What is included in a podcast shoot?', answer: 'Our podcast shoots include multi-camera setups, lighting, and high-fidelity audio recording.' }
    ]
  }
];

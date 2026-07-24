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
      { slug: 'seo', title: 'SEO - search engine optimization', desc: 'Rank higher on Google and drive sustainable, high-quality organic traffic.', image: 'https://images.unsplash.com/photo-1571498192621-e0e6402316e6?w=800&q=80' },
      { slug: 'meta-ad', title: 'meta ad', desc: 'Highly targeted Facebook and Instagram ad campaigns to engage your exact audience.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', video: 'https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4' },
      { slug: 'google-ad', title: 'google ad', desc: 'Capture high-intent leads instantly with optimized Google Search and Display ads.', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80' },
      { slug: 'online-promotion', title: 'online promotion', desc: 'Strategic promotions across digital channels to boost brand visibility.', image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80' },
      { slug: 'social-media-marketing', title: 'social media marketing', desc: 'Data-driven strategies to boost your presence across all major platforms.', image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80' },
      { slug: 'email', title: 'email', desc: 'Targeted email marketing campaigns to nurture leads.', image: 'https://images.unsplash.com/photo-1596526131083-e8c638c9c6c3?w=800&q=80' },
      { slug: 'whatsapp', title: 'WhatsApp', desc: 'Direct WhatsApp marketing for immediate customer engagement.', image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80' },
      { slug: 'linkedin', title: 'LinkedIn', desc: 'Professional B2B marketing and networking on LinkedIn.', image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80' },
      { slug: 'content-creation', title: 'content creation', desc: 'High-quality content tailored to your brand voice.', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80' },
      { slug: 'personal-branding', title: 'personal branding', desc: 'Establish a memorable brand identity and presence.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
      { slug: 'script-writing', title: 'script writing', desc: 'Persuasive script writing tailored to your target audience.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=800&q=80' }
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
    title: 'Video Editing', 
    description: 'Professional editing for videos, photos, and creative designs.',
    longDescription: 'Our post-production experts take your raw footage and turn it into masterpieces. From snappy Instagram Reels and engaging YouTube vlogs to cinematic wedding films and flawless photo retouching.',
    benefits: [
      { slug: 'editing', title: 'editing', desc: 'Professional video editing for all types of content.', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80' },
      { slug: 'reels-editing', title: 'reels editing', desc: 'Trendy, fast-paced edits with captions designed to go viral.', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80' },
      { slug: 'vlog-editing', title: 'vlog full editing', desc: 'Engaging, well-paced vlog editing with sound design and B-roll.', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80' },
      { slug: 'wedding-editing', title: 'wedding editing', desc: 'Beautifully crafted highlight reels and full-length edits.', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80' },
      { slug: 'photo-editing', title: 'photo editing', desc: 'Flawless photo editing, background removal, and high-end retouching.', image: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?w=800&q=80' },
      { slug: 'logo-design', title: 'logo design', desc: 'Creative logo designs that establish a memorable brand identity.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80' },
      { slug: 'poster-design', title: 'poster design', desc: 'Eye-catching poster designs for events and marketing.', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80' },
      { slug: 'flex-design', title: 'flex design', desc: 'High-quality flex banner designs for offline promotions.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80' },
      { slug: 'graphics-design', title: 'graphics design', desc: 'Comprehensive graphics design for all your visual needs.', image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80' },
      { slug: 'animation', title: 'animation', desc: 'Custom animations to make your message unforgettable.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80' }
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
    title: 'Shoot', 
    description: 'High-quality photography and videography production.',
    longDescription: 'Visual storytelling is at the heart of modern marketing. Our production team provides everything from product and DSLR shoots to cinematic drone and podcast recording.',
    benefits: [
      { slug: 'dslr-shoot', title: 'DSLR shoot', desc: 'High-resolution photography and videography using advanced DSLR equipment.', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80' },
      { slug: 'product-shoot', title: 'product shoot', desc: 'Showcase your products with stunning photography that drives sales.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80' },
      { slug: 'mobile-shoot', title: 'mobile shoot', desc: 'Quick and trendy mobile shoots optimized for fast social media content.', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80' },
      { slug: 'drone-shoot', title: 'drone shoot', desc: 'Capture breathtaking perspectives and aerial views.', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80' },
      { slug: 'reels-shoot', title: 'reels shoot', desc: 'On-location shoots specifically planned and directed for short-form reels.', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80' },
      { slug: 'podcast-shoot', title: 'podcast shoot', desc: 'Professional audio and multi-camera setups for podcast recordings.', image: 'https://images.unsplash.com/photo-1588591795084-1770cb3be374?w=800&q=80' }
    ],
    faqs: [
      { question: 'Do you provide on-location shoots?', answer: 'Yes! We offer on-location shoots using advanced DSLR and Drone equipment.' },
      { question: 'What is included in a podcast shoot?', answer: 'Our podcast shoots include multi-camera setups, lighting, and high-fidelity audio recording.' }
    ]
  }
];

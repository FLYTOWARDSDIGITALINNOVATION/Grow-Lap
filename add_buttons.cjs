const fs = require('fs');
const path = require('path');
const pagesDir = 'c:/Users/sanka/Downloads/Digitalmarketing/src/pages';
const categoryMap = {
  'MetaAdPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'GoogleAdPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'OnlinePromotionPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'SocialMediaPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'EmailMarketingPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'WhatsappMarketingPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'LinkedinMarketingPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'ContentCreationPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'PersonalBrandingPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'ScriptWritingPage.jsx': { url: '/services/digital-marketing', text: 'Back to Digital Marketing' },
  'VideoEditingPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'ReelsEditingPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'VlogEditingPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'WeddingEditingPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'PhotoEditingPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'LogoDesignPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'PosterDesignPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'FlexDesignPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'GraphicsDesignPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'AnimationPage.jsx': { url: '/services/video-editing', text: 'Back to Video Editing' },
  'DslrShootPage.jsx': { url: '/services/shoot', text: 'Back to Shoot Services' },
  'ProductShootPage.jsx': { url: '/services/shoot', text: 'Back to Shoot Services' },
  'MobileShootPage.jsx': { url: '/services/shoot', text: 'Back to Shoot Services' },
  'DroneShootPage.jsx': { url: '/services/shoot', text: 'Back to Shoot Services' },
  'ReelsShootPage.jsx': { url: '/services/shoot', text: 'Back to Shoot Services' },
  'PodcastShootPage.jsx': { url: '/services/shoot', text: 'Back to Shoot Services' }
};

Object.keys(categoryMap).forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const { url, text } = categoryMap[file];
    
    // add link import if missing
    if (!content.includes('Link') && !content.includes('react-router-dom')) {
      content = "import { Link } from 'react-router-dom';\n" + content;
    } else if (!content.includes('Link') && content.includes('react-router-dom')) {
      content = content.replace(/import\s+{([^}]*)}\s+from\s+['"]react-router-dom['"]/, "import { Link, $1 } from 'react-router-dom'");
    }

    const insertion = `
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="${url}" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> ${text}
          </Link>
        </div>`;

    const regex = /({\/\*\s*Hero Section\s*\*\/}\s*<section[^>]*>)/i;
    
    // Some files might already have it from the previous script
    if (!content.includes(text)) {
      if (regex.test(content)) {
        content = content.replace(regex, "$1" + insertion);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + file);
      } else {
        console.log('Skipped ' + file + ' (hero section not found by regex)');
      }
    } else {
      console.log('Skipped ' + file + ' (already updated)');
    }
  } else {
    console.log('Not found ' + file);
  }
});

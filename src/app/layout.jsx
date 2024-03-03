import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Analytics } from '@vercel/analytics/react';

import Footer from '@/components/footer/footer.component';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Nav from '@/components/nav/nav.component';

library.add(faFacebook, faLinkedinIn, faInstagram, faStar);

export const metadata = {
  title: 'Phoenix Wellness and Recovery',
  description: 'Rebuild. Recover. Reborn.',
  icons: {
    icon: '/favicon.svg',
    type: 'image/svg+xml',
  },
  manifest: '/manifest.json',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&family=Oswald&display=swap"
        rel="stylesheet"
        precedence="default"
      />
      {process.env.GA_TRACKING_ID && (
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      )}
      <body>
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

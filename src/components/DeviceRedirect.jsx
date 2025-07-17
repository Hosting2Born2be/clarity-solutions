'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DeviceRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const detectDeviceAndRedirect = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Check if it's Android
      if (userAgent.includes('android')) {
        // Redirect to Google Play Store
        window.location.href = 'https://play.google.com/store/apps/details?id=your.app.package.name';
        return;
      }
      
      // Check if it's iOS (iPhone, iPad, iPod)
      if (/iphone|ipad|ipod/.test(userAgent)) {
        // Redirect to App Store
        window.location.href = 'https://apps.apple.com/app/your-app-id';
        return;
      }
      
      // For all other devices (Windows, macOS, Linux, etc.), redirect to the app page
      window.location.href = 'https://clarity-solutions.io/clarity-solutions-app';
    };

    detectDeviceAndRedirect();
  }, []);

  return null; // This component doesn't render anything
};

export default DeviceRedirect; 
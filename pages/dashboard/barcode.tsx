










import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useUser } from '@clerk/nextjs';
import QRCode from 'qrcode.react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/contexts/LanguageContext';

const AffiliateBarcode: React.FC = () => {
  const { user } = useUser();
  const { language } = useLanguage();
  const [affiliateLink, setAffiliateLink] = useState<string>('');
  const [qrValue, setQrValue] = useState<string>('');

  useEffect(() => {
    if (user) {
      const userEmail = user.primaryEmailAddress?.emailAddress;
      if (userEmail) {
        const uniqueAffiliateLink = `${window.location.origin}/affiliate-signup?ref=${userEmail}`;
        setAffiliateLink(uniqueAffiliateLink);
        setQrValue(uniqueAffiliateLink);
      }
    }
  }, [user]);

  if (!user) {
    return <LoadingSpinner />;
  }

  const content = {
    title: {
      en: 'Captain El Asyuty Program',
      ar: 'برنامج الكابتن الأسيوطي',
    },
    description: {
      en: 'Share this QR code or link to invite others to sign up. You will earn points for each referral.',
      ar: 'شارك هذا الرمز أو الرابط لدعوة الآخرين للتسجيل. ستربح نقاطًا لكل إحالة.',
    },
    note: {
      en: 'You can win a free month of training',
      ar: 'يمكنك الفوز بشهر تدريب مجاني',
    },
    referralLink: {
      en: 'Your referral link:',
      ar: 'رابط الإحالة الخاص بك:',
    }
  };

  return (
    <DashboardLayout>
      <div className="flex text-center flex-col items-center justify-center min-h-screen bg-[var(--background-color)] text-[var(--text-color)] p-6">
        <h1 className="text-2xl font-bold mb-4">{content.title[language as 'en' | 'ar']}</h1>
        <p className="mb-4">
          {content.description[language as 'en' | 'ar']}
          <br />
          <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-2" /> {content.note[language as 'en' | 'ar']}
        </p>
        <div className="mb-4">
          <QRCode value={qrValue} size={256} level="H" />
        </div>
        <div className="bg-[var(--input-background-color)] p-4 rounded-md shadow-md text-center">
          <p>{content.referralLink[language as 'en' | 'ar']}</p>
          <p className="text-blue-500 break-all">{affiliateLink}</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AffiliateBarcode;

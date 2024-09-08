










// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import QRCode from 'qrcode.react';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrophy } from '@fortawesome/free-solid-svg-icons';
// import { useLanguage } from '@/contexts/LanguageContext';

// const AffiliateBarcode: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [affiliateLink, setAffiliateLink] = useState<string>('');
//   const [qrValue, setQrValue] = useState<string>('');

//   useEffect(() => {
//     if (user) {
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (userEmail) {
//         const uniqueAffiliateLink = `${window.location.origin}/affiliate-signup?ref=${userEmail}`;
//         setAffiliateLink(uniqueAffiliateLink);
//         setQrValue(uniqueAffiliateLink);
//       }
//     }
//   }, [user]);

//   if (!user) {
//     return <LoadingSpinner />;
//   }

//   const content = {
//     title: {
//       en: 'Captain El Asyuty Program',
//       ar: 'برنامج الكابتن الأسيوطي',
//     },
//     description: {
//       en: 'Share this QR code or link to invite others to sign up. You will earn points for each referral.',
//       ar: 'شارك هذا الرمز أو الرابط لدعوة الآخرين للتسجيل. ستربح نقاطًا لكل إحالة.',
//     },
//     note: {
//       en: 'You can win a free month of training',
//       ar: 'يمكنك الفوز بشهر تدريب مجاني',
//     },
//     referralLink: {
//       en: 'Your referral link:',
//       ar: 'رابط الإحالة الخاص بك:',
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="flex text-center flex-col items-center justify-center min-h-screen bg-[var(--background-color)] text-[var(--text-color)] p-6">
//         <h1 className="text-2xl font-bold mb-4">{content.title[language as 'en' | 'ar']}</h1>
//         <p className="mb-4">
//           {content.description[language as 'en' | 'ar']}
//           <br />
//           <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-2" /> {content.note[language as 'en' | 'ar']}
//         </p>
//         <div className="mb-4">
//           <QRCode value={qrValue} size={256} level="H" />
//         </div>
//         <div className="bg-[var(--input-background-color)] p-4 rounded-md shadow-md text-center">
//           <p>{content.referralLink[language as 'en' | 'ar']}</p>
//           <p className="text-blue-500 break-all">{affiliateLink}</p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AffiliateBarcode;




// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import QRCode from 'qrcode.react';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrophy } from '@fortawesome/free-solid-svg-icons';
// import { useLanguage } from '@/contexts/LanguageContext';

// const AffiliateBarcode: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [affiliateLink, setAffiliateLink] = useState<string>('');
//   const [qrValue, setQrValue] = useState<string>('');

//   useEffect(() => {
//     if (user) {
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (userEmail) {
//         const uniqueAffiliateLink = `https://captainasyuty.com/affiliate-signup?ref=${userEmail}`;
//         setAffiliateLink(uniqueAffiliateLink);
//         setQrValue(uniqueAffiliateLink);
//       }
//     }
//   }, [user]);

//   if (!user) {
//     return <LoadingSpinner />;
//   }

//   const content = {
//     title: {
//       en: 'Captain El Asyuty Program',
//       ar: 'برنامج الكابتن الأسيوطي',
//     },
//     description: {
//       en: 'Share this QR code or link to invite others to sign up. You will earn points for each referral.',
//       ar: 'شارك هذا الرمز أو الرابط لدعوة الآخرين للتسجيل. ستربح نقاطًا لكل إحالة.',
//     },
//     note: {
//       en: 'You can win a free month of training',
//       ar: 'يمكنك الفوز بشهر تدريب مجاني',
//     },
//     referralLink: {
//       en: 'Your referral link:',
//       ar: 'رابط الإحالة الخاص بك:',
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="flex text-center flex-col items-center justify-center min-h-screen bg-[var(--background-color)] text-[var(--text-color)] p-6">
//         <h1 className="text-2xl font-bold mb-4">{content.title[language as 'en' | 'ar']}</h1>
//         <p className="mb-4">
//           {content.description[language as 'en' | 'ar']}
//           <br />
//           <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-2" /> {content.note[language as 'en' | 'ar']}
//         </p>
//         <div className="mb-4">
//           <QRCode value={qrValue} size={256} level="H" />
//         </div>
//         <div className="bg-[var(--input-background-color)] p-4 rounded-md shadow-md text-center">
//           <p>{content.referralLink[language as 'en' | 'ar']}</p>
//           <p className="text-blue-500 break-all">{affiliateLink}</p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AffiliateBarcode;














// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import QRCode from 'qrcode.react';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrophy } from '@fortawesome/free-solid-svg-icons';
// import { useLanguage } from '@/contexts/LanguageContext';

// const AffiliateBarcode: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [affiliateLink, setAffiliateLink] = useState<string>('');
//   const [qrValue, setQrValue] = useState<string>('');

//   useEffect(() => {
//     if (user) {
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (userEmail) {
//         const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
//         const uniqueAffiliateLink = `${baseUrl}/affiliate-signup?ref=${encodeURIComponent(userEmail)}`;
//         setAffiliateLink(uniqueAffiliateLink);
//         setQrValue(uniqueAffiliateLink);
//       }
//     }
//   }, [user]);

//   if (!user) {
//     return <LoadingSpinner />;
//   }

//   const content = {
//     title: {
//       en: 'Captain El Asyuty Program',
//       ar: 'برنامج الكابتن الأسيوطي',
//     },
//     description: {
//       en: 'Share this QR code or link to invite others to sign up. You will earn points for each referral.',
//       ar: 'شارك هذا الرمز أو الرابط لدعوة الآخرين للتسجيل. ستربح نقاطًا لكل إحالة.',
//     },
//     note: {
//       en: 'You can win a free month of training',
//       ar: 'يمكنك الفوز بشهر تدريب مجاني',
//     },
//     referralLink: {
//       en: 'Your referral link:',
//       ar: 'رابط الإحالة الخاص بك:',
//     },
//   };

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background-color)] text-[var(--text-color)] p-6">
//         <h1 className="text-2xl font-bold mb-4">
//           {content.title[language as 'en' | 'ar']}
//         </h1>
//         <p className="mb-4">
//           {content.description[language as 'en' | 'ar']}
//           <br />
//           <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-2" />
//           {content.note[language as 'en' | 'ar']}
//         </p>
//         <div className="mb-4">
//           <QRCode value={qrValue} size={256} level="H" />
//         </div>
//         <div className="bg-[var(--input-background-color)] p-4 rounded-md shadow-md text-center">
//           <p>{content.referralLink[language as 'en' | 'ar']}</p>
//           <p className="text-blue-500 break-all">{affiliateLink}</p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AffiliateBarcode;













// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import QRCode from 'qrcode.react';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrophy } from '@fortawesome/free-solid-svg-icons';
// import { useLanguage } from '@/contexts/LanguageContext';

// const AffiliateBarcode: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [affiliateLink, setAffiliateLink] = useState<string>('');
//   const [qrValue, setQrValue] = useState<string>('');

//   useEffect(() => {
//     if (user) {
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (userEmail) {
//         // Use the base URL from the environment variables, defaulting to localhost for development
//         const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
//         const uniqueAffiliateLink = `${baseUrl}/signup?referralCode=${encodeURIComponent(userEmail)}`;
//         setAffiliateLink(uniqueAffiliateLink);
//         setQrValue(uniqueAffiliateLink);
//       }
//     }
//   }, [user]);

//   if (!user) {
//     return <LoadingSpinner />;
//   }

//   const content = {
//     title: {
//       en: 'Captain El Asyuty Program',
//       ar: 'برنامج الكابتن الأسيوطي',
//     },
//     description: {
//       en: 'Share this QR code or link to invite others to sign up. You will earn points for each referral.',
//       ar: 'شارك هذا الرمز أو الرابط لدعوة الآخرين للتسجيل. ستربح نقاطًا لكل إحالة.',
//     },
//     note: {
//       en: 'You can win a free month of training',
//       ar: 'يمكنك الفوز بشهر تدريب مجاني',
//     },
//     referralLink: {
//       en: 'Your referral link:',
//       ar: 'رابط الإحالة الخاص بك:',
//     },
//   };

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background-color)] text-[var(--text-color)] p-6">
//         <h1 className="text-2xl font-bold mb-4">
//           {content.title[language as 'en' | 'ar']}
//         </h1>
//         <p className="mb-4">
//           {content.description[language as 'en' | 'ar']}
//           <br />
//           <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-2" />
//           {content.note[language as 'en' | 'ar']}
//         </p>
//         <div className="mb-4">
//           <QRCode value={qrValue} size={256} level="H" />
//         </div>
//         <div className="bg-[var(--input-background-color)] p-4 rounded-md shadow-md text-center">
//           <p>{content.referralLink[language as 'en' | 'ar']}</p>
//           <p className="text-blue-500 break-all">{affiliateLink}</p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AffiliateBarcode;








// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import QRCode from 'qrcode.react';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrophy } from '@fortawesome/free-solid-svg-icons';
// import { useLanguage } from '@/contexts/LanguageContext';

// const AffiliateBarcode: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [affiliateLink, setAffiliateLink] = useState<string>('');
//   const [qrValue, setQrValue] = useState<string>('');
//   const [points, setPoints] = useState<number | null>(null); // Track points

//   useEffect(() => {
//     if (user) {
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (userEmail) {
//         const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
//         const uniqueAffiliateLink = `${baseUrl}/signup?referralCode=${encodeURIComponent(userEmail)}`;
//         setAffiliateLink(uniqueAffiliateLink);
//         setQrValue(uniqueAffiliateLink);

//         // Fetch the points of the user
//         fetch(`/api/points?email=${encodeURIComponent(userEmail)}`)
//           .then((response) => response.json())
//           .then((data) => setPoints(data.points))
//           .catch((error) => console.error('Error fetching points:', error));
//       }
//     }
//   }, [user]);

//   if (!user) {
//     return <LoadingSpinner />;
//   }

//   const content = {
//     title: {
//       en: 'Captain El Asyuty Program',
//       ar: 'برنامج الكابتن الأسيوطي',
//     },
//     description: {
//       en: 'Share this QR code or link to invite others to sign up. You will earn points for each referral.',
//       ar: 'شارك هذا الرمز أو الرابط لدعوة الآخرين للتسجيل. ستربح نقاطًا لكل إحالة.',
//     },
//     note: {
//       en: 'You can win a free month of training',
//       ar: 'يمكنك الفوز بشهر تدريب مجاني',
//     },
//     referralLink: {
//       en: 'Your referral link:',
//       ar: 'رابط الإحالة الخاص بك:',
//     },
//   };

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background-color)] text-[var(--text-color)] p-6 border-b text-left text-lg font-bold">
//         <h1 className="text-2xl font-bold mb-4 py-2 px-4 border-b text-left text-xl font-bold">
//           {content.title[language as 'en' | 'ar']}
//         </h1>
//         <p className="mb-4">
//           {content.description[language as 'en' | 'ar']}
//           <br />
//           <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-2" />
//           {content.note[language as 'en' | 'ar']}
//         </p>
//         <div className="mb-4">
//           <QRCode value={qrValue} size={256} level="H" />
//         </div>
//         <div className="bg-[var(--input-background-color)] p-4 rounded-md shadow-md text-center">
//           <p>{content.referralLink[language as 'en' | 'ar']}</p>
//           <p className="text-blue-500 break-all">{affiliateLink}</p>
//         </div>
//         <div className="mt-4">
//           <h2>{language === 'en' ? 'Your Points:' : 'نقاطك:'}</h2>
//           <p className="text-2xl">{points !== null ? points : 'Loading...'}</p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AffiliateBarcode;














import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import QRCode from 'qrcode.react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCopy } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // import the toastify styles

const AffiliateBarcode: React.FC = () => {
  const { user } = useAuth();
  const { language } = useLanguage();
  const [affiliateLink, setAffiliateLink] = useState<string>('');
  const [qrValue, setQrValue] = useState<string>('');
  const [points, setPoints] = useState<number | null>(null); // Track points

  useEffect(() => {
    if (user) {
      const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
      if (userEmail) {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const uniqueAffiliateLink = `${baseUrl}/signup?referralCode=${encodeURIComponent(userEmail)}`;
        setAffiliateLink(uniqueAffiliateLink);
        setQrValue(uniqueAffiliateLink);

        // Fetch the points of the user
        fetch(`/api/points?email=${encodeURIComponent(userEmail)}`)
          .then((response) => response.json())
          .then((data) => setPoints(data.points))
          .catch((error) => console.error('Error fetching points:', error));
      }
    }
  }, [user]);

  const copyToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      // Navigator clipboard API available and secure context (HTTPS)
      navigator.clipboard.writeText(affiliateLink).then(() => {
        toast.success(language === 'en' ? 'Link copied to clipboard!' : 'تم نسخ الرابط بنجاح!');
      }).catch((error) => {
        toast.error(language === 'en' ? 'Failed to copy link' : 'فشل في نسخ الرابط');
        console.error('Copy failed', error);
      });
    } else {
      // Fallback method for browsers without clipboard API support
      const textArea = document.createElement('textarea');
      textArea.value = affiliateLink;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
  
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          toast.success(language === 'en' ? 'Link copied to clipboard!' : 'تم نسخ الرابط بنجاح!');
        } else {
          throw new Error('Failed to copy');
        }
      } catch (error) {
        toast.error(language === 'en' ? 'Failed to copy link' : 'فشل في نسخ الرابط');
        console.error('Fallback: Copy failed', error);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };
  

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
    },
    copyButton: {
      en: 'Copy Link',
      ar: 'نسخ الرابط',
    },
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background-color)] text-[var(--text-color)] p-6 border-b text-left text-lg font-bold">
        <h1 className="text-2xl font-bold mb-4 py-2 px-4 border-b text-left text-xl font-bold">
          {content.title[language as 'en' | 'ar']}
        </h1>
        <p className="mb-4">
          {content.description[language as 'en' | 'ar']}
          <br />
          <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-2" />
          {content.note[language as 'en' | 'ar']}
        </p>
        <div className="mb-4">
          <QRCode value={qrValue} size={256} level="H" />
        </div>
        <div className="bg-[var(--input-background-color)] p-4 rounded-md shadow-md text-center">
          <p>{content.referralLink[language as 'en' | 'ar']}</p>
          <p className="text-blue-500 break-all">{affiliateLink}</p>
        </div>
        <button
          onClick={copyToClipboard}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faCopy} />
          <span>{content.copyButton[language as 'en' | 'ar']}</span>
        </button>
        <div className="mt-4">
          <h2>{language === 'en' ? 'Your Points:' : 'نقاطك:'}</h2>
          <p className="text-2xl">{points !== null ? points : 'Loading...'}</p>
        </div>
        {/* Toast container to show the snackbar */}
        <ToastContainer />
      </div>
    </DashboardLayout>
  );
};

export default AffiliateBarcode;

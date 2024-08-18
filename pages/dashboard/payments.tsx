









// components/PaymentsPage.tsx
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

const PaymentsPage: React.FC = () => {
  const { language } = useLanguage();
  const [hasPaid, setHasPaid] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const isSignedIn = !!user;

  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (!user) return;

      try {
        const response = await fetch('/api/checkPaymentStatus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user.primaryEmailAddress?.emailAddress || user.email }),
        });

        if (response.ok) {
          const data = await response.json();
          setHasPaid(data.hasPaid);
        } else {
          throw new Error('Failed to check payment status');
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isSignedIn) {
      checkPaymentStatus();
    }
  }, [isSignedIn, user]);

  if (!isSignedIn) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-[var(--text-color)]">{language === 'en' ? 'Please sign in to view payment information.' : 'يرجى تسجيل الدخول لعرض معلومات الدفع.'}</p>
        </div>
      </DashboardLayout>
    );
  }

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center min-h-screen">
        <div className={`bg-[var(--background-color)] text-[var(--text-color)] p-4 rounded-lg shadow-md w-full max-w-lg ${hasPaid ? 'border-green-500' : 'border-red-500'}`}>
          {hasPaid ? (
            <>
              <h1 className="text-2xl text-center font-lg italic font-serif mb-4 text-green-500">{language === 'en' ? 'Payment Confirmed!' : 'تم تأكيد الدفع!'}</h1>
              <p className="text-center mb-4 text-[var(--text-color)]">{language === 'en' ? 'Thank you for your payment. You can now access your exercises.' : 'شكرًا لك على الدفع. يمكنك الآن الوصول إلى تمارينك.'}</p>
            </>
          ) : (
            <>
              <h1 className="text-2xl text-center font-lg italic font-serif mb-4 text-red-500">{language === 'en' ? 'Payments Required!' : 'مطلوب الدفع!'}</h1>
              <p className="text-center mb-4 text-[var(--text-color)]">{language === 'en' ? 'To access your exercises, please complete the payment process.' : 'للوصول إلى تمارينك، يرجى إكمال عملية الدفع.'}</p>
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-[var(--text-color)]">{language === 'en' ? 'Please choose your training plan and pay on InstaPay/Vodafone cash via this number:' : 'يرجى اختيار خطة التدريب الخاصة بك والدفع عبر InstaPay/Vodafone cash عبر هذا الرقم:'}</p>
                <p className="text-xl font-bold mt-2 text-[var(--text-color)]">01151784998</p>
              </div>
              <div className="py-6 mt-6">
                <h2 className="text-center text-3xl font-bold mb-6 text-[var(--text-color)]">{language === 'en' ? 'Reasonable and Flexible Plans' : 'خطط معقولة ومرنة'}</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="border-2 border-[var(--border-color)] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-[var(--background-color)]">
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-color)]">{language === 'en' ? 'Monthly' : 'شهري'}</h3>
                    <p className="text-2xl font-bold text-blue-500 text-center">499 {language === 'en' ? 'EGP / month' : 'جنيه / شهر'}</p>
                    <div className="mt-2 text-center">
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Weekly Exercise Updates' : 'تحديثات التمرين أسبوعياً'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Nutrition Plan' : 'خطة تغذية'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Basic Support' : 'مساعدة أساسية'}</p>
                    </div>
                  </div>
                  <div className="border-2 border-[var(--border-color)] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-[var(--background-color)]">
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-color)]">{language === 'en' ? 'Yearly' : 'سنوي'}</h3>
                    <p className="text-2xl font-bold text-green-500 text-center">3999 {language === 'en' ? 'EGP / year' : 'جنيه / سنة'}</p>
                    <div className="mt-2 text-center">
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Weekly Exercise Updates' : 'تحديثات التمرين أسبوعياً'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Nutrition Plan' : 'خطة تغذية'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Priority Support' : 'مساعدة ذات أولوية'}</p>
                    </div>
                  </div>
                  <div className="border-2 border-[var(--border-color)] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-[var(--background-color)]">
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-color)]">{language === 'en' ? 'Video Calls' : 'مكالمات فيديو'}</h3>
                    <p className="text-2xl font-bold text-red-500 text-center">999 {language === 'en' ? 'EGP / month' : 'جنيه / شهر'}</p>
                    <div className="mt-2 text-center">
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Daily Exercise Updates' : 'تحديثات التمرين يومياً'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Nutrition Plan' : 'خطة تغذية'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Personal Support' : 'مساعدة شخصية'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentsPage;

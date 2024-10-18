









// components/PaymentsPage.tsx
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { format, differenceInDays } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faCalendarCheck, faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const PaymentsPage: React.FC = () => {
  const { language } = useLanguage();
  const [hasPaid, setHasPaid] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const isSignedIn = !!user;
  const [paymentDate, setPaymentDate] = useState<string | null>(null);
  const [registrationEndDate, setRegistrationEndDate] = useState<string | null>(null);
  const [monthsRegistered, setMonthsRegistered] = useState<number | null>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [todayDate, setTodayDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
  const router = useRouter();

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
          setPaymentDate(data.paymentDate);
          setRegistrationEndDate(data.registrationEndDate);
          setMonthsRegistered(data.monthsRegistered);
          const today = new Date();
          const endDate = new Date(data.registrationEndDate);
          const calculatedDaysLeft = differenceInDays(endDate, today);
          setDaysLeft(calculatedDaysLeft);

          const hasVisited = sessionStorage.getItem('hasVisitedClientInfoPage');

          if (data.hasPaid && !hasVisited) {
            router.push('/dashboard/client-info');
  
            // Update visit status in the backend
            await fetch('/api/updateVisitStatus', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: user.primaryEmailAddress?.emailAddress || user.email }),
            });

            // Store in sessionStorage to prevent future redirects in this session
            sessionStorage.setItem('hasVisitedClientInfoPage', 'true');
          }
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
              <div className="text-center mt-6">
                <p className="font-bold text-[var(--text-color)] flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-[var(--text-color)]" />
                  {language === 'en' ? 'Payment Date' : 'تاريخ الدفع'}: {paymentDate}
                </p>
                <p className="font-bold text-[var(--text-color)] flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faCalendarCheck} className="text-[var(--text-color)]" />
                  {language === 'en' ? 'Registration End Date' : 'تاريخ انتهاء التسجيل'}: {registrationEndDate}
                </p>
                <p className="font-bold text-[var(--text-color)] flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faCalendarTimes} className="text-[var(--text-color)]" />
                  {language === 'en' ? 'Months Registered' : 'الأشهر المسجلة'}: {monthsRegistered}
                </p>
                <p className="font-bold text-[var(--text-color)] flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="text-[var(--text-color)]" />
                  {language === 'en' ? 'Days Left' : 'الأيام المتبقية'}: {daysLeft}
                </p>
                <p className="font-bold text-[var(--text-color)]">
                  {language === 'en' ? "Today's Date" : 'تاريخ اليوم'}: {todayDate}
                </p>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl text-center font-lg italic font-serif mb-4 text-red-500">{language === 'en' ? 'Payments Required!' : 'مطلوب الدفع!'}</h1>
              <p className="text-center mb-4 text-[var(--text-color)]">{language === 'en' ? 'To access your exercises, please complete the payment process.' : 'للوصول إلى تمارينك، يرجى إكمال عملية الدفع.'}</p>
              <div className="flex justify-center space-x-6 mt-4">
                {/* InstaPay Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img src="/instapay.png" alt="InstaPay" className="w-full h-full object-cover" />
                </div>
                {/* Vodafone Cash Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img src="/Vodafone-Cash-Logo.png" alt="Vodafone Cash" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-[var(--text-color)]">{language === 'en' ? 'Please choose your training plan and pay on InstaPay/Vodafone cash via this number:' : 'يرجى اختيار خطة التدريب الخاصة بك والدفع عبر InstaPay/Vodafone cash عبر هذا الرقم:'}</p>
                <p className="text-xl font-semibold mt-2 text-[var(--text-color)] italic">{language === 'en' ? 'InstaPay:' : ':انستا باى '} </p>
                <p className="text-xl font-bold mt-2 text-[var(--text-color)]">abdo01158171@instapay</p>
                <p className="text-xl font-semibold mt-2 text-[var(--text-color)] italic">{language === 'en' ? 'Vodafone Cash:' : ':فودافون كاش'} </p>
                <p className="text-xl font-bold mt-2 text-[var(--text-color)]">01070885502 {language === 'en' ? 'Vodafone Cash' : 'فودافون كاش '} </p>
              </div>
              <div className="py-6 mt-6">
                <h2 className="text-center text-3xl font-bold mb-6 text-[var(--text-color)]">{language === 'en' ? 'Reasonable and Flexible Plans' : 'خطط معقولة ومرنة'}</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="border-2 border-[var(--border-color)] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-[var(--background-color)]">
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-color)]">{language === 'en' ? '2 Months' : '2 شهر'}</h3>
                    <p className="text-2xl font-bold text-blue-500 text-center">1000 {language === 'en' ? 'EGP / 2 month' : 'جنيه / 2 شهر'}</p>
                    <div className="mt-2 text-center">
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Weekly Exercise Updates' : 'تحديثات التمرين أسبوعياً'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Nutrition Plan' : 'خطة تغذية'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Basic Support' : 'مساعدة أساسية'}</p>
                    </div>
                  </div>
                  </div>
                  <div className="border-2 border-[var(--border-color)] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-[var(--background-color)]">
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-color)]">{language === 'en' ? '3 Monthly' : '3 شهر'}</h3>
                    <p className="text-2xl font-bold text-red-500 text-center">1300 {language === 'en' ? 'EGP / month' : 'جنيه / شهر'}</p>
                    <div className="mt-2 text-center">
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Daily Exercise Updates' : 'تحديثات التمرين يومياً'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Nutrition Plan' : 'خطة تغذية'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Personal Support' : 'مساعدة شخصية'}</p>
                    </div>
                  </div>
                  <div className="border-2 border-[var(--border-color)] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-[var(--background-color)]">
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-color)]">{language === 'en' ? '6 Months' : '6 شهور'}</h3>
                    <p className="text-2xl font-bold text-green-500 text-center">2400 {language === 'en' ? 'EGP / year' : 'جنيه / سنة'}</p>
                    <div className="mt-2 text-center">
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Weekly Exercise Updates' : 'تحديثات التمرين أسبوعياً'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Nutrition Plan' : 'خطة تغذية'}</p>
                      <p className="font-bold text-[var(--text-color)]">{language === 'en' ? 'Priority Support' : 'مساعدة ذات أولوية'}</p>
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

// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faCheck, faSignOutAlt, faGift, faTimes } from '@fortawesome/free-solid-svg-icons';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert, { AlertProps } from '@mui/material/Alert';

// interface SettingsModalProps {
//   onClose: () => void;
// }

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [surprise, setSurprise] = useState<string | null>(null);
//   const { signOut } = useAuth();
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info'>('info');
//   const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
//   const [isSignOutConfirmationOpen, setSignOutConfirmationOpen] = useState(false);

//   const handlePasswordChange = async () => {
//     if (newPassword !== confirmPassword) {
//       setSnackbarMessage('Passwords do not match');
//       setSnackbarSeverity('error');
//       setOpenSnackbar(true);
//       return;
//     }

//     try {
//       const token = localStorage.getItem('auth-token');
//       if (!token) {
//         setSnackbarMessage('Unauthorized: No token found');
//         setSnackbarSeverity('error');
//         setOpenSnackbar(true);
//         signOut(); // Log out the user if the token is missing
//         return;
//       }

//       const response = await fetch('/api/changePassword', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ newPassword }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to change password');
//       }

//       setSnackbarMessage('Password changed successfully');
//       setSnackbarSeverity('success');
//       setOpenSnackbar(true);
//       setTimeout(() => {
//         signOut(); // Automatically sign out the user after changing the password
//       }, 2000); // Wait 2 seconds before signing out
//     } catch (error) {
//       console.error('Error changing password:', error);
//       setSnackbarMessage('Failed to change password');
//       setSnackbarSeverity('error');
//       setOpenSnackbar(true);
//     }
//   };

//   const handleSurpriseMe = () => {
//     const quotes = [
//       'Keep pushing your limits!',
//       'Believe in yourself!',
//       'Success is not the key to happiness. Happiness is the key to success.',
//       'Don’t stop when you’re tired. Stop when you’re done.',
//     ];
//     setSurprise(quotes[Math.floor(Math.random() * quotes.length)]);
//   };

//   const handleSignOut = () => {
//     setSignOutConfirmationOpen(true);
//   };

//   const confirmSignOut = () => {
//     signOut();
//   };

//   const closeSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   const confirmPasswordChange = () => {
//     setIsConfirmationOpen(true);
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-[var(--background-color)] p-6 rounded-lg shadow-lg w-full max-w-md">
//         <div className="flex justify-between mb-2">
//           <h2 className="text-lg font-semibold">Settings</h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
//             <FontAwesomeIcon icon={faTimes} size="lg" />
//           </button>
//         </div>

//         {/* Change Password Section */}
//         <div className="space-y-4">
//             <h2 className='font-serif italic'>
//               Change password
//             </h2>
//           <div className="relative">
//             <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
//             <input
//               type="password"
//               placeholder="New"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               required
//             />
//           </div>
//           <div className="relative">
//             <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
//             <input
//               type="password"
//               placeholder="Confirm"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               required
//             />
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="button"
//               onClick={confirmPasswordChange}
//               className="bg-blue-500 text-white py-2 px-4 rounded-full shadow hover:bg-blue-600 transition"
//             >
//               <FontAwesomeIcon icon={faCheck} />
//             </button>
//           </div>
//         </div>

//         {/* Sign Out Section */}
//         <div className="mt-6">
//           <button
//             onClick={handleSignOut}
//             className="bg-red-500 text-white py-2 px-4 rounded-full shadow w-full flex justify-center hover:bg-red-600 transition"
//           >
//             <FontAwesomeIcon icon={faSignOutAlt} />
//           </button>
//         </div>

//         {/* Surprise Me Section */}
//         <div className="mt-6">
//           <button
//             onClick={handleSurpriseMe}
//             className="bg-green-500 text-white py-2 px-4 rounded-full shadow w-full flex justify-center hover:bg-green-600 transition"
//           >
//             <FontAwesomeIcon icon={faGift} />
//           </button>
//           {surprise && <p className="mt-4 text-center">{surprise}</p>}
//         </div>

//         {/* Snackbar for messages */}
//         <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={closeSnackbar}>
//           <Alert onClose={closeSnackbar} severity={snackbarSeverity}>
//             {snackbarMessage}
//           </Alert>
//         </Snackbar>

//         {/* Confirmation dialogs */}
//         {isConfirmationOpen && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
//               <h3 className="text-lg font-semibold mb-4">Change Password?</h3>
//               <p className="mb-4">Are you sure you want to change the password?</p>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   className="bg-gray-500 text-white px-4 py-2 rounded-md"
//                   onClick={() => setIsConfirmationOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                   onClick={() => {
//                     handlePasswordChange();
//                     setIsConfirmationOpen(false);
//                   }}
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {isSignOutConfirmationOpen && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
//               <h3 className="text-lg font-semibold mb-4">Sign Out?</h3>
//               <p className="mb-4">Are you sure you want to sign out?</p>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   className="bg-gray-500 text-white px-4 py-2 rounded-md"
//                   onClick={() => setSignOutConfirmationOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded-md"
//                   onClick={confirmSignOut}
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SettingsModal;













import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheck, faSignOutAlt, faGift, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useLanguage } from '@/contexts/LanguageContext'; // Import the Language context

interface SettingsModalProps {
  onClose: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [surprise, setSurprise] = useState<string | null>(null);
  const { signOut } = useAuth();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info'>('info');
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isSignOutConfirmationOpen, setSignOutConfirmationOpen] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false); // State for showing/hiding the password form

  const { language, toggleLanguage } = useLanguage(); // Using the language context

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setSnackbarMessage('Passwords do not match');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }
  
    try {
      const token = localStorage.getItem('auth-token'); // Fetch token from localStorage
      if (!token) {
        setSnackbarMessage('Unauthorized: No token found');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        signOut(); // Log out the user if the token is missing
        return;
      }
  
      const response = await fetch('/api/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Add the Bearer token
        },
        body: JSON.stringify({ newPassword }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to change password');
      }
  
      setSnackbarMessage('Password changed successfully');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setTimeout(() => {
        signOut(); // Automatically sign out the user after changing the password
      }, 2000); // Wait 2 seconds before signing out
    } catch (error) {
      console.error('Error changing password:', error);
      setSnackbarMessage('Failed to change password');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };
  

  const handleSurpriseMe = () => {
    const quotes = language === 'en'
      ? ['Keep pushing your limits!', 'Believe in yourself!', 'Success is the key to happiness.', 'Don’t stop when you’re tired.']
      : ['استمر في دفع حدودك!', 'ثق بنفسك!', 'النجاح هو مفتاح السعادة.', 'لا تتوقف عندما تكون متعبا.'];
    setSurprise(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const handleSignOut = () => {
    setSignOutConfirmationOpen(true);
  };

  const confirmSignOut = () => {
    signOut();
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  const confirmPasswordChange = () => {
    setIsConfirmationOpen(true);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[var(--background-color)] p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-2">
          <h2 className="text-lg font-semibold">{language === 'en' ? 'Settings' : 'الإعدادات'}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        {/* Toggle Password Form */}
        <div className="space-y-4">
          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="w-full flex justify-between bg-blue-500 text-white py-2 px-4 rounded-full shadow hover:bg-blue-600 transition"
          >
            <span>{language === 'en' ? 'Change Password' : 'تغيير كلمة المرور'}</span>
            <FontAwesomeIcon icon={showPasswordForm ? faChevronUp : faChevronDown} />
          </button>

          {/* Conditional rendering of password form */}
          {showPasswordForm && (
            <>
              <div className="relative mt-4">
                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder={language === 'en' ? 'New Password' : 'كلمة مرور جديدة'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder={language === 'en' ? 'Confirm Password' : 'تأكيد كلمة المرور'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={confirmPasswordChange}
                  className="bg-blue-500 text-white py-2 px-4 rounded-full shadow hover:bg-blue-600 transition"
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Sign Out Section */}
        <div className="mt-6">
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white py-2 px-4 rounded-full shadow w-full flex justify-center hover:bg-red-600 transition"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>

        {/* Surprise Me Section */}
        <div className="mt-6">
          <button
            onClick={handleSurpriseMe}
            className="bg-green-500 text-white py-2 px-4 rounded-full shadow w-full flex justify-center hover:bg-green-600 transition"
          >
            <FontAwesomeIcon icon={faGift} />
          </button>
          {surprise && <p className="mt-4 text-center">{surprise}</p>}
        </div>

        {/* Snackbar for messages */}
        <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={closeSnackbar}>
          <Alert onClose={closeSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>

        {/* Confirmation dialogs */}
        {isConfirmationOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[var(--background-color)] p-6 rounded-lg shadow-lg w-full max-w-sm">
              <h3 className="text-lg font-semibold mb-4">{language === 'en' ? 'Change Password?' : 'تغيير كلمة المرور؟'}</h3>
              <p className="mb-4">{language === 'en' ? 'Are you sure you want to change the password?' : 'هل أنت متأكد من تغيير كلمة المرور؟'}</p>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setIsConfirmationOpen(false)}
                >
                  {language === 'en' ? 'Cancel' : 'إلغاء'}
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    handlePasswordChange();
                    setIsConfirmationOpen(false);
                  }}
                >
                  {language === 'en' ? 'Confirm' : 'تأكيد'}
                </button>
              </div>
            </div>
          </div>
        )}

        {isSignOutConfirmationOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[var(--background-color)] p-6 rounded-lg shadow-lg w-full max-w-sm">
              <h3 className="text-lg font-semibold mb-4">{language === 'en' ? 'Sign Out?' : 'تسجيل الخروج؟'}</h3>
              <p className="mb-4">{language === 'en' ? 'Are you sure you want to sign out?' : 'هل أنت متأكد من تسجيل الخروج؟'}</p>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setSignOutConfirmationOpen(false)}
                >
                  {language === 'en' ? 'Cancel' : 'إلغاء'}
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={confirmSignOut}
                >
                  {language === 'en' ? 'Confirm' : 'تأكيد'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsModal;















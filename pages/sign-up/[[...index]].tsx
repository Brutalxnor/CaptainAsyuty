
// //pages/sign-up/[[...index]].tsx

// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { SignUp, useUser } from '@clerk/nextjs';
// import LoadingSpinner from '@/components/LoadingSpinner';

// const SignUpPage = () => {
//   const router = useRouter();
//   const { isSignedIn, user } = useUser();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Set a timeout for 2 seconds to show the loading spinner

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const addEmailToDB = async (email: string) => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error adding email to database');
//         }

//         const data = await response.json();
//         console.log(data.message);
//       } catch (error) {
//         console.error('Error adding email:', error);
//       }
//     };

//     if (isSignedIn && user) {
//       const userEmail = user.primaryEmailAddress?.emailAddress;
//       if (userEmail) {
//         addEmailToDB(userEmail).then(() => {
//           router.push('/dashboard');
//         });
//       }
//     }
//   }, [isSignedIn, user, router]);

//   const handleBackToHome = () => {
//     router.push('/');
//   };

//   if (isSignedIn) {
//     return null;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <SignUp />
//       )}
//       <button
//         onClick={handleBackToHome}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default SignUpPage;






















// // pages/sign-up.tsx

// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import LoadingSpinner from '@/components/LoadingSpinner';

// const SignUpPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const { signUp } = useAuth();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await signUp(email, password);
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Error signing up:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <form onSubmit={handleSubmit} className="w-full max-w-sm">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="mb-4 w-full p-2 border border-gray-300 rounded"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="mb-4 w-full p-2 border border-gray-300 rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded"
//           >
//             Sign Up
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SignUpPage;












// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import LoadingSpinner from '@/components/LoadingSpinner';

// const SignUpPage = () => {
//   const [username, setUsername] = useState(''); 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const { signUp } = useAuth();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await signUp(username, email, password);
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Error signing up:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleBackToLanding = () => {
//     router.push('/'); // Redirect to landing page
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <>
//           <form onSubmit={handleSubmit} className="w-full max-w-sm">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-2 rounded mb-4"
//             >
//               Sign Up
//             </button>
//           </form>
//           <button
//             type="button"
//             onClick={handleBackToLanding}
//             className="mt-4 text-blue-500 hover:underline"
//           >
//             Back to Home Page
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default SignUpPage;





// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import ReCAPTCHA from "react-google-recaptcha";

// const SignUpPage = () => {
//   const [username, setUsername] = useState(''); 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [referralCode, setReferralCode] = useState(''); // For referral code
//   const [isLoading, setIsLoading] = useState(false);
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const router = useRouter();
//   const { signUp } = useAuth();

//   const handleCaptcha = (value: string | null) => {
//     setCaptchaVerified(!!value);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!captchaVerified) {
//       alert('Please verify you are not a robot.');
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await signUp(username, email, password, referralCode); // Assuming signUp function handles referral code
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Error signing up:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleBackToLanding = () => {
//     router.push('/'); // Redirect to landing page
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <>
//           <form onSubmit={handleSubmit} className="w-full max-w-sm">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="text"
//               value={referralCode}
//               onChange={(e) => setReferralCode(e.target.value)}
//               placeholder="Referral Code (optional)"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//             />
//             <ReCAPTCHA
//               sitekey="YOUR_RECAPTCHA_SITE_KEY"
//               onChange={handleCaptcha}
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-2 rounded mb-4"
//               disabled={!captchaVerified}
//             >
//               Sign Up
//             </button>
//           </form>
//           <button
//             type="button"
//             onClick={handleBackToLanding}
//             className="mt-4 text-blue-500 hover:underline"
//           >
//             Back to Home Page
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default SignUpPage;








// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import ReCAPTCHA from "react-google-recaptcha";

// const SignUpPage = () => {
//   const [username, setUsername] = useState(''); 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [referralCode, setReferralCode] = useState(''); // For referral code
//   const [isLoading, setIsLoading] = useState(false);
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const router = useRouter();
//   const { signUp } = useAuth();

//   const handleCaptcha = (value: string | null) => {
//     setCaptchaVerified(!!value);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!captchaVerified) {
//       alert('Please verify you are not a robot.');
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await signUp(username, email, password, referralCode); // Assuming signUp function handles referral code
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Error signing up:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleBackToLanding = () => {
//     router.push('/'); // Redirect to landing page
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <>
//           <form onSubmit={handleSubmit} className="w-full max-w-sm">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="text"
//               value={referralCode}
//               onChange={(e) => setReferralCode(e.target.value)}
//               placeholder="Referral Code (optional)"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//             />
//             <ReCAPTCHA
//               sitekey="YOUR_RECAPTCHA_SITE_KEY"
//               onChange={handleCaptcha}
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-2 rounded mb-4"
//               disabled={!captchaVerified}
//             >
//               Sign Up
//             </button>
//           </form>
//           <button
//             type="button"
//             onClick={handleBackToLanding}
//             className="mt-4 text-blue-500 hover:underline"
//           >
//             Back to Home Page
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default SignUpPage;








// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

  
//   const SignUpPage = () => {
//     const [username, setUsername] = useState(''); 
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [referralCode, setReferralCode] = useState(''); // For referral code
//     const [isLoading, setIsLoading] = useState(false);
//     const [isPasswordVisible, setIsPasswordVisible] = useState(false); // For toggling password visibility

//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const router = useRouter();
//   const { signUp } = useAuth();

//   const handleCaptcha = (value: string | null) => {
//     setCaptchaVerified(!!value);
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible((prevState) => !prevState);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!captchaVerified) {
//       toast.error('Please verify you are not a robot.', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await signUp(username, email, password, referralCode); // Assuming signUp handles referral code
//       toast.success('Successfully signed up!', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Error signing up:', error);
//       toast.error('Error signing up. Please try again.', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });

//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleBackToLanding = () => {
//     router.push('/'); // Redirect to landing page
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <>
//           {/* Logo and Title */}
//           <div className="flex flex-col items-center mb-6">
//             <img 
//               src="/logo.png" // Update the path to your logo image
//               alt="Logo" 
//               className="w-20 h-20 rounded-full mb-4"
//             />
//             <h1 className="py-2 px-4 border-b text-left text-xl font-bold font-serif">
//               Captain Asyuty
//             </h1>
//           </div>

//           {/* Sign-up Form */}
//           <form onSubmit={handleSubmit} className="w-full max-w-sm">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <div className="relative mb-4">
//               <input
//                 type={isPasswordVisible ? 'text' : 'password'} // Toggle between 'password' and 'text'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
//               >
//                 <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
//               </button>
//             </div>

//             <input
//               type="text"
//               value={referralCode}
//               onChange={(e) => setReferralCode(e.target.value)}
//               placeholder="Referral Code (optional)"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//             />
//             <ReCAPTCHA
//               sitekey="YOUR_RECAPTCHA_SITE_KEY" // Add your reCAPTCHA site key here
//               onChange={handleCaptcha}
//               className="mb-4"

//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-2 rounded mb-4"
//               disabled={!captchaVerified}
//             >
//               Sign Up
//             </button>
//           </form>

//           {/* Back to Home Button */}
//           <button
//             type="button"
//             onClick={handleBackToLanding}
//             className="mt-4 text-blue-500 hover:underline flex items-center"
//           >
//             <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Home Page
//           </button>
//         </>
//       )}
//       {/* Toast container to show notifications */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUpPage;
















// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// // Dynamically import ReCAPTCHA to prevent SSR errors
// const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

// const SignUpPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [referralCode, setReferralCode] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [captchaVerified, setCaptchaVerified] = useState(false);

//   const router = useRouter();
//   const { signUp } = useAuth();

//   const handleCaptcha = (value: string | null) => {
//     setCaptchaVerified(!!value);
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible((prevState) => !prevState);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!captchaVerified) {
//       toast.error('Please verify you are not a robot.', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await signUp(username, email, password, referralCode);
//       toast.success('Successfully signed up!', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Error signing up:', error);
//       toast.error('Error signing up. Please try again.', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleBackToLanding = () => {
//     router.push('/');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <>
//           {/* Logo and Title */}
//           <div className="flex flex-col items-center mb-6">
//             <img src="/logo.png" alt="Logo" className="w-20 h-20 rounded-full mb-4" />
//             <h1 className="py-2 px-4 border-b text-left text-xl font-bold font-serif">
//               Captain Asyuty
//             </h1>
//           </div>

//           {/* Sign-up Form */}
//           <form onSubmit={handleSubmit} className="w-full max-w-sm">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <div className="relative mb-4">
//               <input
//                 type={isPasswordVisible ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
//               >
//                 <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
//               </button>
//             </div>

//             <input
//               type="text"
//               value={referralCode}
//               onChange={(e) => setReferralCode(e.target.value)}
//               placeholder="Referral Code (optional)"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//             />

//             <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleCaptcha} className="mb-4" />

//             <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-4" disabled={!captchaVerified}>
//               Sign Up
//             </button>
//           </form>

//           {/* Back to Home Button */}
//           <button type="button" onClick={handleBackToLanding} className="mt-4 text-blue-500 hover:underline flex items-center">
//             <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Home Page
//           </button>
//         </>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUpPage;











// import { useRouter } from 'next/router';
// import React, { useState, useEffect } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const SignUpPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [referralCode, setReferralCode] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const [isClient, setIsClient] = useState(false); // To check if the component is running on client-side
//   const router = useRouter();
//   const { signUp } = useAuth();

//   useEffect(() => {
//     setIsClient(typeof window !== 'undefined'); // Ensure this only runs in the browser
//   }, []);

//   const handleCaptcha = (value: string | null) => {
//     setCaptchaVerified(!!value);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!captchaVerified) {
//       toast.error('Please verify you are not a robot.');
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await signUp(username, email, password, referralCode);
//       toast.success('Successfully signed up!');
//       router.push('/dashboard');
//     } catch (error) {
//       toast.error('Error signing up. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <>
//           <div className="flex flex-col items-center mb-6">
//             <img
//               src="/logo.png"
//               alt="Logo"
//               className="w-20 h-20 rounded-full mb-4"
//             />
//             <h1 className="py-2 px-4 border-b text-left text-xl font-bold font-serif">
//               Captain Asyuty
//             </h1>
//           </div>

//           <form onSubmit={handleSubmit} className="w-full max-w-sm">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <div className="relative mb-4">
//               <input
//                 type={isPasswordVisible ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setIsPasswordVisible(!isPasswordVisible)}
//                 className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
//               >
//                 <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
//               </button>
//             </div>

//             <input
//               type="text"
//               value={referralCode}
//               onChange={(e) => setReferralCode(e.target.value)}
//               placeholder="Referral Code (optional)"
//               className="mb-4 w-full p-2 border border-gray-300 rounded"
//             />
//             {/* Render ReCAPTCHA only on the client side */}
//             {isClient && (
//               <ReCAPTCHA
//                 sitekey="YOUR_RECAPTCHA_SITE_KEY"
//                 onChange={handleCaptcha}
//                 className="mb-4"
//               />
//             )}
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-2 rounded"
//               disabled={!captchaVerified}
//             >
//               Sign Up
//             </button>
//           </form>

//           <button
//             type="button"
//             onClick={() => router.push('/')}
//             className="mt-4 text-blue-500 hover:underline flex items-center"
//           >
//             <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Home Page
//           </button>
//         </>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUpPage;











import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import dynamic from 'next/dynamic'; // Dynamically load components
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Dynamically import ReCAPTCHA since it requires the 'window' object
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const router = useRouter();
  const { signUp } = useAuth();

  const handleCaptcha = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      toast.error('Please verify you are not a robot.');
      return;
    }
    setIsLoading(true);
    try {
      await signUp(username, email, password, referralCode);
      toast.success('Successfully signed up!');
      router.push('/dashboard');
    } catch (error) {
      toast.error('Error signing up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLanding = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex flex-col items-center mb-6">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-20 h-20 rounded-full mb-4"
            />
            <h1 className="py-2 px-4 border-b text-left text-xl font-bold font-serif">
              Captain Asyuty
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <div className="relative mb-4">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
              >
                <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
              </button>
            </div>

            <input
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              placeholder="Referral Code (optional)"
              className="mb-4 w-full p-2 border border-gray-300 rounded"
            />
            
            {/* Render ReCAPTCHA only on the client side */}
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={handleCaptcha}
              className="mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
              disabled={!captchaVerified}
            >
              Sign Up
            </button>
          </form>

          <button
            type="button"
            onClick={handleBackToLanding}
            className="mt-4 text-blue-500 hover:underline flex items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Home Page
          </button>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;

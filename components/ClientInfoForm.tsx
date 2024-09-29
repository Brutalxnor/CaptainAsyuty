







import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ClientData } from '@/types/ClientData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '@/contexts/LanguageContext';

interface ClientInfoFormProps {
  email: string;
  clientData?: Partial<ClientData>;
}

const ClientInfoForm: React.FC<ClientInfoFormProps> = ({ email, clientData = {} }) => {
  const { language } = useLanguage();
  const [data, setData] = useState<Partial<ClientData>>({
    email: email,
    fullName: '',
    weight: '',
    height: '',
    age: '',
    fatWeight: '',
    muscleWeight: '',
    musclePercentage: '',
    fatPercentage: '',
    waistMeasurement: '',
    rightArmMeasurement: '',
    leftArmMeasurement: '',
    rightLegMeasurement: '',
    leftLegMeasurement: '',
    sugarCravings: '',
    previousInjuries: '',
    diabetes: '',
    bloodPressure: '',
    onlineTrainingExperience: '',
    trainingAge: '',
  });

  const [previousData, setPreviousData] = useState<Partial<ClientData>>({});
  const [frontImageFile, setFrontImageFile] = useState<File | null>(null);
  const [backImageFile, setBackImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (clientData) {
      setData((prevData) => ({ ...prevData, ...clientData }));
      setPreviousData({
        previousWeight: clientData.weight,
        previousHeight: clientData.height,
        previousAge: clientData.age,
        previousFatWeight: clientData.fatWeight,
        previousMuscleWeight: clientData.muscleWeight,
        previousMusclePercentage: clientData.musclePercentage,
        previousFatPercentage: clientData.fatPercentage,
        previousWaistMeasurement: clientData.waistMeasurement,
        previousRightArmMeasurement: clientData.rightArmMeasurement,
        previousLeftArmMeasurement: clientData.leftArmMeasurement,
        previousRightLegMeasurement: clientData.rightLegMeasurement,
        previousLeftLegMeasurement: clientData.leftLegMeasurement,
        previousSugarCravings: clientData.sugarCravings,
        previousInjuries: clientData.previousInjuries,
        previousDiabetes: clientData.diabetes,
        previousBloodPressure: clientData.bloodPressure,
        previousOnlineTrainingExperience: clientData.onlineTrainingExperience,
      });
    }
  }, [clientData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleToggleChange = (name: keyof ClientData, value: string) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'front' | 'back') => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (type === 'front') {
        setFrontImageFile(file);
      } else if (type === 'back') {
        setBackImageFile(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    const images: {
      front: { url: string; public_id: string } | null;
      back: { url: string; public_id: string } | null;
    } = {
      front: null,
      back: null,
    };
  
    if (frontImageFile || backImageFile) {
      const formData = new FormData();
      if (frontImageFile) {
        formData.append('front', frontImageFile);
      }
      if (backImageFile) {
        formData.append('back', backImageFile);
      }      

      try {
        const uploadResponse = await fetch('/api/upload-images', {
          method: 'POST',
          body: formData,
        });
      
        const uploadData = await uploadResponse.json(); // Read response body once
      
      if (!uploadResponse.ok) {
        console.error('Upload failed:', uploadData.message || uploadData.error || 'Unknown error');
        toast.error('Error uploading images: ' + (uploadData.error || uploadData.message || 'Unknown error'), {
          position: 'top-right',
          autoClose: 5000,
        });
        setIsLoading(false);
        return;
      }
      images.front = uploadData.front
        ? { url: uploadData.front.url, public_id: uploadData.front.public_id }
        : null;
      images.back = uploadData.back
        ? { url: uploadData.back.url, public_id: uploadData.back.public_id }
        : null;
    
      toast.success('Images uploaded successfully', {
        position: 'top-right',
        autoClose: 5000,
      });
    } catch (error: any) {
      console.error('Error uploading images:', error.message);
      toast.error('Error uploading images', {
        position: 'top-right',
        autoClose: 5000,
      });
      setIsLoading(false);
      return;
    }
  }


      // try {
      //   // Correct API endpoint
      //   const uploadResponse = await fetch('/api/upload-images', {
      //     method: 'POST',
      //     body: formData,
      //   });
  
      //   if (!uploadResponse.ok) {
      //     const errorData = await uploadResponse.json();
      //     console.error('Upload failed:', errorData.message);
      //   }
        
      //   const uploadData = await uploadResponse.json();
        
      //   // const uploadData = await uploadResponse.json();
      //   // images.front = uploadData.front ? { url: uploadData.front.url, public_id: uploadData.front.public_id } : null;
      //   // images.back = uploadData.back ? { url: uploadData.back.url, public_id: uploadData.back.public_id } : null;

      //   // After uploading images
      //   images.front = uploadData.front
      //     ? { url: uploadData.front.url, public_id: uploadData.front.public_id }
      //     : null;
      //   images.back = uploadData.back
      //     ? { url: uploadData.back.url, public_id: uploadData.back.public_id }
      //     : null;

  
      //   toast.success('Images uploaded successfully', {
      //     position: 'top-right',
      //     autoClose: 5000,
      //   });
      // } catch (error: any) {
      //   console.error('Error uploading images:', error.message);
      //   toast.error('Error uploading images', {
      //     position: 'top-right',
      //     autoClose: 5000,
      //   });
      //   setIsLoading(false);
      //   return;
      // }

    // const updatedData = {
    //   ...data,
    //   images,
    // };




    const updatedData = {
      ...data,
      images: [images.front?.url, images.back?.url].filter(Boolean), // Filters out any undefined or null values
    };
    

    try {
      const response = await fetch('/api/client', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      console.log('updatedData:', updatedData);
      if (!response.ok) throw new Error('Error posting data to MongoDB');

      router.push('/dashboard/client');
      toast.success('Data submitted successfully', {
        position: 'top-right',
        autoClose: 5000,
      });
    } catch (error: any) {
      console.error('Error:', error.message);
      toast.error('Error submitting data', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const content = {
    fullName: {
      en: 'Full Name',
      ar: 'الاسم الكامل',
    },
    weight: {
      en: 'Weight (kg)',
      ar: 'الوزن (كجم)',
    },
    height: {
      en: 'Height (cm)',
      ar: 'الطول (سم)',
    },
    age: {
      en: 'Age',
      ar: 'العمر',
    },
    fatWeight: {
      en: 'Fat Weight (kg)',
      ar: 'وزن الدهون (كجم)',
    },
    muscleWeight: {
      en: 'Muscle Weight (kg)',
      ar: 'وزن العضلات (كجم)',
    },
    musclePercentage: {
      en: 'Muscle Percentage (%)',
      ar: 'نسبة العضلات (%)',
    },
    fatPercentage: {
      en: 'Fat Percentage (%)',
      ar: 'نسبة الدهون (%)',
    },
    waistMeasurement: {
      en: 'Waist (cm)',
      ar: 'الخصر (سم)',
    },
    rightArmMeasurement: {
      en: 'Right Arm (cm)',
      ar: 'الذراع الأيمن (سم)',
    },
    leftArmMeasurement: {
      en: 'Left Arm (cm)',
      ar: 'الذراع الأيسر (سم)',
    },
    rightLegMeasurement: {
      en: 'Right Leg (cm)',
      ar: 'الساق اليمنى (سم)',
    },
    leftLegMeasurement: {
      en: 'Left Leg (cm)',
      ar: 'الساق اليسرى (سم)',
    },
    sugarCravings: {
      en: 'Sugar Cravings',
      ar: 'الرغبة في الحلويات',
    },
    previousInjuries: {
      en: 'Previous Injuries',
      ar: 'إصابات سابقة',
    },
    diabetes: {
      en: 'Diabetes',
      ar: 'مرض السكري',
    },
    bloodPressure: {
      en: 'Blood Pressure',
      ar: 'ضغط الدم',
    },
    onlineTrainingExperience: {
      en: 'Online Training Experience',
      ar: 'تجربة التدريب عبر الإنترنت',
    },
    trainingAge: {
      en: 'Training Age',
      ar: 'عمر التدريب',
    },
    uploadFrontImage: {
      en: 'Upload Your Front Image',
      ar: 'رفع صورتك ألامامية',
    },
    uploadBackImage: {
      en: 'Upload Your Back Image',
      ar: 'رفع صورتك الخلفية',
    },
    saveButton: {
      en: 'Save',
      ar: 'حفظ',
    },
  };


return (
  // <div className="flex justify-center items-center min-h-screen">
  // <div className="container mx-auto text-center w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
  // <div className="flex flex-col items-center text-center w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] justify-center p-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">


  // <div className="flex flex-col items-center justify-center w-full p-4 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
  //   <div className="p-6 text-[var(--text-color)] font-serif border-gray-200 rounded-lg shadow-lg overflow-y-auto relative">

  <div className="flex flex-col items-center justify-center w-full overflow-x-hidden p-4 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
     <div className=" text-[var(--text-color)] font-serif border-gray-200 rounded-lg shadow-lg w-full max-w-3xl mx-auto relative">
      {isLoading && (
        <div className="absolute inset-0 bg-[var(--background-color)] bg-opacity-75 flex justify-center items-center">

          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          <span className="ml-2">Uploading...</span>
        </div>
      )}
      {/* Client's Full Name */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 py-2 px-4 border-b text-left text-xl font-bold ">
          {[
            { label: content.weight[language as 'en' | 'ar'], name: 'weight', type: 'text' },
            { label: content.height[language as 'en' | 'ar'], name: 'height', type: 'text' },
            { label: content.age[language as 'en' | 'ar'], name: 'age', type: 'text' },
            { label: content.fatWeight[language as 'en' | 'ar'], name: 'fatWeight', type: 'text' },
            { label: content.muscleWeight[language as 'en' | 'ar'], name: 'muscleWeight', type: 'text' },
            { label: content.musclePercentage[language as 'en' | 'ar'], name: 'musclePercentage', type: 'text' },
            { label: content.fatPercentage[language as 'en' | 'ar'], name: 'fatPercentage', type: 'text' },
            { label: content.waistMeasurement[language as 'en' | 'ar'], name: 'waistMeasurement', type: 'text' },
            { label: content.rightArmMeasurement[language as 'en' | 'ar'], name: 'rightArmMeasurement', type: 'text' },
            { label: content.leftArmMeasurement[language as 'en' | 'ar'], name: 'leftArmMeasurement', type: 'text' },
            { label: content.rightLegMeasurement[language as 'en' | 'ar'], name: 'rightLegMeasurement', type: 'text' },
            { label: content.leftLegMeasurement[language as 'en' | 'ar'], name: 'leftLegMeasurement', type: 'text' },
            { label: content.sugarCravings[language as 'en' | 'ar'], name: 'sugarCravings', type: 'text' },
          ].map((input) => (
            <div className="flex flex-col" key={input.name}>
              <label className="mb-1">{input.label}</label>
              <input
                type={input.type}
                name={input.name}
                value={data[input.name as keyof ClientData] as string}
                onChange={handleChange}
                className="mt-1 block px-3 py-2 bg-[var(--select-background-color)] border border-gray-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>
          ))}
          {[
            { label: content.previousInjuries[language as 'en' | 'ar'], name: 'previousInjuries' },
            { label: content.diabetes[language as 'en' | 'ar'], name: 'diabetes' },
            { label: content.bloodPressure[language as 'en' | 'ar'], name: 'bloodPressure' },
            { label: content.onlineTrainingExperience[language as 'en' | 'ar'], name: 'onlineTrainingExperience' },
            { label: content.trainingAge[language as 'en' | 'ar'], name: 'trainingAge' },
          ].map((select) => (
            <div className="flex flex-col" key={select.name}>
              <label>{select.label}</label>
              <div className="flex space-x-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={select.name}
                    value="Yes"
                    checked={data[select.name as keyof ClientData] === 'Yes'}
                    onChange={(e) => handleToggleChange(select.name as keyof ClientData, e.target.value)}
                    className="mt-1"
                  />
                  <span>{language === 'en' ? 'Yes' : 'نعم'}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={select.name}
                    value="No"
                    checked={data[select.name as keyof ClientData] === 'No'}
                    onChange={(e) => handleToggleChange(select.name as keyof ClientData, e.target.value)}
                    className="mt-1"
                  />
                  <span>{language === 'en' ? 'No' : 'لا'}</span>
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-1">{content.uploadFrontImage[language as 'en' | 'ar']}</label>
          <input type="file" name="frontImage" onChange={(e) => handleFileChange(e, 'front')} className="mt-1" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-1">{content.uploadBackImage[language as 'en' | 'ar']}</label>
          <input type="file" name="backImage" onChange={(e) => handleFileChange(e, 'back')} className="mt-1" />
        </div>
        <button type="submit" className="mt-5 w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
          {content.saveButton[language as 'en' | 'ar']}
        </button>
      </form>
      <ToastContainer />
    </div>
  </div>
);
};


export default ClientInfoForm;

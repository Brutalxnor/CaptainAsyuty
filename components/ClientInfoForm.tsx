




import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ClientData } from '@/types/ClientData';
import { toast } from 'react-toastify';
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
  const router = useRouter();

  useEffect(() => {
    if (clientData) {
      setData((prevData) => ({ ...prevData, ...clientData }));
      setPreviousData((prevData) => ({
        previousFullName: clientData.fullName,
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
        previousTrainingAge: clientData.trainingAge,
      }));
    }
  }, [clientData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleToggleChange = (name: keyof ClientData) => {
    setData((prevState) => ({
      ...prevState,
      [name]: prevState[name] === 'Yes' ? 'No' : 'Yes',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedData = {
      ...data,
      ...previousData,
    };

    try {
      const response = await fetch('/api/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

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
    saveButton: {
      en: 'Save',
      ar: 'حفظ',
    },
  };

  const containerStyle = {
    minHeight: 'calc(90vh - 4rem)', // Adjust this value as needed
    backgroundColor: 'var(--background-color)',
    color: 'var(--text-color)',
  };

  const inputStyle = {
    backgroundColor: 'var(--input-background-color)',
    color: 'var(--input-text-color)',
    borderColor: 'var(--input-border-color)',
  };

  const checkboxLabelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  };

  const checkboxStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    appearance: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const checkboxCheckedStyle: React.CSSProperties = {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  };

  return (
    <div className="flex justify-center items-center min-h-screen" style={containerStyle}>
      <div className="w-full max-w-lg p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: content.fullName[language as 'en' | 'ar'], name: 'fullName', type: 'text' },
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
                  className="mt-1 block px-3 py-2 border rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500"
                  style={inputStyle}
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
                <label style={checkboxLabelStyle}>
                  <input
                    type="checkbox"
                    checked={data[select.name as keyof ClientData] === 'Yes'}
                    onChange={() => handleToggleChange(select.name as keyof ClientData)}
                    className="mt-1"
                    style={{
                      ...checkboxStyle,
                      ...(data[select.name as keyof ClientData] === 'Yes' ? checkboxCheckedStyle : {}),
                    }}
                  />
                  <span>{data[select.name as keyof ClientData] === 'Yes' ? 'Yes' : 'No'}</span>
                </label>
              </div>
            ))}
          </div>
          <button type="submit" className="mt-5 w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">{content.saveButton[language as 'en' | 'ar']}</button>
        </form>
      </div>
    </div>
  );
};

export default ClientInfoForm;

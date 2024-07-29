





import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/contexts/LanguageContext';

const categories = [
  {
    name: 'Low Calories',
    range: [0, 1500],
    image: '/low-calories.jpg',
    prompt: {
      en: 'Maintaining a low-calorie intake is essential for effective weight loss and overall health improvement. Focus on nutrient-dense foods such as fruits, vegetables, lean proteins, and whole grains. Include regular physical activities like walking, yoga, or light jogging to enhance your results. Remember to stay hydrated and avoid sugary drinks. Balance and consistency are key to long-term success. Your body will thank you for making healthy choices. Keep up the good work and continue monitoring your progress for sustainable improvements.',
      ar: 'إن الحفاظ على تناول عدد قليل من السعرات الحرارية أمر ضروري لفقدان الوزن الفعال وتحسين الصحة العامة. ركز على تناول الأطعمة الغنية بالعناصر الغذائية مثل الفواكه والخضروات والبروتينات الخالية من الدهون والحبوب الكاملة. قم بإدراج الأنشطة البدنية المنتظمة مثل المشي أو اليوغا أو الركض الخفيف لتعزيز نتائجك. تذكر أن تبقى رطبًا وتجنب المشروبات السكرية. التوازن والاستمرارية هما المفتاح لتحقيق النجاح على المدى الطويل. سيشكرك جسمك على اتخاذ خيارات صحية. استمر في العمل الجيد، وواصل مراقبة تقدمك للحصول على تحسينات مستدامة.',
    }
  },
  {
    name: 'Moderate Calories',
    range: [1501, 2500],
    image: '/moderate-calories.jpg',
    prompt: {
      en: 'Consuming a moderate amount of calories helps in maintaining your current weight and energy levels. Aim for a balanced diet including a variety of foods such as lean meats, whole grains, dairy products, fruits, and vegetables. Moderate physical activities like cycling, swimming, or strength training can help maintain fitness and overall health. Ensure a mix of macronutrients and stay hydrated. Monitoring portion sizes and listening to your body’s hunger signals can help prevent overeating. Keep up the good work and maintain your balanced approach for sustainable health.',
      ar: 'إن استهلاك كمية معتدلة من السعرات الحرارية يساعد في الحفاظ على وزنك ومستويات طاقتك الحالية. اهدف إلى تناول نظام غذائي متوازن يشمل مجموعة متنوعة من الأطعمة مثل اللحوم الخالية من الدهون والحبوب الكاملة ومنتجات الألبان والفواكه والخضروات. يمكن أن تسهم الأنشطة البدنية المعتدلة مثل ركوب الدراجات أو السباحة أو تدريب القوة في الحفاظ على اللياقة البدنية والصحة العامة. تأكد من الحصول على مزيج من المغذيات الكبيرة واحرص على البقاء رطبًا. مراقبة حجم الحصص الغذائية والاستماع إلى إشارات الجوع في جسمك يمكن أن يساعد في منع الإفراط في الأكل. استمر في العمل الجيد، وحافظ على نهجك المتوازن من أجل صحة مستدامة.',
    }
  },
  {
    name: 'High Calories',
    range: [2501, Infinity],
    image: '/high-calories.jpg',
    prompt: {
      en: 'Consuming a high number of calories can be beneficial for those aiming to gain weight or maintain high energy levels for intense physical activities. Focus on healthy high-calorie foods like avocados, nuts, seeds, whole grains, and lean proteins. Avoid excessive intake of processed and sugary foods to maintain overall health. Intense workouts and sports activities can help burn excess calories and maintain fitness levels. Balance is key, so ensure to adjust calorie intake according to your activity level and goals. Stay motivated and committed to your fitness journey.',
      ar: 'يمكن أن يكون استهلاك عدد كبير من السعرات الحرارية مفيدًا لأولئك الذين يهدفون إلى زيادة الوزن أو الحفاظ على مستويات طاقة عالية للأنشطة البدنية المكثفة. ركز على تناول الأطعمة الصحية العالية السعرات الحرارية مثل الأفوكادو والمكسرات والبذور والحبوب الكاملة والبروتينات الخالية من الدهون. تجنب الإفراط في تناول الأطعمة المصنعة والمليئة بالسكر للحفاظ على الصحة العامة. يمكن أن تساعدك الأنشطة الرياضية والتمارين الشديدة في حرق السعرات الحرارية الزائدة والحفاظ على مستويات اللياقة. التوازن هو المفتاح، لذا تأكد من تعديل تناول السعرات الحرارية وفقًا لمستوى نشاطك وأهدافك. ابق متحمسًا وملتزمًا برحلة لياقتك.',
    }
  },
];

const activityLevels = [
  { label: 'قليل النشاط', value: 'sedentary' },
  { label: 'نشط من حين لآخر', value: 'lightly_active' },
  { label: 'نشط جداً', value: 'moderately_active' },
  { label: 'نشط للغاية', value: 'very_active' },
  { label: 'نشط للغاية', value: 'extra_active' }
];

const CalculatorPage = () => {
  const { language } = useLanguage();
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityLevel, setActivityLevel] = useState('');
  const [calories, setCalories] = useState<number | null>(null);

  const handleCalculate = () => {
    let bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'female' ? -161 : 5);
    let activityMultiplier = 1.2;

    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'lightly_active':
        activityMultiplier = 1.375;
        break;
      case 'moderately_active':
        activityMultiplier = 1.55;
        break;
      case 'very_active':
        activityMultiplier = 1.725;
        break;
      case 'extra_active':
        activityMultiplier = 1.9;
        break;
    }

    setCalories(bmr * activityMultiplier);
  };

  const getCategory = (calories: number) => {
    return categories.find(category => calories >= category.range[0] && calories <= category.range[1]);
  };

  const category = calories !== null ? getCategory(calories) : null;

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center min-w-screen">
        <div className="w-full max-w-lg p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg overflow-y-auto" >
          <h1 className="text-4xl font-bold mb-8 text-center">{language === 'en' ? 'BMR Calorie Calculator' : 'حاسبة السعرات الحرارية BMR'}</h1>
          <div className="mt-10 grid grid-cols-1 gap-8">
            <div className="p-6 border rounded-lg bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center">
              <div className="min-w-full text-center bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)]">
                <label htmlFor="age" className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center">{language === 'en' ? 'Age' : 'السن'}</label>
                <select
                  id="age"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="block text-center w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  {Array.from({ length: 91 }, (_, i) => i + 10).map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="gender" className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center">{language === 'en' ? 'Gender' : 'الجنس'}</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                  className="block text-center w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  <option value="male">{language === 'en' ? 'Male' : 'ذكر'}</option>
                  <option value="female">{language === 'en' ? 'Female' : 'أنثى'}</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="height" className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center">{language === 'en' ? 'Height (cm)' : 'الطول (سم)'}</label>
                <select
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(parseInt(e.target.value))}
                  className="block text-center w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  {Array.from({ length: 151 }, (_, i) => i + 100).map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="weight" className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center">{language === 'en' ? 'Weight (kg)' : 'الوزن (كجم)'}</label>
                <select
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                  className="block text-center w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  {Array.from({ length: 171 }, (_, i) => i + 30).map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="activity" className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center">{language === 'en' ? 'Activity Level' : 'مستوى النشاط'}</label>
                <select
                  id="activity"
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="block text-center w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  {activityLevels.map((level) => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>
              <button
                className="mt-4 h-10 w-10 bg-blue-500 text-white p-2 rounded-full mx-auto"
                onClick={handleCalculate}
              >
                <FontAwesomeIcon icon={faCalculator} className="h-5 w-5" />
              </button>
              {calories && category && (
                <div className="mt-4 flex flex-col items-center">
                  <h3 className="text-2xl text-center">{language === 'en' ? 'Calculated Calories:' : 'السعرات الحرارية المحسوبة:'}</h3>
                  <p className="text-xl text-center">{calories.toFixed(2)} {language === 'en' ? 'kcal' : 'كيلو كالوري'}</p>
                  <div className="w-full md:w-2/3 lg:w-1/2">
                    <Image src={category.image} alt={category.name} layout="responsive" width={600} height={400} />
                  </div>
                  <p className="mt-4 text-justify">{category.prompt[language as 'en' | 'ar']}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalculatorPage;


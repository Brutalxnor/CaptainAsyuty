import { useState } from 'react';
import Layout from '@/components/layout';
import { Button } from '@/components/button';
import { Slider, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Image from 'next/image';

const categories = [
  {
    name: 'Low Calories',
    range: [0, 1500],
    image: '/low-calories.jpg',
    prompt: 'إن الحفاظ على تناول عدد قليل من السعرات الحرارية أمر ضروري لفقدان الوزن الفعال وتحسين الصحة العامة. ركز على تناول الأطعمة الغنية بالعناصر الغذائية مثل الفواكه والخضروات والبروتينات الخالية من الدهون والحبوب الكاملة. قم بإدراج الأنشطة البدنية المنتظمة مثل المشي أو اليوغا أو الركض الخفيف لتعزيز نتائجك. تذكر أن تبقى رطبًا وتجنب المشروبات السكرية. التوازن والاستمرارية هما المفتاح لتحقيق النجاح على المدى الطويل. سيشكرك جسمك على اتخاذ خيارات صحية. استمر في العمل الجيد، وواصل مراقبة تقدمك للحصول على تحسينات مستدامة.'
  },
  {
    name: 'Moderate Calories',
    range: [1501, 2500],
    image: '/moderate-calories.jpg',
    prompt: 'إن استهلاك كمية معتدلة من السعرات الحرارية يساعد في الحفاظ على وزنك ومستويات طاقتك الحالية. اهدف إلى تناول نظام غذائي متوازن يشمل مجموعة متنوعة من الأطعمة مثل اللحوم الخالية من الدهون والحبوب الكاملة ومنتجات الألبان والفواكه والخضروات. يمكن أن تسهم الأنشطة البدنية المعتدلة مثل ركوب الدراجات أو السباحة أو تدريب القوة في الحفاظ على اللياقة البدنية والصحة العامة. تأكد من الحصول على مزيج من المغذيات الكبيرة واحرص على البقاء رطبًا. مراقبة حجم الحصص الغذائية والاستماع إلى إشارات الجوع في جسمك يمكن أن يساعد في منع الإفراط في الأكل. استمر في العمل الجيد، وحافظ على نهجك المتوازن من أجل صحة مستدامة.'
  },
  {
    name: 'High Calories',
    range: [2501, Infinity],
    image: '/high-calories.jpg',
    prompt: 'يمكن أن يكون استهلاك عدد كبير من السعرات الحرارية مفيدًا لأولئك الذين يهدفون إلى زيادة الوزن أو الحفاظ على مستويات طاقة عالية للأنشطة البدنية المكثفة. ركز على تناول الأطعمة الصحية العالية السعرات الحرارية مثل الأفوكادو والمكسرات والبذور والحبوب الكاملة والبروتينات الخالية من الدهون. تجنب الإفراط في تناول الأطعمة المصنعة والمليئة بالسكر للحفاظ على الصحة العامة. يمكن أن تساعدك الأنشطة الرياضية والتمارين الشديدة في حرق السعرات الحرارية الزائدة والحفاظ على مستويات اللياقة. التوازن هو المفتاح، لذا تأكد من تعديل تناول السعرات الحرارية وفقًا لمستوى نشاطك وأهدافك. ابق متحمسًا وملتزمًا برحلة لياقتك.'
  },
];

const CalculatorPage = () => {
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [activityLevel, setActivityLevel] = useState('');
  const [calories, setCalories] = useState<number | null>(null);

  const handleCalculate = () => {
    let bmr = 10 * weight + 6.25 * height - 5 * age + (activityLevel === 'female' ? -161 : 5);
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
    <Layout>
      <div className="container mx-auto text-center mt-10">
        <h1 className="text-4xl font-bold">حاسبة السعرات الحرارية BMR</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border rounded-lg bg-gray-100">
            <h2 className="text-2xl mb-4">السن</h2>
            <Slider
              value={age}
              onChange={(e, val) => setAge(val as number)}
              aria-labelledby="age-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={10}
              max={100}
            />
            <h2 className="text-2xl mb-4">الطول (سم)</h2>
            <Slider
              value={height}
              onChange={(e, val) => setHeight(val as number)}
              aria-labelledby="height-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={100}
              max={250}
            />
            <h2 className="text-2xl mb-4">الوزن (كجم)</h2>
            <Slider
              value={weight}
              onChange={(e, val) => setWeight(val as number)}
              aria-labelledby="weight-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={30}
              max={200}
            />
            <FormControl fullWidth className="mt-4">
              <InputLabel id="activity-label">النشاط</InputLabel>
              <Select
                labelId="activity-label"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                <MenuItem value="sedentary">قليل النشاط</MenuItem>
                <MenuItem value="lightly_active">نشط من حين لآخر</MenuItem>
                <MenuItem value="moderately_active">نشط جداً</MenuItem>
                <MenuItem value="very_active">نشط للغاية</MenuItem>
                <MenuItem value="extra_active">نشط للغاية</MenuItem>
              </Select>
            </FormControl>
            <Button className="mt-4" onClick={handleCalculate}>
              احسب
            </Button>
            {calories && category && (
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-2xl">السعرات الحرارية المحسوبة:</h3>
                <p className="text-xl">{calories.toFixed(2)} كيلو كالوري</p>
                <div className="w-full md:w-2/3 lg:w-1/2">
                  <Image src={category.image} alt={category.name} layout="responsive" width={600} height={400} />
                </div>
                <p className="mt-4 text-justify">{category.prompt}</p>
              </div>
            )}
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <h2 className="text-2xl mb-4">حاسبة السعرات الحرارية (BMR)</h2>
            <p>
              هي عملية حسابية تقوم على حساب عدد السعرات الحرارية المستهلكة يومياً للشخص (ذكر / أنثى) بناء على عدة
              عوامل مثل الطول، الوزن، العمر النوع، ونوعية النشاط اليومي البدني.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalculatorPage;

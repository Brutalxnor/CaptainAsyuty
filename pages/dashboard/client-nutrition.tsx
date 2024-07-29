




import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useUser } from '@clerk/nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faBowlFood, faDrumstickBite, faCarrot, faBreadSlice, faCheese, faAppleAlt, faSeedling } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '@/components/LoadingSpinner';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useLanguage } from '@/contexts/LanguageContext'; // Import useLanguage

library.add(faDrumstickBite, faCarrot, faBreadSlice, faCheese, faAppleAlt, faSeedling);

const foodCategoryIcons: { [key: string]: IconDefinition } = {
  Proteins: faDrumstickBite,
  Vegetables: faCarrot,
  Grains: faBreadSlice,
  Dairy: faCheese,
  Fruits: faAppleAlt,
  Nuts: faSeedling,
};

const foodOptions: Record<string, Record<string, FoodOption[]>> = {
  Proteins: {
    en: [
      { name: 'Chicken Breast', calories: 165, fats: 3.6, carbs: 0, image: '/Meals/chicken_breast.jpg' },
      { name: 'Salmon', calories: 208, fats: 13, carbs: 0, image: '/Meals/salmon.png' },
      { name: 'Meat', calories: 250, fats: 15, carbs: 0, image: '/Meals/meat.jpg' },
      { name: 'Eggs', calories: 78, fats: 5, carbs: 0.6, image: '/Meals/eggs.jpg' },
      { name: 'Tuna', calories: 144, fats: 5, carbs: 0, image: '/Meals/tuna.jpg' },
      { name: 'Kofta', calories: 220, fats: 17, carbs: 1, image: '/Meals/kofta.jpg' },
    ],
    ar: [
      { name: 'صدر دجاج', calories: 165, fats: 3.6, carbs: 0, image: '/Meals/chicken_breast.jpg' },
      { name: 'سلمون', calories: 208, fats: 13, carbs: 0, image: '/Meals/salmon.png' },
      { name: 'لحم', calories: 250, fats: 15, carbs: 0, image: '/Meals/meat.jpg' },
      { name: 'بيض', calories: 78, fats: 5, carbs: 0.6, image: '/Meals/eggs.jpg' },
      { name: 'تونة', calories: 144, fats: 5, carbs: 0, image: '/Meals/tuna.jpg' },
      { name: 'كفتة', calories: 220, fats: 17, carbs: 1, image: '/Meals/kofta.jpg' },
    ],
  },
  Vegetables: {
    en: [
      { name: 'Broccoli', calories: 55, fats: 0.6, carbs: 11.2, image: '/Meals/broccoli.jpg' },
      { name: 'Beans', calories: 347, fats: 1.2, carbs: 63, image: '/Meals/beans.jpg' },
      { name: 'Molokhia', calories: 50, fats: 0.2, carbs: 10, image: '/Meals/molokhia.jpg' },
    ],
    ar: [
      { name: 'بروكلي', calories: 55, fats: 0.6, carbs: 11.2, image: '/Meals/broccoli.jpg' },
      { name: 'فول', calories: 347, fats: 1.2, carbs: 63, image: '/Meals/beans.jpg' },
      { name: 'ملوخية', calories: 50, fats: 0.2, carbs: 10, image: '/Meals/molokhia.jpg' },
    ],
  },
  Grains: {
    en: [
      { name: 'Rice', calories: 130, fats: 0.3, carbs: 28, image: '/Meals/rice.jpg' },
      { name: 'Bread', calories: 79, fats: 1, carbs: 15, image: '/Meals/bread.jpg' },
      { name: 'Koshari', calories: 300, fats: 5, carbs: 60, image: '/Meals/koshari.jpg' },
      { name: 'Oats', calories: 389, fats: 7, carbs: 66, image: '/Meals/oats.jpg' },
    ],
    ar: [
      { name: 'أرز', calories: 130, fats: 0.3, carbs: 28, image: '/Meals/rice.jpg' },
      { name: 'خبز', calories: 79, fats: 1, carbs: 15, image: '/Meals/bread.jpg' },
      { name: 'كشري', calories: 300, fats: 5, carbs: 60, image: '/Meals/koshari.jpg' },
      { name: 'شوفان', calories: 389, fats: 7, carbs: 66, image: '/Meals/oats.jpg' },
    ],
  },
  Dairy: {
    en: [
      { name: 'White Cheese', calories: 402, fats: 33, carbs: 1.3, image: '/Meals/white_cheese.jpg' },
      { name: 'Yogurt', calories: 150, fats: 8, carbs: 11.4, image: '/Meals/yogurt.jpg' },
    ],
    ar: [
      { name: 'جبن أبيض', calories: 402, fats: 33, carbs: 1.3, image: '/Meals/white_cheese.jpg' },
      { name: 'زبادي', calories: 150, fats: 8, carbs: 11.4, image: '/Meals/yogurt.jpg' },
    ],
  },
  Fruits: {
    en: [
      { name: 'Apple', calories: 95, fats: 0.3, carbs: 25, image: '/Meals/apple.jpg' },
      { name: 'Banana', calories: 105, fats: 0.3, carbs: 27, image: '/Meals/banana.jpg' },
      { name: 'Avocado', calories: 234, fats: 21, carbs: 12, image: '/Meals/avocado.jpg' },
    ],
    ar: [
      { name: 'تفاح', calories: 95, fats: 0.3, carbs: 25, image: '/Meals/apple.jpg' },
      { name: 'موز', calories: 105, fats: 0.3, carbs: 27, image: '/Meals/banana.jpg' },
      { name: 'أفوكادو', calories: 234, fats: 21, carbs: 12, image: '/Meals/avocado.jpg' },
    ],
  },
  Nuts: {
    en: [
      { name: 'Almonds', calories: 576, fats: 49.4, carbs: 21.7, image: '/Meals/almonds.jpg' },
    ],
    ar: [
      { name: 'لوز', calories: 576, fats: 49.4, carbs: 21.7, image: '/Meals/almonds.jpg' },
    ],
  },
};

interface FoodOption {
  name: string;
  calories: number;
  fats: number;
  carbs: number;
  image: string;
}

interface Nutrition {
  type: string;
  quantity: number;
}

const ClientNutritionPage: React.FC = () => {
  const { user } = useUser();
  const { language } = useLanguage(); // Use the language context
  const [clientNutrition, setClientNutrition] = useState<Nutrition[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<FoodOption[][]>([]);
  const [dailyMeals, setDailyMeals] = useState(3);
  const [remainingNutrition, setRemainingNutrition] = useState<Nutrition[]>([
    { type: 'Calories', quantity: 0 },
    { type: 'Fats', quantity: 0 },
    { type: 'Carbs', quantity: 0 },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMealIndex, setSelectedMealIndex] = useState(0);
  const [selectedFoodCategory, setSelectedFoodCategory] = useState<keyof typeof foodCategoryIcons>('Proteins');
  const router = useRouter();

  useEffect(() => {
    const checkAndAddEmail = async (email: string): Promise<boolean> => {
      try {
        const response = await fetch('/api/addEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error('Error checking/adding email');
        }

        const data = await response.json();
        console.log(data.message);
        return !data.exists;
      } catch (error) {
        console.error('Error checking/adding email:', error);
        return false;
      }
    };

    const checkPaymentStatus = async (email: string): Promise<boolean> => {
      try {
        const response = await fetch('/api/checkPaymentStatus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error('Error checking payment status');
        }

        const data = await response.json();
        return data.hasPaid;
      } catch (error) {
        console.error('Error checking payment status:', error);
        return false;
      }
    };

    const fetchNutritionData = async () => {
      if (!user) return;

      const email = user.primaryEmailAddress?.emailAddress;
      if (!email) {
        setLoading(false);
        return;
      }

      const isNew = await checkAndAddEmail(email);
      const hasPaid = await checkPaymentStatus(email);

      if ((isNew && !hasPaid) || !hasPaid) {
        router.push('/dashboard/payments');
        return;
      }

      try {
        const response = await fetch(`/api/nutrition?email=${email}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch nutrition data');
        }

        const { nutritions } = await response.json();
        setClientNutrition(nutritions);

        const totalNutrition = nutritions.reduce(
          (acc: { calories: number; fats: number; carbs: number }, item: Nutrition) => {
            if (item.type === 'Calories') {
              return { ...acc, calories: acc.calories + item.quantity };
            } else if (item.type === 'Fats') {
              return { ...acc, fats: acc.fats + item.quantity };
            } else if (item.type === 'Carbs') {
              return { ...acc, carbs: acc.carbs + item.quantity };
            } else {
              return acc;
            }
          },
          { calories: 0, fats: 0, carbs: 0 }
        );

        setRemainingNutrition([
          { type: 'Calories', quantity: totalNutrition.calories },
          { type: 'Fats', quantity: totalNutrition.fats },
          { type: 'Carbs', quantity: totalNutrition.carbs },
        ]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNutritionData();
  }, [user, router]);

  const handleFoodSelect = (food: FoodOption) => {
    const newSelectedMeals = [...selectedMeals];
    newSelectedMeals[selectedMealIndex] = [...(newSelectedMeals[selectedMealIndex] || []), food];
    setSelectedMeals(newSelectedMeals);
    setRemainingNutrition((prev) =>
      prev.map((nut) => {
        if (nut.type === 'Calories') {
          return { ...nut, quantity: nut.quantity - food.calories };
        } else if (nut.type === 'Fats') {
          return { ...nut, quantity: nut.quantity - food.fats };
        } else if (nut.type === 'Carbs') {
          return { ...nut, quantity: nut.quantity - food.carbs };
        } else {
          return nut;
        }
      })
    );
  };

  const handleRemoveFood = (mealIndex: number, foodIndex: number) => {
    const food = selectedMeals[mealIndex][foodIndex];
    const newSelectedMeals = selectedMeals.map((meal, i) =>
      i === mealIndex ? meal.filter((_, idx) => idx !== foodIndex) : meal
    );
    setSelectedMeals(newSelectedMeals);
    setRemainingNutrition((prev) =>
      prev.map((nut) => {
        if (nut.type === 'Calories') {
          return { ...nut, quantity: nut.quantity + food.calories };
        } else if (nut.type === 'Fats') {
          return { ...nut, quantity: nut.quantity + food.fats };
        } else if (nut.type === 'Carbs') {
          return { ...nut, quantity: nut.quantity + food.carbs };
        } else {
          return nut;
        }
      })
    );
  };

  const handleMealChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const numMeals = parseInt(e.target.value, 10);
    setDailyMeals(numMeals);
    setSelectedMeals(Array(numMeals).fill([]));
  };

  const handleMealSelect = (index: number) => {
    setSelectedMealIndex(index);
  };

  const handleAssignAndSaveNutrition = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) return;

    try {
      // Save remaining nutrition
      const saveResponse = await fetch('/api/adminAddNutrition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nutritions: remainingNutrition }),
      });

      if (!saveResponse.ok) throw new Error('Error saving remaining nutrition');
      const saveData = await saveResponse.json();
      console.log(saveData.message);

      // Assign meals
      const assignResponse = await fetch('/api/assignMeals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, meals: selectedMeals }),
      });

      if (!assignResponse.ok) throw new Error('Error assigning meals');
      const assignData = await assignResponse.json();
      console.log(assignData.message);

      router.push('/dashboard');
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  const mealRecommendations = (remainingNutrition: Nutrition[]) => {
    const recommendations: string[] = [];
    const nutritionMap = remainingNutrition.reduce((acc, nut) => {
      acc[nut.type] = nut.quantity;
      return acc;
    }, {} as Record<string, number>);

    if (nutritionMap['Calories'] < 500) {
      recommendations.push('Consider adding more protein-rich foods like chicken breast or salmon.');
    }
    if (nutritionMap['Fats'] < 20) {
      recommendations.push('Add healthy fats such as avocados or almonds.');
    }
    if (nutritionMap['Carbs'] < 100) {
      recommendations.push('Include more carbs like rice, bread, or fruits.');
    }
    return recommendations;
  };

  const recommendations = mealRecommendations(remainingNutrition);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;


  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center relative pb-20 overflow-scroll max-w-sm md:max-w-2xl lg:max-w-5xl">
        <div className="bg-[var(--background-color)] font-serif  justify-center items-center text-[var(--text-color)] p-4 rounded-lg shadow-md mx-auto max-w-sm md:max-w-2xl" >
          <h1 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8 font-serif mb-4 text-center">{language === 'en' ? 'Client Nutrition' : 'تغذية العميل'}</h1>
          <div className="mb-4 mt-5">
            <label htmlFor="meals" className="block text-lg text-center font-semibold mb-2">{language === 'en' ? 'Number of Daily Meals' : 'عدد الوجبات اليومية'}</label>
            <select
              id="meals"
              value={dailyMeals}
              onChange={handleMealChange}
              className="w-full text-center p-2 border border-[var(--border-color)] rounded-md bg-[var(--select-background-color)] text-[var(--input-text-color)]"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="mb-4 mt-5">
            <h2 className="text-lg font-semibold mb-2 text-center">{language === 'en' ? 'Select Meal' : 'اختر وجبة'}</h2>
            <div className="flex justify-between mb-4">
              {Array.from({ length: dailyMeals }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handleMealSelect(index)}
                  className={`px-2 py-1 rounded-md ${selectedMealIndex === index ? 'bg-blue-500 text-white' : 'bg-slate-300 text-black'}`}
                >
                  {language === 'en' ? `Meal ${index + 1}` : `وجبة ${index + 1}`} <FontAwesomeIcon icon={faBowlFood} className='text-black' />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4 mt-5">
            <h2 className="text-lg text-center font-semibold mb-2">{language === 'en' ? 'Select Food Category' : 'اختر فئة الطعام'}</h2>
            <div className="flex flex-row items-center gap-2 mb-4 overflow-y-auto overflow-y-hidden max-h-64">
              {Object.keys(foodCategoryIcons).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFoodCategory(category as keyof typeof foodCategoryIcons)}
                  className={`px-4 py-2 mb-2 rounded-md flex flex-col items-center ${selectedFoodCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                  <FontAwesomeIcon icon={foodCategoryIcons[category]} className="h-10 w-10 mb-2" />
                  {language === 'en' ? category : translateCategory(category as keyof typeof foodCategoryIcons)}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4 mt-5">
            <h2 className="text-lg mb-4 mt-5 text-center font-semibold mb-2">{language === 'en' ? 'Select Food Options' : 'اختر خيارات الطعام'}</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {foodOptions[selectedFoodCategory][language as 'en' | 'ar'].map((food, index) => (
                <button
                  key={food.name}
                  onClick={() => handleFoodSelect(food)}
                  className={`p-2 text-center items-center justify-center bg-blue-500 text-[var(--button-text)] rounded-md text-left flex relative overflow-visible ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className="relative flex items-center">
                    <div className="relative w-12 h-12 mr-2 hover:z-50">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-full rounded-md transition-transform duration-200 transform hover:scale-[8] absolute left-0 top-0 right-0 bottom-0 m-auto"
                        style={{ zIndex: 10, transformOrigin: 'center center' }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <div>{food.name}</div>
                    <div className="text-sm text-[var(--input-text-color)]">
                      {food.calories} {language === 'en' ? 'Calories' : 'سعرات حرارية'}, {food.fats} {language === 'en' ? 'Fats' : 'دهون'}, {food.carbs} {language === 'en' ? 'Carbs' : 'كربوهيدرات'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">{language === 'en' ? 'Your Meals:' : 'وجباتك:'}</h2>
            {selectedMeals.map((meal, mealIndex) => (
              <div key={mealIndex}>
                <h3 className="text-lg italic bg-black text-white text-center font-serif font-semibold  mb-2">{language === 'en' ? `Meal ${mealIndex + 1}` : `وجبة ${mealIndex + 1}`}</h3>
                <div className="flex overflow-x-scroll overflow-y-hidden">
                  <ul className="flex flex-row gap-2">
                    {meal.map((food, foodIndex) => (
                      <li key={foodIndex} className="flex-shrink-0 mb-2 p-2 border flex flex-col items-center border-gray-300 rounded-md bg-[var(--select-background-color)] text-[var(--text-color)]">
                        <div className="relative w-12 h-12 mr-2 hover:z-50">
                          <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-full rounded-md transition-transform duration-200 transform hover:scale-[8] absolute left-0 top-0 right-0 bottom-0 m-auto"
                            style={{ zIndex: 10, transformOrigin: 'center center' }}
                          />
                        </div>
                        <div>{food.name}</div>
                        <div className="text-sm text-[var(--input-text-color)] text-center">
                          {food.calories} {language === 'en' ? 'Calories' : 'سعرات حرارية'}, {food.fats} {language === 'en' ? 'Fats' : 'دهون'}, {food.carbs} {language === 'en' ? 'Carbs' : 'كربوهيدرات'}
                        </div>
                        <button
                          onClick={() => handleRemoveFood(mealIndex, foodIndex)}
                          className="text-red-500 hover:text-red-700 mt-2"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">{language === 'en' ? 'Remaining Nutrition' : 'التغذية المتبقية'}</h2>
            <div>
              <div>{language === 'en' ? 'Calories' : 'سعرات حرارية'}: {remainingNutrition.find(nut => nut.type === 'Calories')?.quantity.toFixed(1)}</div>
              <div>{language === 'en' ? 'Fats' : 'دهون'}: {remainingNutrition.find(nut => nut.type === 'Fats')?.quantity.toFixed(1)}</div>
              <div>{language === 'en' ? 'Carbs' : 'كربوهيدرات'}: {remainingNutrition.find(nut => nut.type === 'Carbs')?.quantity.toFixed(1)}</div>
            </div>
          </div>
          {recommendations.length > 0 && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">{language === 'en' ? 'Meal Recommendations' : 'توصيات الوجبات'}</h2>
              <ul className="list-disc list-inside">
                {recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          )}
          <button
            onClick={handleAssignAndSaveNutrition}
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200 w-full mt-4"
          >
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            {language === 'en' ? 'Assign and Save Nutrition' : 'تعيين وحفظ التغذية'}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );

};

const translateCategory = (category: keyof typeof foodCategoryIcons) => {
  const categories: { [key in keyof typeof foodCategoryIcons]: string } = {
    Proteins: 'بروتينات',
    Vegetables: 'خضروات',
    Grains: 'حبوب',
    Dairy: 'ألبان',
    Fruits: 'فواكه',
    Nuts: 'مكسرات',
  };
  return categories[category];
};

export default ClientNutritionPage;





import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faBowlFood, faDrumstickBite, faCarrot, faBreadSlice, faCheese, faAppleAlt, faSeedling } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '@/components/LoadingSpinner';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useLanguage } from '@/contexts/LanguageContext';

library.add(faDrumstickBite, faCarrot, faBreadSlice, faCheese, faAppleAlt, faSeedling);

const foodCategoryIcons: { [key: string]: IconDefinition } = {
  Proteins: faDrumstickBite,
  Vegetables: faCarrot,
  Grains: faBreadSlice,
  Dairy: faCheese,
  Fruits: faAppleAlt,
  Nuts: faSeedling,
};

interface FoodOption {
  name: string;
  calories: number;
  fats: number;
  carbs: number;
  protein: number;
  image: string;
  quantity: number; // New property
}


interface Nutrition {
  type: string;
  quantity: number;
}

const foodOptions: Record<string, Record<string, FoodOption[]>> = {
  Proteins: {
    en: [
      { name: 'Chicken Breast', calories: 165, fats: 3.6, carbs: 0, protein: 31, image: '/Meals/chicken_breast.jpg', quantity: 1  },
      { name: 'Salmon', calories: 208, fats: 13, carbs: 0, protein: 20, image: '/Meals/salmon.png', quantity: 1  },
      { name: 'Meat', calories: 250, fats: 15, carbs: 0, protein: 26, image: '/Meals/meat.jpg', quantity: 1  },
      { name: 'Eggs', calories: 78, fats: 5, carbs: 0.6, protein: 6, image: '/Meals/eggs.jpg', quantity: 1  },
      { name: 'Tuna', calories: 144, fats: 5, carbs: 0, protein: 30, image: '/Meals/tuna.jpg', quantity: 1  },
      { name: 'Kofta', calories: 220, fats: 17, carbs: 1, protein: 13, image: '/Meals/kofta.jpg', quantity: 1  },
      { name: 'Lamb', calories: 294, fats: 21, carbs: 0, protein: 25, image: '/Meals/lamb.jpg', quantity: 1  },  // New Item
      { name: 'Shrimp', calories: 85, fats: 0.5, carbs: 0, protein: 18, image: '/Meals/shrimp.jpg', quantity: 1  },  // New Item
    ],
    ar: [
      { name: 'صدر دجاج', calories: 165, fats: 3.6, carbs: 0, protein: 31, image: '/Meals/chicken_breast.jpg', quantity: 1  },
      { name: 'سلمون', calories: 208, fats: 13, carbs: 0, protein: 20, image: '/Meals/salmon.png', quantity: 1  },
      { name: 'لحم', calories: 250, fats: 15, carbs: 0, protein: 26, image: '/Meals/meat.jpg', quantity: 1  },
      { name: 'بيض', calories: 78, fats: 5, carbs: 0.6, protein: 6, image: '/Meals/eggs.jpg', quantity: 1  },
      { name: 'تونة', calories: 144, fats: 5, carbs: 0, protein: 30, image: '/Meals/tuna.jpg', quantity: 1  },
      { name: 'كفتة', calories: 220, fats: 17, carbs: 1, protein: 13, image: '/Meals/kofta.jpg', quantity: 1  },
      { name: 'لحم خروف', calories: 294, fats: 21, carbs: 0, protein: 25, image: '/Meals/lamb.jpg', quantity: 1  },  // New Item
      { name: 'جمبري', calories: 85, fats: 0.5, carbs: 0, protein: 18, image: '/Meals/shrimp.jpg', quantity: 1  },  // New Item
    ],
  },
  Vegetables: {
    en: [
      { name: 'Broccoli', calories: 55, fats: 0.6, carbs: 11.2, protein: 3.7, image: '/Meals/broccoli.jpg', quantity: 1  },
      { name: 'Beans', calories: 347, fats: 1.2, carbs: 63, protein: 21, image: '/Meals/beans.jpg', quantity: 1  },
      { name: 'Molokhia', calories: 50, fats: 0.2, carbs: 10, protein: 5.4, image: '/Meals/molokhia.jpg', quantity: 1  },
      { name: 'Tomato', calories: 18, fats: 0.2, carbs: 3.9, protein: 0.9, image: '/Meals/tomato.jpg', quantity: 1  },  // New Item
      { name: 'Cucumber', calories: 12, fats: 0.1, carbs: 3.1, protein: 0.6, image: '/Meals/cucumber.jpg', quantity: 1  },  // New Item
      { name: 'Bell Pepper', calories: 20, fats: 0.2, carbs: 4.6, protein: 0.8, image: '/Meals/bell_pepper.jpg', quantity: 1  },  // New Item
    ],
    ar: [
      { name: 'بروكلي', calories: 55, fats: 0.6, carbs: 11.2, protein: 3.7, image: '/Meals/broccoli.jpg', quantity: 1  },
      { name: 'فول', calories: 347, fats: 1.2, carbs: 63, protein: 21, image: '/Meals/beans.jpg', quantity: 1 },
      { name: 'ملوخية', calories: 50, fats: 0.2, carbs: 10, protein: 5.4, image: '/Meals/molokhia.jpg', quantity: 1  },
      { name: 'طماطم', calories: 18, fats: 0.2, carbs: 3.9, protein: 0.9, image: '/Meals/tomato.jpg', quantity: 1  },  // New Item
      { name: 'خيار', calories: 12, fats: 0.1, carbs: 3.1, protein: 0.6, image: '/Meals/cucumber.jpg', quantity: 1  },  // New Item
      { name: 'فلفل حلو', calories: 20, fats: 0.2, carbs: 4.6, protein: 0.8, image: '/Meals/bell_pepper.jpg', quantity: 1  },  // New Item
    ],
  },
  Grains: {
    en: [
      { name: 'Rice', calories: 130, fats: 0.3, carbs: 28, protein: 2.7, image: '/Meals/rice.jpg', quantity: 1  },
      { name: 'Bread', calories: 79, fats: 1, carbs: 15, protein: 2.7, image: '/Meals/bread.jpg', quantity: 1  },
      { name: 'Koshari', calories: 300, fats: 5, carbs: 60, protein: 10, image: '/Meals/koshari.jpg', quantity: 1  },
      { name: 'Oats', calories: 389, fats: 7, carbs: 66, protein: 16.9, image: '/Meals/oats.jpg', quantity: 1  },
      { name: 'Pasta', calories: 200, fats: 1.1, carbs: 42, protein: 7.0, image: '/Meals/pasta.jpg', quantity: 1  },  // New Item
      { name: 'Corn', calories: 86, fats: 1.2, carbs: 19, protein: 3.2, image: '/Meals/corn.jpg', quantity: 1  },  // New Item
    ],
    ar: [
      { name: 'أرز', calories: 130, fats: 0.3, carbs: 28, protein: 2.7, image: '/Meals/rice.jpg', quantity: 1  },
      { name: 'خبز', calories: 79, fats: 1, carbs: 15, protein: 2.7, image: '/Meals/bread.jpg', quantity: 1  },
      { name: 'كشري', calories: 300, fats: 5, carbs: 60, protein: 10, image: '/Meals/koshari.jpg', quantity: 1  },
      { name: 'شوفان', calories: 389, fats: 7, carbs: 66, protein: 16.9, image: '/Meals/oats.jpg', quantity: 1  },
      { name: 'مكرونة', calories: 200, fats: 1.1, carbs: 42, protein: 7.0, image: '/Meals/pasta.webp', quantity: 1  },  // New Item
      { name: 'ذرة', calories: 86, fats: 1.2, carbs: 19, protein: 3.2, image: '/Meals/corn.jpg', quantity: 1  },  // New Item
    ],
  },
  Dairy: {
    en: [
      { name: 'White Cheese', calories: 402, fats: 33, carbs: 1.3, protein: 21, image: '/Meals/white_cheese.jpg', quantity: 1  },
      { name: 'Yogurt', calories: 150, fats: 8, carbs: 11.4, protein: 8.5, image: '/Meals/yogurt.jpg', quantity: 1  },
      { name: 'Milk', calories: 42, fats: 1, carbs: 5, protein: 3.4, image: '/Meals/milk.jpg', quantity: 1  },  // New Item
    ],
    ar: [
      { name: 'جبن أبيض', calories: 402, fats: 33, carbs: 1.3, protein: 21, image: '/Meals/white_cheese.jpg', quantity: 1  },
      { name: 'زبادي', calories: 150, fats: 8, carbs: 11.4, protein: 8.5, image: '/Meals/yogurt.jpg', quantity: 1  },
      { name: 'حليب', calories: 42, fats: 1, carbs: 5, protein: 3.4, image: '/Meals/milk.jpg', quantity: 1  },  // New Item
    ],
  },
  Fruits: {
    en: [
      { name: 'Apple', calories: 95, fats: 0.3, carbs: 25, protein: 0.5, image: '/Meals/apple.jpg', quantity: 1  },
      { name: 'Banana', calories: 105, fats: 0.3, carbs: 27, protein: 1.3, image: '/Meals/banana.jpg', quantity: 1  },
      { name: 'Avocado', calories: 234, fats: 21, carbs: 12, protein: 2.9, image: '/Meals/avocado.jpg', quantity: 1  },
      { name: 'Dates', calories: 277, fats: 0.2, carbs: 75, protein: 2, image: '/Meals/dates.jpg', quantity: 1  },  // New Item
      { name: 'Orange', calories: 47, fats: 0.1, carbs: 12, protein: 0.9, image: '/Meals/orange.jpg', quantity: 1  },  // New Item
    ],
    ar: [
      { name: 'تفاح', calories: 95, fats: 0.3, carbs: 25, protein: 0.5, image: '/Meals/apple.jpg', quantity: 1  },
      { name: 'موز', calories: 105, fats: 0.3, carbs: 27, protein: 1.3, image: '/Meals/banana.jpg', quantity: 1  },
      { name: 'أفوكادو', calories: 234, fats: 21, carbs: 12, protein: 2.9, image: '/Meals/avocado.jpg', quantity: 1  },
      { name: 'تمر', calories: 277, fats: 0.2, carbs: 75, protein: 2, image: '/Meals/dates.jpg', quantity: 1  },  // New Item
      { name: 'برتقال', calories: 47, fats: 0.1, carbs: 12, protein: 0.9, image: '/Meals/orange.jpg', quantity: 1  },  // New Item
    ],
  },
  Nuts: {
    en: [
      { name: 'Almonds', calories: 576, fats: 49.4, carbs: 21.7, protein: 21.2, image: '/Meals/almonds.jpg', quantity: 1  },
      { name: 'Peanuts', calories: 567, fats: 49, carbs: 16, protein: 26, image: '/Meals/peanuts.jpg', quantity: 1  },  // New Item
    ],
    ar: [
      { name: 'لوز', calories: 576, fats: 49.4, carbs: 21.7, protein: 21.2, image: '/Meals/almonds.jpg', quantity: 1  },
      { name: 'فول سوداني', calories: 567, fats: 49, carbs: 16, protein: 26, image: '/Meals/peanuts.jpg', quantity: 1  },  // New Item
    ],
  },
};


const ClientNutritionPage: React.FC = () => {
  const { user } = useAuth();
  const { language } = useLanguage();
  const [clientNutrition, setClientNutrition] = useState<Nutrition[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<FoodOption[][]>([]);
  const [dailyMeals, setDailyMeals] = useState(3);
  // const [remainingNutrition, setRemainingNutrition] = useState<Nutrition[]>([
  //   { type: 'Calories', quantity: 0 },
  //   { type: 'Fats', quantity: 0 },
  //   { type: 'Carbs', quantity: 0 },
  //   { type: 'Protein', quantity: 0 },
  // ]);
  const [initialNutrition, setInitialNutrition] = useState<Nutrition[]>([
    { type: 'Calories', quantity: 0 },
    { type: 'Fats', quantity: 0 },
    { type: 'Carbs', quantity: 0 },
    { type: 'Protein', quantity: 0 },
  ]);
  
  const [remainingNutrition, setRemainingNutrition] = useState<Nutrition[]>([
    { type: 'Calories', quantity: 0 },
    { type: 'Fats', quantity: 0 },
    { type: 'Carbs', quantity: 0 },
    { type: 'Protein', quantity: 0 },
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

      const email = user.primaryEmailAddress?.emailAddress || user.email;
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
        setInitialNutrition(nutritions); // Set the initial nutrition values
        setRemainingNutrition(nutritions); 

        const totalNutrition = nutritions.reduce(
          (acc: { calories: number; fats: number; carbs: number; protein: number }, item: Nutrition) => {
            if (item.type === 'Calories') {
              return { ...acc, calories: acc.calories + item.quantity };
            } else if (item.type === 'Fats') {
              return { ...acc, fats: acc.fats + item.quantity };
            } else if (item.type === 'Carbs') {
              return { ...acc, carbs: acc.carbs + item.quantity };
            } else if (item.type === 'Protein') {
              return { ...acc, protein: acc.protein + item.quantity };
            } else {
              return acc;
            }
          },
          { calories: 0, fats: 0, carbs: 0, protein: 0 }
        );

        setRemainingNutrition([
          { type: 'Calories', quantity: totalNutrition.calories },
          { type: 'Fats', quantity: totalNutrition.fats },
          { type: 'Carbs', quantity: totalNutrition.carbs },
          { type: 'Protein', quantity: totalNutrition.protein },
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

  const ensureNumber = (value: any, defaultValue: number = 0): number => {
    const number = Number(value);
    return isNaN(number) ? defaultValue : number;
  };

  // const calculateFinalCalories = (): number => {
  //   return remainingNutrition.reduce((total, nutrition) => {
  //     const quantity = nutrition.quantity || 0;
  //     if (nutrition.type === 'Fats') {
  //       return total + quantity * 9; // 9 calories per gram of fat
  //     } else if (nutrition.type === 'Carbs' || nutrition.type === 'Protein') {
  //       return total + quantity * 4; // 4 calories per gram of carbs or protein
  //     }
  //     return total;
  //   }, 0);
  // };



  const handleQuantityChange = (food: FoodOption, quantity: number) => {
    // Update the food item's quantity and its corresponding nutrition values
    const updatedFood = {
      ...food,
      quantity,
      calories: Math.round(food.calories * quantity),  // Multiply the values by the selected quantity
      fats: Number((food.fats * quantity).toFixed(1)),
      carbs: Number((food.carbs * quantity).toFixed(1)),
      protein: Number((food.protein * quantity).toFixed(1)),
    };
  
    // Update the meals state with the new food values
    setSelectedMeals((prevMeals) => {
      const newSelectedMeals = [...prevMeals];
      
      if (!newSelectedMeals[selectedMealIndex]) {
        newSelectedMeals[selectedMealIndex] = [];
      }
      
      // Update the specific food item in the selected meal
      newSelectedMeals[selectedMealIndex] = newSelectedMeals[selectedMealIndex].map((f) =>
        f.name === food.name ? updatedFood : f
      );
      
      recalculateRemainingNutrition(newSelectedMeals);  // Recalculate the nutrition after update
      return newSelectedMeals;
    });
  };
  





  const calculateFinalCalories = (): number => {
    const fats = ensureNumber(remainingNutrition.find(nut => nut.type === 'Fats')?.quantity, 0);
    const carbs = ensureNumber(remainingNutrition.find(nut => nut.type === 'Carbs')?.quantity, 0);
    const protein = ensureNumber(remainingNutrition.find(nut => nut.type === 'Protein')?.quantity, 0);
  
    return (fats * 9) + (carbs * 4) + (protein * 4);
  };
  

  const handleRemoveFood = (mealIndex: number, foodIndex: number) => {
    const updatedMeals = selectedMeals.map((meal, index) =>
      index === mealIndex ? meal.filter((_, idx) => idx !== foodIndex) : meal
    );

    setSelectedMeals(updatedMeals);
    recalculateRemainingNutrition(updatedMeals);
  };

  // const handleFoodSelect = (food: FoodOption) => {
  //   const adjustedFood = {
  //     ...food,
  //     calories: Math.round((food.calories * 50) / 50), // Fixed at 50g
  //     fats: Number(((food.fats * 50) / 50).toFixed(1)),
  //     carbs: Number(((food.carbs * 50) / 50).toFixed(1)),
  //     protein: Number(((food.protein * 50) / 50).toFixed(1)),
  //   };
  
  //   setSelectedMeals((prevMeals) => {
  //     const newSelectedMeals = [...prevMeals];
  
  //     if (!newSelectedMeals[selectedMealIndex]) {
  //       newSelectedMeals[selectedMealIndex] = [];
  //     }
  
  //     // Add the selected food to the current meal
  //     newSelectedMeals[selectedMealIndex] = [...newSelectedMeals[selectedMealIndex], adjustedFood];
  
  //     // Recalculate remaining nutrition based on the updated meals
  //     recalculateRemainingNutrition(newSelectedMeals);
  
  //     return newSelectedMeals;
  //   });
  // };
  



  const handleFoodSelect = (food: FoodOption, quantity: number = 1) => {
    const adjustedFood = {
      ...food,
      quantity, // Use the provided quantity
      calories: Math.round(food.calories * quantity),  // Adjust values based on quantity
      fats: Number((food.fats * quantity).toFixed(1)),
      carbs: Number((food.carbs * quantity).toFixed(1)),
      protein: Number((food.protein * quantity).toFixed(1)),
    };
  
    setSelectedMeals((prevMeals) => {
      const newSelectedMeals = [...prevMeals];
  
      if (!newSelectedMeals[selectedMealIndex]) {
        newSelectedMeals[selectedMealIndex] = [];
      }
  
      // Add the selected food to the current meal
      newSelectedMeals[selectedMealIndex] = [...newSelectedMeals[selectedMealIndex], adjustedFood];
  
      // Recalculate remaining nutrition based on the updated meals
      recalculateRemainingNutrition(newSelectedMeals);
  
      return newSelectedMeals;
    });
  };
  


  const recalculateRemainingNutrition = (meals: FoodOption[][]) => {
    const totalSelectedNutrition = meals.flat().reduce(
      (acc, food) => {
        acc.calories += food.calories;
        acc.fats += food.fats;
        acc.carbs += food.carbs;
        acc.protein += food.protein;
        return acc;
      },
      { calories: 0, fats: 0, carbs: 0, protein: 0 }
    );
  
    const updatedRemainingNutrition = initialNutrition.map((nut) => {
      if (nut.type === 'Calories') {
        return { ...nut, quantity: nut.quantity - totalSelectedNutrition.calories };
      } else if (nut.type === 'Fats') {
        return { ...nut, quantity: nut.quantity - totalSelectedNutrition.fats };
      } else if (nut.type === 'Carbs') {
        return { ...nut, quantity: nut.quantity - totalSelectedNutrition.carbs };
      } else if (nut.type === 'Protein') {
        return { ...nut, quantity: nut.quantity - totalSelectedNutrition.protein };
      }
      return nut;
    });
  
    setRemainingNutrition(updatedRemainingNutrition); // Update remaining nutrition
  };
  




// const recalculateRemainingNutrition = (meals: FoodOption[][]) => {
//   const totalSelectedNutrition = meals.flat().reduce(
//     (acc, food) => {
//       acc.calories += food.calories;
//       acc.fats += food.fats;
//       acc.carbs += food.carbs;
//       acc.protein += food.protein;
//       return acc;
//     },
//     { calories: 0, fats: 0, carbs: 0, protein: 0 }
//   );

//   // Subtract the selected meal nutrition from the initial values
//   const updatedRemainingNutrition = initialNutrition.map((nut) => {
//     if (nut.type === 'Calories') {
//       return { ...nut, quantity: nut.quantity - totalSelectedNutrition.calories };
//     } else if (nut.type === 'Fats') {
//       return { ...nut, quantity: nut.quantity - totalSelectedNutrition.fats };
//     } else if (nut.type === 'Carbs') {
//       return { ...nut, quantity: nut.quantity - totalSelectedNutrition.carbs };
//     } else if (nut.type === 'Protein') {
//       return { ...nut, quantity: nut.quantity - totalSelectedNutrition.protein };
//     }
//     return nut;
//   });

//   setRemainingNutrition(updatedRemainingNutrition); // Update remaining nutrition
// };


  const handleMealSelect = (index: number) => {
    setSelectedMealIndex(index);
  };

  const handleAssignAndSaveNutrition = async () => {
    const email = user.primaryEmailAddress?.emailAddress || user.email;
    if (!email) return;

    try {
      const saveResponse = await fetch('/api/adminAddNutrition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nutritions: remainingNutrition }),
      });

      if (!saveResponse.ok) throw new Error('Error saving remaining nutrition');
      const assignResponse = await fetch('/api/assignMeals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, meals: selectedMeals }),
      });

      if (!assignResponse.ok) throw new Error('Error assigning meals');
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
      <div className="flex flex-col items-center justify-center p-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <div className="bg-[var(--background-color)] text-[var(--text-color)] p-4 rounded-lg shadow-md w-full">
          <h1 className="text-xl md:text-2xl font-semibold text-center">{language === 'en' ? 'Client Nutrition' : 'تغذية العميل'}</h1>

          <div className="my-4">
            <label className="block text-center text-lg font-semibold mb-2">{language === 'en' ? 'Number of Daily Meals' : 'عدد الوجبات اليومية'}</label>
            <select
              value={dailyMeals}
              onChange={(e) => setDailyMeals(parseInt(e.target.value))}
              className="w-full p-2 text-center border rounded-md bg-[var(--select-background-color)]"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="my-4">
            <h2 className="text-lg text-center font-semibold">{language === 'en' ? 'Select Meal' : 'اختر وجبة'}</h2>
            <div className="flex justify-center flex-wrap gap-2">
              {Array.from({ length: dailyMeals }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMealIndex(index)}
                  className={`px-3 py-2 rounded-md ${selectedMealIndex === index ? 'bg-blue-500 text-white' : 'bg-[var(--button-background-color)] text-[var(--button-text-color)]'}`}
                >
                  {language === 'en' ? `Meal ${index + 1}` : `وجبة ${index + 1}`} 
                  <FontAwesomeIcon icon={faBowlFood} />
                </button>
              ))}
            </div>
          </div>

          <div className="my-4">
            <h2 className="text-lg font-semibold text-center">{language === 'en' ? 'Select Food Category' : 'اختر فئة الطعام'}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(foodCategoryIcons).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFoodCategory(category as keyof typeof foodCategoryIcons)}
                  className={`px-4 py-2 rounded-md ${selectedFoodCategory === category ? 'bg-blue-500 text-white' : 'bg-[var(--button-background-color)] text-[var(--button-text-color)]'}`}
                >
                  <FontAwesomeIcon icon={foodCategoryIcons[category]} className="w-6 h-6" />
                  {language === 'en' ? category : translateCategory(category as keyof typeof foodCategoryIcons)}
                </button>
              ))}
            </div>
          </div>

          <div className="my-4">
            <h2 className="text-lg text-center font-semibold">
              {language === 'en' ? 'Select Food Options' : 'اختر خيارات الطعام'} (50g per item)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {foodOptions[selectedFoodCategory][language].map((food, foodIndex) => (
                <div key={food.name} className="flex items-center justify-between p-4 bg-gray-700 border bg-[var(--select-background-color)] border-gray-300 rounded-md shadow-md">
                  {/* <div className="flex items-center">
                    <img src={food.image} alt={food.name} className="w-12 h-12 rounded-full mr-4" />
                    <div className="flex flex-col text-white">
                      <span>{food.name}</span>
                      <span>{food.calories} {language === 'en' ? 'Calories' : 'سعرات حرارية'}</span>
                    </div>
                  </div> */}
                  <div className="flex items-center">
                    <img src={food.image} alt={food.name} className="w-12 h-12 rounded-full mr-4" />
                    <div className="flex flex-col text-white">
                      <span>{food.name} (per 50g)</span> {/* Add 'per 50g' here */}
                      <span>{food.calories} {language === 'en' ? 'Calories' : 'سعرات حرارية'}</span>
                    </div>
                  </div>

                  <button onClick={() => handleFoodSelect(food)} className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-200">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="my-4">
            <h2 className="text-lg font-semibold text-center">{language === 'en' ? 'Your Meals:' : 'وجباتك:'}</h2>
            {selectedMeals.map((meal, mealIndex) => (
              <div key={mealIndex} className="my-2">
                <h3 className="text-lg text-center font-bold">{language === 'en' ? `Meal ${mealIndex + 1}` : `وجبة ${mealIndex + 1}`}</h3>
                <div className="flex flex-wrap gap-2">
                  {meal.map((food, foodIndex) => (
                    <div key={foodIndex} className="p-2 bg-gray-100 rounded-md flex items-center">
                      <img src={food.image} alt={food.name} className="w-10 h-10 mr-2" />
                      <div className="text-center">
                        <span>{food.name}</span>
                        <span>{food.calories} {language === 'en' ? 'Calories' : 'سعرات حرارية'} (50g)</span>
                      </div>
                      <button onClick={() => handleRemoveFood(mealIndex, foodIndex)} className="ml-2 text-red-500">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="my-4">
            <h2 className="text-lg font-semibold text-center">{language === 'en' ? 'Remaining Nutrition' : 'التغذية المتبقية'}</h2>
            <div>
              <div>{language === 'en' ? 'Fats' : 'دهون'}: {ensureNumber(remainingNutrition.find(nut => nut.type === 'Fats')?.quantity).toFixed(1)}</div>
              <div>{language === 'en' ? 'Carbs' : 'كربوهيدرات'}: {ensureNumber(remainingNutrition.find(nut => nut.type === 'Carbs')?.quantity).toFixed(1)}</div>
              <div>{language === 'en' ? 'Protein' : 'بروتين'}: {ensureNumber(remainingNutrition.find(nut => nut.type === 'Protein')?.quantity).toFixed(1)}</div>
              <div>{language === 'en' ? 'Final Calories' : 'السعرات الحرارية النهائية'}: {calculateFinalCalories()}</div>
            </div>
          </div>

          <button onClick={handleAssignAndSaveNutrition} className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md">
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

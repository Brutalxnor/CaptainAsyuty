const testimonials = [
    { text: "خدمة ممتازة وتخصيص عالي يناسب احتياجاتي. أوصي بهذه الخدمة للجميع.", name: "عميد بالجيش المصرى" },
    { text: "تجربة رائعة وممتعة. البرامج المتاحة فعلاً تساعد في تحقيق أهدافي الصحية.", name: "مقدم بالجيش المصرى" },
    { text: "دعم متميز من الفريق. يمكنني أن أرى فرقًا كبيرًا في مستوى لياقتي منذ أن بدأت استخدام هذا البرنامج.", name: "رئيس مطار ألماظة"},
    { text: "خدمة ممتازة وتخصيص عالي يناسب احتياجاتي. أوصي بهذه الخدمة للجميع.", name: "رئيس تويوتا الكويت" }
  ];    
  
  const Testimonials: React.FC = () => {
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">عملائنا يحبوننا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-100 p-6 ml-3 mr-3 rounded-2xl shadow-md">
                <p className="text-xl mb-4">“{testimonial.text}”</p>
                <p className="text-right font-bold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Testimonials;
  
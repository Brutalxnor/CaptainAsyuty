const Pricing = () => {
  return (
    <div className="pricing-container ">
      <h2 className=" mt-15 text-center text-4xl font-bold mb-8">خطط معقولة ومرنة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="pricing-card">
          <h3>شهري</h3>
          <p className="price">499 جنيه / شهر</p>
          <div className="features">
            <p>تحديثات التمرين أسبوعياً</p>
            <p>خطة تغذية</p>
            <p>مساعدة أساسية</p>
          </div>
          <button className="subscribe-btn">اشترك الآن</button>
        </div>
        <div className="pricing-card">
          <h3>سنوي</h3>
          <p className="price">3999 جنيه / سنة</p>
          <div className="features">
            <p>تحديثات التمرين أسبوعياً</p>
            <p>خطة تغذية</p>
            <p>مساعدة ذات أولوية</p>
          </div>
          <button className="subscribe-btn">اشترك الآن</button>
        </div>
        <div className="pricing-card">
          <h3>مكالمات فيديو</h3>
          <p className="price">999 جنيه / شهر</p>
          <div className="features">
            <p>تحديثات التمرين يومياً</p>
            <p>خطة تغذية</p>
            <p>مساعدة شخصية</p>
          </div>
          <button className="subscribe-btn">اشترك الآن</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

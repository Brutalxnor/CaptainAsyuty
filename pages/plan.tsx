import Layout from '@/components/layout';

const PlansPage = () => {
  return (
    <Layout>
      <h2 className="text-2xl mb-4">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="text-xl mb-2">Monthly Plan</h3>
          <p className="mb-4">Training and diet plan for one month.</p>
          <button className="btn btn-primary">Select Plan</button>
        </div>
        <div className="card">
          <h3 className="text-xl mb-2">3-Month Plan</h3>
          <p className="mb-4">Training and diet plan for three months.</p>
          <button className="btn btn-primary">Select Plan</button>
        </div>
        <div className="card">
          <h3 className="text-xl mb-2">Annual Plan</h3>
          <p className="mb-4">Training and diet plan for one year.</p>
          <button className="btn btn-primary">Select Plan</button>
        </div>
      </div>
    </Layout>
  );
}

export default PlansPage;

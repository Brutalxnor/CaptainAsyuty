import { FC } from 'react';
import { FaBullhorn, FaVideo, FaUsers, FaClipboard, FaUtensils, FaEnvelope } from 'react-icons/fa';

const MembershipPerks: FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">مميزات العضوية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <FaBullhorn className="mx-auto text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">ابقى متحمس</h3>
            <p>ننشر تدريبات جديدة بانتظام حتى تظل متحمسًا ببرامجنا. ثق بنا، لن تشعر بالملل أبدًا من روتينك.</p>
          </div>
          <div className="text-center">
            <FaVideo className="mx-auto text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">فيديوهات سهلة المتابعة</h3>
            <p>فيديوهاتنا مع تعليمات بسيطة تضمن أنك تتدرب بالطريقة الصحيحة وتتجنب الإصابات.</p>
          </div>
          <div className="text-center">
            <FaUsers className="mx-auto text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">مجتمع</h3>
            <p>نادي ترافيل ويل يتمحور حول بناء مجتمع يهتم بالمحافظة على العادات الصحية أو إنشائها، حتى أثناء التنقل!</p>
          </div>
          <div className="text-center">
            <FaClipboard className="mx-auto text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">برامج التدريبات</h3>
            <p>برامجنا مخصصة لجميع مستويات اللياقة والأعمار، حتى تتمكن من تحقيق أهدافك مهما كانت.</p>
          </div>
          <div className="text-center">
            <FaUtensils className="mx-auto text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">تغذية مبسطة</h3>
            <p>تعرف بالضبط ما يجب تناوله، وما يجب شراؤه من البقالة، وكيفية اكتشاف الأطعمة التي ستبقيك نشيطًا ومفعمًا بالحيوية.</p>
          </div>
          <div className="text-center">
            <FaEnvelope className="mx-auto text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">تحدث معي</h3>
            <p>راسلني مباشرة في التطبيق إذا كان لديك أي أسئلة. نحن دائمًا نسعى لتحسين برامجنا ودعمنا!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPerks;

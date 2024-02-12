import CurrentWarStatusCard from "./helpers/CurrentWarStatusCard";
import SectionTitle from "./helpers/SectionTitle";

function CurrentWarStatus() {
  return (
    <section>
      <SectionTitle name="حالة الحرب الحالية" />

      <div className="grid grid-cols-1 gap-2 p-2 mt-1 text-black bg-white sm:grid-cols-2 xl:grid-cols-3">
        <p className="font-medium font-cairo bg-[#f5f5f5] p-1 rounded">
          يوم البحث: <span className="text-sm font-bold">2024/2/11</span>
        </p>

        <p className="font-medium font-cairo bg-[#f5f5f5] p-1 rounded">
          نوع الحرب:{" "}
          <span className="text-sm font-bold">
            20 <span>ضد</span> 20
          </span>
        </p>

        <p className="font-medium font-cairo bg-[#f5f5f5] p-1 rounded">
          بدأت الحرب: <span className="text-sm font-bold">نعم</span>
        </p>

        <p className="font-medium font-cairo bg-[#f5f5f5] p-1 rounded">
          انتهت الحرب: <span className="text-sm font-bold">لا</span>
        </p>

        <p className="font-medium font-cairo bg-[#f5f5f5] p-1 rounded xl:col-span-2">
          الفائز: <span className="text-sm font-bold">لا أحد</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 mt-1 sm:grid-cols-2">
        <CurrentWarStatusCard myClan name="نخبة العرب" stars={0} totalDestruction={0} />

        <CurrentWarStatusCard name="Sta.Monica Clan" stars={0} totalDestruction={0} />
      </div>
    </section>
  );
}

export default CurrentWarStatus;

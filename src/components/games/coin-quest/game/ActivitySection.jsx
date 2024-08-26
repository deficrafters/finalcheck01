import SectionIdentifier from "@/components/common/SectionIdentifier";
import ActivityTable from "@/components/tables/ActivityTable";

export default function ActivitySection() {
  return (
    <section className={`relative my-8`}>
      <SectionIdentifier id="activities" />
      <div className={`wrapper-desk`}>
        <h3
          className={`text-[24px] text-center md:text-left font-semibold tracking-tight`}
        >
          Activities
        </h3>
        <ActivityTable />
      </div>
    </section>
  );
}

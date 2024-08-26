import SectionIdentifier from "@/components/common/SectionIdentifier";
import JMWinnersTable from "@/components/tables/JMWinnersTable";

export default function WinnerSection() {
  return (
    <section className={`relative`}>
      <SectionIdentifier  />
      <div className={`wrapper-desk py-8`}>
        <p
          className={`text-[20px] xs:text-[24px] font-semibold text-center lg:text-left mb-4`}
        >
          Jackpot Winners
        </p>
        <JMWinnersTable />
      </div>
    </section>
  );
}

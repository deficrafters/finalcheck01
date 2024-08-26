import SectionIdentifier from "@/components/common/SectionIdentifier";
import WinnersTable from "./WinnersTable";

export default function WinnerSection({ sectionTitle, header, rows, ShowMine }) {
  return (
    <section id="winners" className={`relative`}>
      <SectionIdentifier  />

      <div className={`wrapper-desk py-8`}>
        <p
          className={`text-[20px] xs:text-[24px] font-semibold text-center lg:text-left mb-4`}
        >
          {sectionTitle}
        </p>
        <WinnersTable header={header} rows={rows} ShowMine={ShowMine} sectionTitle={sectionTitle} />
      </div>
    </section>
  );
}

import SectionIdentifier from "@/components/common/SectionIdentifier";
import DrawTable from "@/components/tables/DrawTable";

export default function DrawTableSection({ drawDate, header, rows }) {
  return (
    <section className={`relative`}>
      <SectionIdentifier id="draw" />
      <div className={`wrapper-desk py-8`}>
        <h1
          className={`text-[20px] xs:text-[24px] font-semibold text-center lg:text-left mb-4`}
        >
          <span className={`text-[18px] font-normal uppercase tracking-[6px]`}>
            Draw Date
          </span>
          <span className={`block capitalize tracking-tight`}>{drawDate}</span>
        </h1>
        <DrawTable header={header} rows={rows} />
      </div>
    </section>
  );
}

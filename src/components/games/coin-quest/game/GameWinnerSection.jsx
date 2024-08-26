import GameWinnersTable from "@/components/tables/WeeklyWinnersTable";

export default function GameWinnerSection() {
  return (
    <section className={`relative my-8`}>
      <div
       
        className={`absolute -top-[75px] left-0 h-[75px]`}
      ></div>
      <div className={`wrapper-desk`}>
        <h3
          className={`text-[24px] text-center md:text-left font-semibold tracking-tight`}
        >
          Game Winners
        </h3>
        <GameWinnersTable />
      </div>
    </section>
  );
}

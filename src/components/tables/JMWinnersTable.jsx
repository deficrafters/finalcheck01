import { content } from "@/utils/content.js";
const { header, rows } = content.table.winners.jackpotWinners;

export default function JMWinnersTable() {
  return (
    <div className={`overflow-auto scroll`}>
      <div className={`w-[600px] sm:w-full rounded-md mt-6 overflow-hidden`}>
        {/* HEADER */}
        <div className={`w-full grid grid-cols-4 bg-cool-10`}>
          {header.map((item, index) => (
            <h6
              key={index}
              className={`text-[14px] self-center justify-self-center py-6`}
            >
              {item}
            </h6>
          ))}
        </div>
        {/* ROWS */}
        <div>
          {rows.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 bg-cool-20 even:bg-cool-30 py-4`}
            >
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] self-center justify-self-center tracking-tighter italic`}
              >
                {item.user}
              </p>
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
              >
                {item.gameTitle}
              </p>
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
              >
                {item.winnings}
              </p>
              <div
                className={`text-[20px] font-medium self-center justify-self-center flex flex-col items-end leading-[110%] tracking-tighter italic`}
              >
                <div
                  className={`text-[14px] text-cool-80 font-normal uppercase `}
                >
                  {item.winningDate.day}&nbsp;
                  {item.winningDate.month}
                </div>
                {item.winningDate.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

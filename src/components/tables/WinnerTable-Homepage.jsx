import { content } from "@/utils/content.js";

const { header, rows } = content.table.homeWinnerTable;

export default function HomepageWinnerTable() {
  return (
    <div className={`rounded-md overflow-hidden`}>
      {/* HEADER */}
      <div className={`w-full grid grid-cols-3 bg-cool-10`}>
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
            className={`grid grid-cols-3 bg-cool-20 even:bg-cool-30 py-6`}
          >
            <p
              className={`text-[16px] xs:text-[18px] font-medium italic self-center justify-self-center`}
            >
              {item.name}
            </p>
            <div
              className={`self-center justify-self-center flex flex-col items-end`}
            >
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-semibold italic`}
              >
                {item.entries}
              </p>
            </div>
            <div
              className={`self-center justify-self-center flex flex-col items-end`}
            >
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-semibold italic`}
              >
                {item.rewards}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

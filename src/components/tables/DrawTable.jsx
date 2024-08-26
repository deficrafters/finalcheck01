export default function DrawTable({ header, rows }) {
  return (
    <div className={`overflow-auto scroll`}>
      <div className={`w-[897px] xl:w-full rounded-md mt-6 overflow-hidden`}>
        {/* HEADER */}
        <div className={`w-full grid grid-cols-5 bg-cool-10`}>
          {header.map((item, index) => (
            <h6
              key={index}
              className={`text-[14px] self-center justify-self-center py-6 text-slate-300`}
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
              className={`grid grid-cols-5 bg-cool-20 even:bg-cool-30 py-4`}
            >
              <div
                className={`self-center justify-self-center text-center bg-brandShade-30 max-w-[130px] w-[100%] py-3 rounded-md`}
              >
                <p
                  className={`text-[16px] xs:text-[18px] uppercase font-semibold leading-none italic`}
                >
                  {item.match}
                </p>
              </div>
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
              >
                {item.winningNumbers}
              </p>
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
              >
                {item.prize}
              </p>
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
              >
                {item.winners}
              </p>
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
              >
                {item.totalPrize}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

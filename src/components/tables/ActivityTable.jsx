export default function ActivityTable({ getAllData, header, rows, data }) {


  return (
    <div className={`rounded-md overflow-hidden mt-6`}>
      {/* HEADER */}
      <div className={`w-full grid grid-cols-5 bg-cool-50/50`}>
        {header.map((item, index) => (
          <h6
            key={index}
            className={`text-[14px] self-center justify-self-center py-3`}
          >
            {item}
          </h6>
        ))}
      </div>
      {/* ROWS */}
      <div>
        {data && data.map((item, index) => {

          const date = new Date(item.createdAt);
          const day = date.getUTCDate().toString().padStart(2, '0');
          const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
          const year = date.getUTCFullYear();

          const formattedDate = `${day}/${month}/${year}`;

          return <div
            key={index}
            className={`grid grid-cols-5 bg-cool-30/30 even:bg-cool-30/30 py-4 border-b-2 last:border-b-0 border-cool-30/20 `}
          >
            <p
              className={`self-center justify-self-center tracking-tighter italic`}
            >
              {item.UserName}
            </p>
            <p
              className={`font-medium self-center justify-self-center tracking-tighter`}
            >
              {item.TicketCount}
            </p>
            <p
              className={`font-medium self-center justify-self-center tracking-tighter`}
            >
              {item.Type}
            </p>
            <p
              className={`font-medium self-center justify-self-center tracking-tighter`}
            >
              {formattedDate}
            </p>
            <p className={`self-center justify-self-center`}>

              {

                item.Type == "Wallet" ?

                  `${item.Type}`

                  :

                  <a target="__blank" href={`https://testnet.bscscan.com/tx/` + item.Hash }> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    HASH
                  </button>

                  </a>

              }


            </p>
          </div>
        }

        )}
      </div>
    </div>
  );
}

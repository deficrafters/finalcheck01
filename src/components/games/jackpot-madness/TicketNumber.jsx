import { FaStar, FaTicketSimple } from "react-icons/fa6";

export default function TicketNumber({ ticketNumber, title = true }) {
  return (
    <div className="flex flex-col items-center text-sm capitalize tracking-wide">
      <div className="relative">
        <FaTicketSimple className="text-cool-50  text-[24px] -rotate-[15deg]" />
        <FaStar className="text-white absolute top-0 left-0 translate-x-[40%] translate-y-[35%] -rotate-[15deg] scale-90" />
      </div>
      {title && (
        <div>
          <span className="text-cool-80/70">ticket</span> {ticketNumber}
        </div>
      )}
    </div>
  );
}

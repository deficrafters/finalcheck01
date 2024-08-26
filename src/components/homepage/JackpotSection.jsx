import Image from "next/image";
import Link from "next/link";
import SectionIdentifier from "../common/SectionIdentifier";

export default function JackpotSection() {
  return (
    <section className={`relative`}>
      <SectionIdentifier id="jackpot" />
      <div
        className={`wrapper-desk jackpotBG bg-fixed py-8 grid grid-cols-5 gap-6 md:gap-0 `}
      >
        <Image
          src={"/JM_Banner Logo.png"}
          alt=""
          width={300}
          height={300}
          className={`col-span-5 md:col-span-2 w-auto h-auto justify-self-center md:justify-self-end`}
        />
        <div
          className={`col-span-5 md:col-span-3 self-center justify-self-center flex flex-col items-center md:items-start`}
        >
          <h3 className="text-[28px] xs:text-[40px] xl:text-[48px] leading-none tracking-tight font-medium uppercase">
            Redefining Jackpot
          </h3>
          <p className="text-[18px] xs:text-[24px] xl:text-[32px] text-center md:text-left font-light text-cool-80">
            Bigger Pool Bigger Rewards
          </p>
          <p className="text-hl-01 text-[28px] xl:text-[32px] text-center md:text-left tracking-tighter">
            Unlimited Winning
          </p>
          <Link
            href={"/games/jackpot-madness"}
            className={`btnRect !px-5 !py-4 !text-[18px] xl:!text-[20px] !rounded-lg mt-2`}
          >
            Play Now
          </Link>
        </div>
      </div>
    </section>
  );
}

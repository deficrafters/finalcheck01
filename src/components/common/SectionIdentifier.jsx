"use client";
import { usePathname } from "next/navigation";
export default function SectionIdentifier({ id }) {
  const pathname = usePathname();

  return (
    <div
      id={id}
      className={`absolute ${
        pathname === "/" ? "-top-[160px]" : "-top-[75px]"
      } left-0 h-[75px]`}
    ></div>
  );
}

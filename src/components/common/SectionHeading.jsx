export default function SectionHeading({ heading = "select entries" }) {
  return (
    <h3
      className={`text-[24px] text-center md:text-left font-semibold tracking-tight capitalize`}
    >
      {heading}
    </h3>
  );
}

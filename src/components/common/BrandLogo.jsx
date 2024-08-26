import Image from "next/image";
import Link from "next/link";

export default function BrandLogo({ imageSource, width = "95", onClick }) {
  return (
    <Link onClick={onClick} href={"/"} className={`max-w-max flex flex-col`}>
      <Image
        src={imageSource}
        priority={true}
        width={width}
        height="0"
        alt="logo"
        style={{ width: "auto", height: "auto" }}
      />
      <h1 className="text-[--brandColor] text-center text-sm">DreamGameZ</h1>
    </Link>
  );
}

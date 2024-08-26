import Link from "next/link";

export default function RegisterButton({ onCloseLogin }) {

  return (
    <Link onClick={onCloseLogin} href={"?showRegister=true"} className={`register`}>
      Register
    </Link>
  );
}

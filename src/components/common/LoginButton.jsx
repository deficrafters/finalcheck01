import Link from "next/link";

export default function LoginButton({ onHandleLogin }) {
  return (
    <Link href={"?showLogin=true"} onClick={onHandleLogin} className={`login`}>
      Login
    </Link>
  );
}

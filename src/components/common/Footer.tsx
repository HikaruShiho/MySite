import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-full h-14 flex justify-center items-center bg-slate-500 ">
      <small className="text-white text-sm">&copy; 2022 SHIHO</small>
    </footer>
  );
};

export default Footer;

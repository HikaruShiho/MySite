import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <div className="w-full flex item-center justify-between px-10 py-6 bg-slate-300">
        <h1>
          <Link href="/">
            <span>Shiho&#x0027;s Site</span>
          </Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/profile">プロフィール</Link>
          </li>
          <li>
            <Link href="/article">Qiita</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

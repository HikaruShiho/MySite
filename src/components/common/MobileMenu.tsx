import Link from "next/link";
import { stack as Menu } from "react-burger-menu";

const MobileMenu = () => {
  return (
    <>
      <Menu
        isOpen={false}
        width={180}
        className="bg-baseColor03 dark:bg-baseColor01"
        itemListElement={"nav"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
      >
        <Link
          href={"/profile"}
          className="text-base text-baseColor02 font-bold my-4 dark:text-white"
        >
          Profile
        </Link>
        <Link
          href={"/works"}
          className="text-base text-baseColor02 font-bold my-4 dark:text-white"
        >
          Works
        </Link>
        <Link
          href={"/article"}
          className="text-base text-baseColor02 font-bold my-4 dark:text-white"
        >
          Qiita
        </Link>
      </Menu>
    </>
  );
};

export default MobileMenu;

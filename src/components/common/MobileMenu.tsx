import Link from "next/link";
import { stack as Menu } from "react-burger-menu";

const MobileMenu = () => {
  return (
    <>
      <Menu
        isOpen={false}
        width={180}
        className="bg-white"
        itemListElement={"nav"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
      >
        <Link
          href={"/profile"}
          className="text-base text-baseColor02 font-bold my-4"
        >
          Profile
        </Link>
        <Link
          href={"/works"}
          className="text-base text-baseColor02 font-bold my-4"
        >
          Works
        </Link>
        <Link
          href={"/qiita"}
          className="text-base text-baseColor02 font-bold my-4"
        >
          Qiita
        </Link>
      </Menu>
    </>
  );
};

export default MobileMenu;

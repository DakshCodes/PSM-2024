import { styles } from "@/utils/styles";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { GrDocumentStore } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { TbSwitchVertical } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";
import toast from "react-hot-toast";

type Props = {
  user: [] | null;
  setOpen: (open: boolean) => void;
  handleProfile: () => void;
};

const DropDown = ({ user, setOpen, handleProfile }: Props) => {
  const router = useRouter();
  const [auth, setAuth] = useAuth();

  const handleLogOut = async () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    router.push("/login");
  };
  return (
    <Dropdown placeholder="bottom-start" className="bg-white">
      <DropdownTrigger>
        <Avatar
          src="https://i.pinimg.com/564x/24/a8/d6/24a8d67ab15d158c8190908f8bba3980.jpg"
          alt=""
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          onClick={() => {
            handleProfile();
            setOpen(false);
          }}
        >
          <div className="flex w-full items-center">
            <Avatar
              src="https://i.pinimg.com/564x/24/a8/d6/24a8d67ab15d158c8190908f8bba3980.jpg"
              alt=""
              className="w-[40px] h-[40px] cursor-pointer"
            />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              My Profile
            </span>
          </div>
        </DropdownItem>
        <DropdownItem onClick={handleLogOut}>
          <div className="flex items-center w-full">
            <AiOutlineLogout className="text-2xl ml-2 text-black" />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              Log out
            </span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;

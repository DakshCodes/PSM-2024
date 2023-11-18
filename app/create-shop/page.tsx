"use client";
import { styles } from "@/utils/styles";
import { useUser } from "@clerk/nextjs";
import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Logo from '../../public/Assets/Logo.png'

type Props = {};

const Page = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [shopData, setShopData] = useState({
    name: "",
    description: "",
    shopProductsType: "",
    avatar: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (user) {
      const data = {
        name: shopData.name,
        description: shopData.description,
        shopProductsType: shopData.shopProductsType,
        avatar: user?.imageUrl || "",
        userId: user?.id,
      };
      await axios
        .post("/api/create-shop", data)
        .then((res) => {
          setLoading(false);
          toast.success("Shop created successfully!");
          setShopData({
            name: "",
            description: "",
            shopProductsType: "",
            avatar: "",
          });
          router.push("/");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.response.data);
          setShopData({
            name: "",
            description: "",
            shopProductsType: "",
            avatar: "",
          });
        });
    }
  };

  return (
    <>
      {/* <div className="w-full h-screen flex flex-col justify-center">
        <div>
          <h1 className={`${styles.heading} text-center font-Monserrat`}>
            Start to selling with us
          </h1>
          <form
            className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto"
            onSubmit={handleSubmit}
          >
            <div className="w-full my-5">
              <label className={`${styles.label} mb-2 block`}>Shop Name</label>
              <Input
                isRequired
                type="name"
                value={shopData.name}
                onChange={(e) =>
                  setShopData({ ...shopData, name: e.target.value })
                }
                label="Becodemy"
                size="sm"
                variant="bordered"
              />
            </div>
            <div className="w-full my-5">
              <label className={`${styles.label} mb-2 block`}>
                Shop Description (Max 120 letters)
              </label>
              <Input
                isRequired
                type="text"
                label="lorem ipsum"
                size="sm"
                value={shopData.description}
                onChange={(e) =>
                  setShopData({ ...shopData, description: e.target.value })
                }
                variant="bordered"
                maxLength={120}
              />
            </div>
            <div className="w-full my-5">
              <label className={`${styles.label} mb-2 block`}>
                What you wanna sale with us?
              </label>
              <Textarea
                variant="bordered"
                value={shopData.shopProductsType}
                onChange={(e) =>
                  setShopData({ ...shopData, shopProductsType: e.target.value })
                }
                required
                placeholder="Chatgpt,Midjoureney Prompts..."
                className="col-span-12 md:col-span-6 md:mb-0"
              />
              <br />
              <Button
                className="mb-3 w-full bg-transparent h-[45px] border border-[#16c252] text-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]"
                type="submit"
                disabled={loading}
                disableAnimation={loading}
              >
                Create Shop
              </Button>
            </div>
          </form>
        </div>
      </div> */}

      <div className="relative min-h-screen  grid bg-black ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
          <div className="create-shop sm:w-1/2 xl:w-3/5 bg-[#000] h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative">
            <div className="absolute bg-black  opacity-25 inset-0 z-0" />
            <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
              <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center " />
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-[60%]  p-8  md:p-10 lg:px-14 sm:rounded-lg md:rounded-none ">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <h1 className={`${styles.heading2} text-center font-Monserrat`}>
                  Start to selling with us
                </h1>
                <div className="flex items-center justify-center ">
                  <div className="bg-black flex flex-col w-[35rem] border border-gray-900 rounded-lg px-8 py-10">
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col space-y-2 mt-10"
                    >
                      <label className="font-bold text-lg text-white ">Shop Name</label>
                      <input
                        type="name"
                        placeholder="Igniation"
                        className="border rounded-lg py-3 px-3 mt-0 bg-black border-[#fff] placeholder-white-500 text-white"
                        required
                        value={shopData.name}
                        onChange={(e) =>
                          setShopData({ ...shopData, name: e.target.value })
                        }
                      />

                      <label className="font-bold !mt-7 text-lg text-white ">Shop Description (Max 120 letters)</label>
                      <input
                        type="text"
                        placeholder="Description"
                        className="border rounded-lg py-3 px-3 mt-0 bg-black border-[#fff] placeholder-white-500 text-white"
                        required
                        value={shopData.description}
                        onChange={(e) =>
                          setShopData({ ...shopData, description: e.target.value })
                        }
                        maxLength={120}
                      />

                      <label className="font-bold !mt-7 text-lg text-white ">What you wanna sale with us?</label>
                      <textarea
                        className="border col-span-12 md:col-span-6 md:mb-0  rounded-lg py-3 px-3 mt-0 bg-black border-[#fff] placeholder-white-500 text-white"
                        required
                        maxLength={120}
                        value={shopData.shopProductsType}
                        onChange={(e) =>
                          setShopData({ ...shopData, shopProductsType: e.target.value })
                        }
                        placeholder="Chatgpt,Midjoureney Prompts..."
                      />

                      <br />
                      <button className="border border-[#fff] !mt-10  bg-black  rounded-lg py-3 font-semibold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500">Create Account</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Page;

"use client";
import { useAuth } from "@/context/auth";
import { styles } from "@/utils/styles";
import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const Page = (props: Props) => {
  const [auth, setAuth] = useAuth();
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
    if (auth?.user) {
      const data = {
        name: shopData.name,
        description: shopData.description,
        shopProductsType: shopData.shopProductsType,
        avatar: auth?.user?.imageUrl || "https://i.pinimg.com/564x/25/7f/95/257f95eb6c081c83fb23b45f307eeff2.jpg",
        userId: auth?.user?.id,
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
      <div className="main-create relative  min-h-screen !w-full  grid  ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-center flex-auto w-full  ">
          <div className="md:flex  md:items-center md:justify-left w-full sm:w-auto md:h-full   p-8  md:p-10 lg:px-14 sm:rounded-lg md:rounded-none ">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <h1 className={`${styles.heading2} text-center font-Monserrat`}>
                  Start to selling with us
                </h1>
                <div className="flex items-center justify-center ">
                  <div className="bg-black flex flex-col w-[35rem] border border-gray-900 rounded-xl px-8 py-10">
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

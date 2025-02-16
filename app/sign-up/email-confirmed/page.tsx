import ButtonBlack from "@/library/components/atoms/button-black";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className=" flex flex-col items-center h-screen justify-center p-4 bg-white">
      <div className=" flex flex-col items-center space-y-4">
        <Image
          src="/images/signup/confirmed.png"
          alt="Email Confirmed"
          width={150}
          height={150}
        />
        <h2 className=" text-2xl font-bold text-gray-800">Congratulations</h2>
        <p className=" text-gray-500">
          You have confirmed your email successfully and now ready to log in to
          your account
        </p>
        <ButtonBlack text="Log in" />
      </div>
    </div>
  );
};

export default Page;

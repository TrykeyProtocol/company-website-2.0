import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col items-center h-screen justify-center p-4 bg-white">
      <div className=" flex flex-col items-center space-y-4">
        <Image
          src="/images/signup/mail.png"
          alt="mail"
          width={150}
          height={150}
        />
        <h2 className=" text-2xl font-bold text-gray-800">
          Just one more step
        </h2>
        <p className=" text-gray-500 text-center">
          You are all ready to go! <br /> Check your email and confirm to get
          started
        </p>
        <div className=" flex flex-col items-center font-bold gray-800 mt-2">
          <p>Didn’t receive the verification email?</p>
          <a href="" className=" text-lightMode-brand-accent hover:underline">Resend email</a>
        </div>
      </div>
    </div>
  );
};

export default page;

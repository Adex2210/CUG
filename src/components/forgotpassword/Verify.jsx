import React, { useState } from "react";
import LogoAndTitle from "../shared/LogoAndTitle";
import AccountLinks from "../shared/AccountLinks";
import Button1 from "../shared/Button1";
import VerificationCodeInputSection from "../base/VerificationCodeInputSection";
import HomeIndicator from "../shared/HomeIndicator";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [codes, setCodes] = useState(["", "", "", ""]);

  const navigate = useNavigate();

  const gotoChangePassword = () => {
    console.log(codes);
    navigate("/forgotpassword/change_password");
  };
  return (
    <>
      <div className="pt-[105px] lg:px-[34.52px] gap-[23.67px] flex flex-col h-screen w-full">
        <div className="flex flex-col w-full md:w-[359px] mx-auto gap-y-[23.67px] px-[20px] md:px-[unset]">
          {/* Logo and title section */}
          <LogoAndTitle title="Verrify Account" />

          {/* Subtitle with information about entering the verification code */}
          <span className="text-center text-gray-400 font-inter text-sm font-medium leading-6">
            Enter the verification code that was sent to ki****@***.com
          </span>

          {/* Verification code input section with four input fields */}
          <VerificationCodeInputSection codes={codes} setCodes={setCodes} />

          {/* Component for displaying links related to account actions */}
          <AccountLinks
            text1="Don’t have an Account?"
            text2="Have an Account?"
            link1="/register"
            link2="/login"
          />

          {/* Verify button section */}
          <div className="mx-auto w-[100%] mt-[23.67px]">
            <Button1 title="Verify" onClick={gotoChangePassword} />
          </div>
        </div>
        <HomeIndicator />
      </div>
    </>
  );
};

export default Verify;

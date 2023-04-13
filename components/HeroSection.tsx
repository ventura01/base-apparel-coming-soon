import Image from "next/image";
import React from "react";
import SubmitBtn from "./SubmitBtn";
import WarningSign from "./WarningSign";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="md:pt-24 md:pl-52 col-start-1 col-end-2 md:col-start-1 md:col-end-4">
        <Image
          src="/images/logo.svg"
          width={120}
          height={120}
          alt="logo-img"
          className="hidden md:flex md:mb-32"
        />
        <div className="px-10 md:px-0">
          <h1 className="text-darkGrayishRed text-center md:text-left md:text-8xl text-5xl font-medium uppercase mb-5 md:mb-10 tracking-widest">
            <span className="text-desaturatedRed md:text-8xl text-5xl uppercase font-thin tracking-widest">
              We&apos;re
            </span>
            <br />
            coming
            <br />
            soon
          </h1>
          <p className="hidden md:flex text-desaturatedRed leading-relaxed mb-16">
            Hello fellow shoppers! We&apos;re currently building our new <br />
            fashion store. Add your email below to stay up-to-date with
            <br />
            announcements and our launch deals.
          </p>
          <p className="md:hidden flex text-desaturatedRed leading-relaxed mb-8 text-center">
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div className="flex justify-center relative md:block">
          <form className="inline-block ">
            <label className="block">
              {/* <span className="block text-sm font-medium text-slate-700">
                  Email
                </span> */}
              <input
                type="email"
                className="peer py-3 px-12 rounded-full outline outline-verySoftPink outline-[.05rem]"
                placeholder="Email Address"
              />
              {/* <input
                type="submit"
                value="Send"
                className="text-white rounded-full bg-gradient-to-l from-softPink to-verySoftPink py-3 px-4"
              /> */}
              <WarningSign className="invisible absolute w-5 h-5 top-3 right-28 md:right-[690px] peer-invalid:visible text-red-600 text-sm" />
              <div className="relative">
                  <div className="absolute flex justify-center -top-12 left-52 items-center h-12 w-14 rounded-full bg-gradient-to-l from-softPink to-verySoftPink">
                    <SubmitBtn color="#fff" width={5} height={5} />
                  </div>
                </div>
              {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p> */}
            </label>
          </form>
        </div>
      </div>
      <Image
        src="/images/hero-desktop.jpg"
        alt="hero-img"
        width={1440}
        height={800}
        className="hidden md:flex object-cover object-center md:col-start-4 md:col-end-6"
      />
      <Image
        src="/images/hero-mobile.jpg"
        alt="hero-img"
        width={1440}
        height={800}
        className="md:hidden row-start-2 row-end-3 mb-16 flex object-cover object-center col-start-1 md:col-end-2"
      />
      <Image
        src="/images/logo.svg"
        width={120}
        height={120}
        alt="logo-img"
        className="md:hidden row-start-1 row-end-2 my-8 ml-10 flex md:mb-32"
      />
    </div>
  );
};

export default HeroSection;

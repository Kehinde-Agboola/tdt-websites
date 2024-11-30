import Logo from "@/assets/Logowhite.png"
import Container from "../shared";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-2">
      <Container>
        {/* Subscription Section */}
        <div className=" flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-[510px]">
            {" "}
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Be part of a better tomorrow
            </h2>
            <p className="text-sm sm:text-base text-[#CACBCF] mb-6">
              Enter your email to stay up to date on how we make a difference
              together
            </p>
          </div>
          <form className="flex md:justify-center relative pt-4 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="focus:outline-none px-6 py-3 w-[350px] md:w-[600px]"
            />
            <button
              type="submit"
              className="bg-[#FFB400] absolute right-1 top-5 px-6  text-black py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
      <Container>
        {/* Footer Columns */}
        {/* Logo and Description */}
        <section className=" mt-[10rem] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left Section: Logo and Description */}
          <div className="lg:w-1/3 space-y-4">
            <div>
              <Image src={Logo} alt="The Destiny Trust" className="w-[70%]" />
            </div>
            <p className="text-sm text-justify w-[300px]">
              Lorem ipsum dolor sit amet consectetur. Urna ornare pretium
              placerat nibh amet nulla consequat habitasse.
            </p>
          </div>

          {/* Right Section: Grid Links */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Explore Links */}
            <div>
              <h4 className="text-yellow font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Get Involved</a>
                </li>
                <li>
                  <a href="#">Company services</a>
                </li>
                <li>
                  <a href="#">Job opportunities</a>
                </li>
                <li>
                  <a href="#">Creative people</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-yellow  font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">About company</a>
                </li>
                <li>
                  <a href="#">Company services</a>
                </li>
                <li>
                  <a href="#">Job opportunities</a>
                </li>
                <li>
                  <a href="#">Creative people</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-yellow  font-semibold mb-4">Contact Us</h4>
              <p className="text-sm underline mb-2">
                <a href="mailto:info@destinytrust.org">info@destinytrust.org</a>
              </p>
              <p className="text-sm  mb-2">+234 813 800 2859</p>
              <p className="text-sm">
                TDT Centre, 6, Brilla F.M Road, Off Bola Tinubu Road, Bogije
                Town, Ibeju-Lekki, Lagos.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-10">
          &copy; 2024 The Destiny Trust. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

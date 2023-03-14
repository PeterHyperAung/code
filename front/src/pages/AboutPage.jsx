import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <h1 className="mx-auto font-main text-primary font-black text-4xl text-center pt-[120px]">
        About Us
      </h1>
      <div className="flex justify-center mt-7">
        <div>
          <img
            src="images/img1.png"
            className="w-18 md:w-36 lg:w-72 mr-[130px] "
          />
        </div>
        <div className="self-center ml-8">
          <p className="font-main w-[500px] text-justify text-xl text-primary leading-9 tracking-wider">
            မေမေတို့အတွက် is a website to help the pregnant women especially in
            Myanmar. This website will help them in mental and also their
            problems. Our aim is to reduce the maternal death and suicide rate
            especially happened during teenage.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <div>
          <img src="images/img2.png" className="w-64 h-96 rounded-lg" />
        </div>
        <div className="w-2/4 self-center ml-28 font-serif bg-primary text-white p-10">
          <h3 className="font-bold text-2xl">Our Mission</h3>
          <p className="pt-2 text-justify font-normal font-main text-xl leading-9">
            To reduce rate of Pregnant women’s death (Maternal mortality) and
            teenage’s suicide case
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <div className="w-2/4 self-center mr-28 font-serif bg-primary text-white p-10">
          <h3 className="font-bold text-2xl">Our Vision</h3>
          <p className="pt-2 text-justify font-normal font-main text-xl leading-9">
            To get in a warn community and where pregnant women including
            disabled women and teenage can open up freely and get help by women
            around the country
          </p>
        </div>
        <div>
          <img src="images/img3.png" className="w-64 h-96 rounded-lg" />
        </div>
      </div>
      <div className="">
        <h1 className="font-main text-primary font-black text-3xl mt-20  text-center">
          Our Partnership Websites
        </h1>
        <div className="flex justify-evenly mt-[50px]">
          <div className="justify-center bg-primary w-[350px] p-10 rounded-2xl mr-52">
            <div className="w-38">
              <div className="flex">
                <img src="images/img4.png"></img>
                <p className="self-center text-white font-main text-xl pl-4 font-bold">
                  Aviothic Pizza
                </p>
              </div>
              <p className="text-white font-main pt-5 font-light text-justify text-xl leading-9">
                It is already 1 year we founded the Aviothic Pizza site. It is
                an amazing restaurant and it has a lot of menus.
              </p>
              <button className="bg-white px-5 py-1 mt-3 rounded-3xl flex justify-start">
                <a
                  href="#"
                  className="font-main text-primary self-center text-xl"
                >
                  Learn More
                </a>
              </button>
            </div>
          </div>

          <div className="justify-center bg-primary w-[350px] p-10 rounded-2xl">
            <div className="w-38">
              <div className="flex">
                <img src="images/img5.png"></img>
                <p className="self-center text-white font-main text-xl pl-4">
                  ပညာစုဗူး
                </p>
              </div>
              <p className="text-white font-main pt-5 font-light text-justify text-xl leading-9">
                It is already 1 year we founded the PyinyarSubuu. It is an
                education platform for blind and deaf students.
              </p>
              <button className="bg-white px-5 py-1 mt-3 rounded-3xl flex justify-start">
                <a
                  href="#"
                  className="font-main text-primary self-center text-xl"
                >
                  Learn More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-36">
        <h1 className="font-main text-primary font-black text-3xl mt-[70px] text-center">
          Founders
        </h1>
        <div className="flex justify-evenly mt-10">
          <div className="flex">
            <div className="justify-center">
              <img src="images/khantzay.png"></img>
              <p className="text-primary font-main text-lg pt-3">
                Sai Khant Zay Lin Yaung
              </p>
              <p className="text-primary font-main text-lg">
                Backend Developer
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <img src="images/peter.png"></img>
              <p className="text-primary font-main text-lg pt-3">
                Min Phone Aung
              </p>
              <p className="text-primary font-main text-lg">
                Backend Developer
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <img src="images/khin.png"></img>
              <p className="text-primary font-main text-lg pt-3">
                Khin Khin Kyaw
              </p>
              <p className="text-primary font-main text-lg">
                Designer & Leader
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <img src="images/myapwint.png"></img>
              <p className="text-primary font-main text-lg pt-3">
                Mya Pwint Thet Tin
              </p>
              <p className="text-primary font-main text-lg">
                Frondend Developer
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <img src="images/jue.png"></img>
              <p className="text-primary font-main text-lg pt-3">Ju Jue Khin</p>
              <p className="text-primary font-main text-lg">
                Frondend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <PregnancyCalculator />
      <ChooseDoctor /> */}
      <section>
        <div className="mt-20">
          <footer className="footer p-10 bg-themeColor text-neutral-content">
            <div>
              <img src="/images/logo.png" className="w-96" alt="" />
              <p>
                Aviothic Ltd.
                <br />
                Providing reliable tech since 2023
              </p>
            </div>
            <div>
              <span className="footer-title">Contact Us</span>
              <div className="grid grid-flow-col gap-4">
                <div>
                  <p className="font-semibold hover:text-themeHover">
                    Email - aviothic.gmail.com
                  </p>
                  <p className="font-semibold mt-2 hover:text-themeHover">
                    Address - No(2), San Chaung
                  </p>
                  <p className="font-semibold mt-2 hover:text-themeHover">
                    Road, Yangon
                  </p>
                  <p className="font-semibold mt-2 hover:text-themeHover">
                    Ph-No - +979 987654321
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="footer-title">Social</span>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current hover:text-themeHover"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current hover:text-themeHover"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current hover:text-themeHover"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
          <div className="divider">
            Copyright 2022
            <span className="text-themeColor">MayMayTokATwat</span>. All Rights
            Reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

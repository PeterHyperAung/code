import { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import {} from "react-icons/fa";
import {} from "react-icons/fa";
import {} from "react-icons/fa";
import {} from "react-icons/fa";
import {} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <img src="/images/balls.png" className="w-38 absolute mt-20 mx-20" />
        <div className="hero min-h-screen">
          <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
            <img src="/images/banner.jpg" className="max-w-3xl rounded-lg" />
            <div>
              <h1 className="text-5xl text-left font-bold">
                No more risks for <b></b> Pregnancy
              </h1>
              <p className="py-6 text-left w-23 font-semibold">
                “Being a mom means I have a little person who walk around with
                my heard and souls in the palms of their sweet, smudgy hands ”
              </p>
              <button className="btn w-32 rounded-full hover:text-themeColor text-white border-0 bg-themeColor border-none">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <img src="/images/rectangle.png" className="w-full" />
        <h2 className="text-5xl text-center font-bold mt-12">
          What we Provide?
        </h2>
        <div className="flex flex-col-4 m-32 gap-32 justify-center flex-wrap">
          <div className="m-3">
            <p className=" w-48 text-center text-xl">
              <FaUsers size={100} className="ml-10" />
              <h2 className="font-bold text-2xl m-3 text-themeColor">
                Community
              </h2>
              The greatest of the community is the most accurately measured by
              the passionate actions of its members.
            </p>
          </div>
          <div className=" w-48 text-center">
            <FaBookMedical size={100} className="ml-10" />
            <h2 className="font-bold text-2xl text-themeColor m-4">
              Knowledge
            </h2>
            <p className="text-xl">
              Education is the most powerful weapon which you can use to change
              the world.
            </p>
          </div>
          <div className="text-center">
            <FaHandHoldingHeart size={100} className="ml-10" />
            <h2 className="font-bold text-2xl text-themeColor m-3">Help</h2>
            <p className=" w-48 text-center my-3 text-xl">
              Helping one person might not change the world, but it could change
              the world for one person.
            </p>
          </div>
          <div>
            <FaComments size={100} className="ml-10" />
            <p className=" w-48 text-center text-xl">
              <h2 className="font-bold text-2xl text-themeColor m-3">
                Communication
              </h2>
              Lack of communication ruins everything because instead of knowing
              how the other person is feeling, we just assume.
            </p>
          </div>
        </div>
      </section>

      <section className="WomenDie ">
        <img src="/images/rectangle.png" className="w-full mb-20" />
        <h1 className="font-bold text-6xl text-center">
          282<span className="text-themeColor"> Women</span> Die per 100,000
          live births
        </h1>
        <p className="text-center text-4xl mt-5">
          <span className="text-themeColor">A maternal death</span> occurred
          almost every two minutes in 2020.
        </p>
        <img src="/images/balls2.png" className="w-38 absolute mt-36" />
        <div className="flex flex-col items-center">
          <div
            className="radial-progress mx-48 mt-20 text-themeColor"
            style={{
              "--value": "95",
              "--size": "25rem",
              "--thickness": "2rem",
            }}
          >
            <span className="text-3xl"> 95%</span>
          </div>
          <p className="text-2xl font-semibold text-center mt-7">
            Almost 95% of all maternal deaths occurred in low and lower
            middle-income countries in 2020.
          </p>
        </div>

        <h1 className="text-center font-bold text-5xl mt-20">In Myanmar</h1>

        <div className="grid grid-cols-3 mt-18">
          <div className="radial">
            <div
              className="radial-progress text-center mx-56 mt-20 text-themeColor"
              style={{
                "--value": "70",
                "--size": "18rem",
                "--thickness": "1.3rem",
              }}
            >
              <span className="text-3xl m-2"> 70%</span>
              <p className=" text-xl">No Access to Hospital </p>
            </div>
            <h2 className="w-full ml-40 font-semibold mt-10 text-2xl">
              Up to 70% of women in low-resource settings still deliver outside
              of a hospital setting.
            </h2>
          </div>
          <img className="mx-auto mt-20" src="/images/mother.png" />

          <div className="radial">
            <div
              className="radial-progress mt-20 text-center text-themeColor"
              style={{
                "--value": "83",
                "--size": "18rem",
                "--thickness": "1.4rem",
              }}
            >
              <span className="text-3xl m-2"> 83%</span>
              <p className="text-xl">
                maternal deaths from
                <br /> preventable obstetric <br />
                causes
              </p>
            </div>
            <h2 className="  w-full font-semibold mt-10 text-2xl">
              Up to 83% of maternal deaths are from preventable obstetric
              causes, leading 830 women to die everyday from preventable causes
              related to pregnancy and childbirth.
            </h2>
          </div>
        </div>
        <img src="/images/rectangle.png" className="w-full mb-20 mt-20" />
      </section>

      <section>
        <div>
          <h1 className="text-center text-4xl font-bold">
            Reasons for deaths in childbirth in low-income countries
          </h1>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div>
            <h2 className="max-w-[600px] min-w-[300px] text-xl mt-40">
              At Maternity Worldwide we recognise that the underlying and
              contributory causes of deaths in pregnancy and childbirth are
              complex and interlinked. Women and girls often have very low
              status in low-income countries and empowerment and education are
              central to enabling them to make their own decisions and allowing
              them to access maternal health and family planning services.
            </h2>
            <button className="btn w-32 mx-32 mt-5 rounded-full hover:text-themeColor text-white border-0 bg-themeColor border-none">
              Start
            </button>
          </div>
          <img className="mx-40 mt-12" src="/images/maternal.png" alt="" />
        </div>
      </section>

      <section className="mt-20">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full flex justify-center">
            <img src="/images/slide.png" className="w-50 ml-28" />
          </div>
          <div id="item2" className="carousel-item w-full flex justify-center">
            <img src="/images/slide2.png" className="w-50 ml-28" />
          </div>
          <div id="item3" className="carousel-item w-full flex justify-center">
            <img src="/images/slide3.png" className="w-50 ml-20" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 mt-5">
          <a href="#item1" className="btn btn-xs bg-themeColor border-none">
            1
          </a>
          <a href="#item2" className="btn btn-xs bg-themeColor border-none">
            2
          </a>
          <a href="#item3" className="btn btn-xs bg-themeColor border-none">
            3
          </a>
        </div>
        <img src="/images/rectangle2.png" className="w-full mb-20 mt-20" />
      </section>

      <section className="flex">
        <div className="flex justify-center items-center grow gap-[150px]">
          <div className="">
            <h2 className=" mx-23 ml-32 text-2xl mt-40">
              <h1 className="text-5xl font-bold mb-3">Who are near you?</h1>
              You can get <span className="text-themeColor ">maternal </span>
              health <br /> care within 24 hours.
            </h2>
            <button className="btn w-46 mx-32 mt-10 rounded-full hover:text-themeColor text-white border-0 bg-themeColor border-none">
              Book for an appointment
            </button>
          </div>
          <img src="/images/doctor.png" alt="" />
        </div>
      </section>
      <img src="/images/doctor-re.png" className="w-full mb-20 mt-20" />

      <section>
        <div>
          <div className="carousel carousel-center mx-auto max-h-xl max-w-5xl bg-transparent">
            <div className="carousel-item">
              <img src="/images/donatW2.jpg" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src="/images/donatW3.jpg" className="rounded-box " />
            </div>
            <div className="carousel-item">
              <img src="/images/donatW4.jpg" className="rounded-box " />
            </div>
            <div className="carousel-item">
              <img src="/images/donatW55.png" className="rounded-box " />
            </div>
            <div className="carousel-item">
              <img src="/images/donatW6.png" className="rounded-box " />
            </div>
            <div className="carousel-item">
              <img src="/images/donatW7.png" className="rounded-box " />
            </div>
          </div>

          <h2 className="text-2xl text-center mt-10 font-semibold">
            At Maternity Myanmar,
            <span className="text-themeColor"> all women </span>, wherever they
            live, can give birth <br /> safely and without dear.
          </h2>
        </div>

        <div className="">
          <h2 className="text-center text-6xl font-bold mt-28">
            Make a <span className="text-themeColor">Donation</span>
          </h2>
          <p className="text-center text-3xl mt-7">
            On average it costs just MK 15000 to save
            <br /> a mother’s life during childbirth, whatever you can afford
            will help to make a huge difference.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="btn w-52 mt-10 rounded-full hover:text-themeColor text-white border-0 bg-themeColor border-none">
            Donate
          </button>
        </div>
      </section>

      <section id="contactus">
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

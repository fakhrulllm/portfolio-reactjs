import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";

import Proyek1 from "../assets/images/proyek-1.webp";
import Proyek2 from "../assets/images/proyek-2.webp";
import Proyek3 from "../assets/images/proyek-3.webp";
import Proyek4 from "../assets/images/proyek-4.webp";
import Proyek5 from "../assets/images/proyek-5.webp";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Collaborate EV Solution With{" "}
              <span className="font-bold text-sky-400 underline">
                SEX EDUCATION
              </span>
            </h1>
            <p className="text-base/8 mb-7">
              At BlueCharge, our focus is on delivering Safe, Reliable, and
              Efficient charging infrastructure for electric vehicle users.
              Supported by advanced technology and a user-friendly mobile
              application, we offer a convenient and effective charging
              experience. Users can easily locate nearby charging stations,
              monitor their charging status in real-time, and make hassle-free
              payments.As part of the Centrepark Group, which manages over 700
              locations across Indonesia, BlueCharge is well-positioned to
              expand the reach of EV charging solutions nationwide. Our
              extensive network of charging stations is strategically located in
              offices, shopping malls, hotels, and public spaces, ensuring
              accessibility wherever you go.Combining Centrepark’s expertise in
              mobility solutions with our commitment to sustainability,
              BlueCharge is ready to lead the electric vehicle revolution and
              contribute to a greener, more sustainable world.Together with
              Centrepark, we’re not just charging vehicles—we’re powering the
              future.
            </p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-500 transition all py-2 px-4 text-white shadow rounded full"
            >
              Tentang Kami
              <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto md:m-0"
            ></img>
          </div>
        </div>

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32" id="about">
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="About Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              EV Solution{" "}
              <span className="font-bold text-sky-400 underline">
                Bluecharge
              </span>
            </h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              expedita nesciunt assumenda fuga facere magni?
            </p>
          </div>
        </div>
        <div className="services pt-32" id="services">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Layanan
          </h1>
          <p className="text-center">Copyright fakhrul</p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-blod text-white mt-6 mb-2">
                Service Name 1
              </h3>
              <p className="text-white text-base/loose">lorem,ipsum</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-blod text-white mt-6 mb-2">
                Service Name 2
              </h3>
              <p className="text-white text-base/loose">lorem,ipsum</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-blod text-white mt-6 mb-2">
                Service Name 3
              </h3>
              <p className="text-white text-base/loose">lorem,ipsum</p>
            </div>
          </div>
        </div>

        <div className="proyek pt-32" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Proyek
          </h1>
          <p className="text-center">Copyright fakhrul</p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img
                src={Proyek1}
                alt="Proyek Image"
                className="w-full h-[200px]"
              />
              <h3 className="text-xl font-blod  mt-6 mb-2"> Proyek Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sunt dolore nulla, doloribus in, autem consectetur
                exercitationem molestiae iure labore sint quam velit numquam
                sit, facere at mollitia fugit illum!
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={Proyek2}
                alt="Proyek Image"
                className="w-full h-[200px]"
              />
              <h3 className="text-xl font-blod  mt-6 mb-2"> Proyek Name 2</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sunt dolore nulla, doloribus in, autem consectetur
                exercitationem molestiae iure labore sint quam velit numquam
                sit, facere at mollitia fugit illum!
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={Proyek3}
                alt="Proyek Image"
                className="w-full h-[200px]"
              />
              <h3 className="text-xl font-blod  mt-6 mb-2"> Proyek Name 3</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sunt dolore nulla, doloribus in, autem consectetur
                exercitationem molestiae iure labore sint quam velit numquam
                sit, facere at mollitia fugit illum!
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={Proyek4}
                alt="Proyek Image"
                className="w-full h-[200px]"
              />
              <h3 className="text-xl font-blod  mt-6 mb-2"> Proyek Name 4</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sunt dolore nulla, doloribus in, autem consectetur
                exercitationem molestiae iure labore sint quam velit numquam
                sit, facere at mollitia fugit illum!
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={Proyek5}
                alt="Proyek Image"
                className="w-full h-[200px]"
              />
              <h3 className="text-xl font-blod  mt-6 mb-2"> Proyek Name 5</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sunt dolore nulla, doloribus in, autem consectetur
                exercitationem molestiae iure labore sint quam velit numquam
                sit, facere at mollitia fugit illum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

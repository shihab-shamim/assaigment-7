

const Hero = () => {
    return (
        <div>
            <div className="  bg-no-repeat bg-cover rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/wK7c3rN/Rectangle-1.png)'}}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="px-2 py-10 md:px-28 md:py-44">
                  {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
                  <p className="mb-5  md:text-[52px] font-bold">Discover an exceptional cooking <br /> class tailored for you!</p>
                  <div className="flex gap-8 justify-center items-center">
                    <div className="w-full"><button className="px-6 py-4 text-black font-bold bg-[#0BE58A] rounded-full ">Explore Now</button></div>
                    <div className="border w-3/4 p-4 rounded-full"><button className=" ">Our Feedback</button></div>

                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Hero;
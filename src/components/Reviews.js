import React from "react";

const Reviews = ({ content }) => {
  const [review1, setreview1] = React.useState("");
  const [review2, setreview2] = React.useState("hide-widget");
  const [review3, setreview3] = React.useState("hide-widget");

  function NextSlide() {
    setreview1("");

    setTimeout(() => {
      setreview1("hide-widget");
      setreview2("");
      setreview3("hide-widget");
    }, 5000);

    setTimeout(() => {
      setreview1("hide-widget");
      setreview2("hide-widget");
      setreview3("");
    }, 10000);

    setTimeout(() => {
      setreview1("hide-widget");
      setreview2("hide-widget");
      setreview3("");
    }, 15000);

    setTimeout(() => {
      setreview1("");
      setreview2("hide-widget");
      setreview3("hide-widget");
    }, 20000);
  }

  React.useEffect(() => {
    NextSlide();
    setInterval(() => {
      NextSlide();
    }, 20000);
  }, []);

  return (
    <>
      <div
        className={`${review1} w-[90%] sm:w-[400px] gap-5 single-widget  px-4 h-[138px] absolute -bottom-10 right-1/2 transform md:translate-x-0 translate-x-1/2 md:right-0 bg-white rounded-[24px] flex items-center justify-start`}
      >
        <div className="flex items-center justify-center flex-col ">
          <img
            src="/img//image1.svg"
            alt="profile"
            className="transform -translate-y-10 w-[250px] sm:w-[300px]"
          />
          <div className="text-[16px] text-center leading-tight font-bold text-orange transform -translate-y-7">
            Julia Masche
          </div>
        </div>
        <p className="text-[15px] opacity-80">{content[1]}</p>
      </div>

      <div
        className={`${review2} w-[90%] sm:w-[400px]  gap-5 single-widget  px-4 h-[138px] absolute -bottom-10 right-1/2 transform md:translate-x-0 translate-x-1/2 md:right-0 bg-white rounded-[24px] flex items-center justify-start`}
      >
        <div className="flex items-center justify-center flex-col ">
          <img
            src="/img//ladewig_round.png"
            alt="profile"
            className="transform -translate-y-10 w-[350px] sm:w-[360px]"
          />
          <div className="text-[16px] text-center leading-tight font-bold text-orange transform -translate-y-7">
            Bettina Ladewig
          </div>
        </div>
        <p className="text-[15px] opacity-80">{content[2]}</p>
      </div>

      <div
        className={`${review3} w-[90%] sm:w-[400px]  gap-5 single-widget  px-4 h-[138px] absolute -bottom-10 right-1/2 transform md:translate-x-0 translate-x-1/2 md:right-0 bg-white rounded-[24px] flex items-center justify-start`}
      >
        <div className="flex items-center justify-center flex-col ">
          <img
            src="/img//wenzel_round.png"
            alt="profile"
            className="transform -translate-y-10 w-[270px] sm:w-[350px]"
          />
          <div className="text-[16px] text-center leading-tight font-bold text-orange transform -translate-y-7">
            Dr. Wenzel
          </div>
        </div>
        <p className="text-[15px] opacity-80">{content[0]}</p>
      </div>
    </>
  );
};

export default Reviews;

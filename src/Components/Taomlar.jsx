import korzinka from "./img/koriznka.svg";
import bell from "./img/bell_svgrepo.com.svg";
import backround from "./foto/Fon.svg";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

export const Taomlar = () => {
  const [count, setCount] = useState(0);

  let array1 = [
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
  ];

  return (
    <div className="bakcroundimg w-[375px] h-[1200px]">
      <div className=" nav w-[335px] h-[25px] rounded-r-lg">
        <h1 className="" style={{ marginLeft: "37%" }}>
          1-TAOMLAR
        </h1>
        <button className="rounded-r-lg h-[25px] w-[22px] border-none	bg-[#B9B9B9]">
          x
        </button>
      </div>
      <div className="grid grid-cols-2">
        {array1.map((card) => {
          return (
            <div>
              <Card count={count} setCount={setCount}>
                {" "}
                {card.name}
              </Card>
            </div>
          );
        })}
      </div>

      <div className="main-container w-[375px] h-[68px] relative overflow-hidden mx-auto my-0">
        <div className="w-[375px] h-[92px] bg-[#d9d9d9] absolute top-0 left-0">
          <div className=" w-[55px] h-[64px] text-[0px] absolute top-[3px] left-[107px] z-[9]">
            <span className=" flex w-[33px] h-[16px] justify-center items-center font-['Comfortaa'] text-[7px] font-normal leading-[7.805px] text-[#013f25] tracking-[-0.1px] relative text-center overflow-hidden z-[8] mt-0 mr-0 mb-0 ml-[22px]">
              Chaqiruv
              <br /> tugmasi
            </span>
            <div className="bell w-[44px] h-[44px] relative overflow-hidden z-[9] mt-[4px] mr-0 mb-0 ml-0">
              <div className="w-[5.5px] h-[5.5px]  bg-[length:100%_100%] bg-no-repeat relative z-10 mt-[2.75px] mr-0 mb-0 ml-[19.25px]" />
              <div className="w-[38.5px] h-[8.25px]  bg-[length:100%_100%] bg-no-repeat relative z-[12] mt-[24.75px] mr-0 mb-0 ml-[2.75px]" />
              <div className="w-[1870.87%] h-[2645.67%] absolute top-[-1666.67%] left-[-658.33%] overflow-hidden z-[14]" />
              <div className="w-[62.5%] h-[68.75%]  bg-[length:100%_100%] bg-no-repeat absolute top-[12.5%] left-[18.75%] z-[11]" />
              <div className="w-[40.64%] h-[43.33%]  bg-[length:100%_100%] bg-no-repeat absolute top-[28.33%] left-[30%] z-[13]" />
            </div>
          </div>
          <div className="w-[86px] h-[40px] text-[0px] absolute top-[6px] left-[6px] z-[7]">
            <span className="flex w-[86px] h-[9px] justify-center items-center font-['Comfortaa'] text-[8px] font-normal leading-[8.92px] text-[#013f25] tracking-[-0.12px] relative text-center whitespace-nowrap z-[7] mt-0 mr-0 mb-0 ml-0">
              Buyurtmalar soni ta {count}
            </span>
            <span className="flex w-[86px] h-[17px] justify-center items-center font-['Comfortaa'] text-[15px] font-normal leading-[16.725px] text-[#013f25] tracking-[-0.22px] relative text-center whitespace-nowrap z-[6] mt-[14px] mr-0 mb-0 ml-0">
              25 000 so’m
            </span>
          </div>
          <button className="w-[121px] h-[35px] bg-[#d9d9d9] rounded-[3px] border-solid border border-[#013f25] absolute top-[17px] left-[240px] z-[1] pointer">
            <div className="korzinka w-[30.58%] h-[82.86%] bg-[length:100%_100%] bg-no-repeat absolute top-[5.71%] left-[65.29%] z-[3]" />
            <span className="flex w-[75px] h-[17px] justify-center items-center font-['Comfortaa'] text-[15px] font-normal leading-[16.725px] text-[#013f25] tracking-[-0.22px] absolute top-[9px] left-[4px] text-center whitespace-nowrap z-[5]">
              Buyurtma
            </span>
          </button>
          <div className="flex w-[26px] h-[26px] justify-center items-center bg-[#013f25] rounded-[3px] border-solid border border-[#233049] absolute top-[21px] left-[200px] z-[4]">
            <span className="flex w-[19px] h-[24px] justify-center items-center shrink-0 font-['Comfortaa'] text-[15px] font-normal leading-[24px] text-[#fff] tracking-[-0.22px] relative text-center whitespace-nowrap z-[4]">
              +1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taomlar;

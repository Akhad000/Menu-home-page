import React from "react";
import tel from "./foto/tel icon.svg";
import telegtam from "./foto/telegram.svg";
import locatin from "./foto/locatin.svg";
import instagram from "./foto/instagram.svg";
import vectorassorti from "../Components/foto/assortivector.svg";
import assorti from "./foto/assorti.svg";
import logo from "../Components/foto/logo-1 1.svg";
import backround from "../Components/foto/backround.svg";
import shurva from "../Components/foto/shurvaa.svg";
import menutegi from "../Components/foto/menutegi.svg";
import vactor from "../Components/foto/Vector.svg";
import youtube from "../Components/foto/you tube.svg";
import salat from "../Components/foto/salat.svg";
import sloy3 from "../Components/foto/Слой_x0020_1.svg";
import ichimliklar from "../Components/foto/ichimliklar.svg";
import sloyy from "./foto/sloyy.svg";
import burger from "./foto/burger.svg";
import kabob from "./foto/kabob.svg";
import osh from "./foto/osh.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 h-[812px] overflow-hidden text-center text-[15px] text-whitesmoke-100 font-comfortaa">
      <img
        className="absolute top-[-68px] left-[-443px] w-[818px] h-[812px] object-cover"
        alt=""
        src={backround}
      />
      <div className="absolute top-[1346px] left-[375px] w-[343px] h-[52px]" />
      <img
        className="absolute h-[6.16%]  top-[39.78%] right-[3.73%] bottom-[54.06%] left-[0.53%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vactor}
      />
      <div className="absolute top-[721px] left-[0px] w-[375px] h-[92px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] bg-darkslategray w-[375px] h-[92px]" />
        <div className="absolute top-[1px] left-[85px] tracking-[-0.01em] flex items-center justify-center w-[204px] h-[23px]">
          Biz bilan bog’lanish
        </div>
        <img
          className="absolute h-[35.87%] w-[8.8%] top-[32.61%] right-[82.4%] bottom-[31.52%] left-[8.8%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={tel}
        />
        <img
          className="absolute h-[32.61%] w-[6.67%] top-[36.96%] right-[9.87%] bottom-[30.43%] left-[83.47%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={locatin}
        />
        <img
          className="absolute h-[30.43%] w-[10.67%] top-[39.13%] right-[24.8%] bottom-[30.43%] left-[64.53%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={youtube}
        />
        {/* <img
        className="absolute h-[19.57%] w-[4.8%] top-[44.57%] right-[46.93%] bottom-[35.87%] left-[48.27%] max-w-full overflow-hidden max-h-full"
        alt=""
        src=''
      /> */}
        <img
          className="absolute h-[36.96%] w-[9.07%] top-[35.87%] right-[44.8%] bottom-[27.17%] left-[46.13%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={instagram}
        />
        <img
          className="absolute h-[36.96%] w-[9.07%] top-[35.87%] right-[64.53%] bottom-[27.17%] left-[26.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={telegtam}
        />
      </div>
      <div className="absolute top-[159px] left-[0px] w-[375px] h-[562px] overflow-hidden text-xl text-white">
        <img
          className="absolute h-[22.42%] w-[93.6%] top-[2.14%] right-[3.73%] bottom-[75.44%] left-[2.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={sloyy}
        />
        <div className="absolute top-[397px] left-[110px] rounded-3xs bg-antiquewhite shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[226px] h-[34px] border-[1px] border-solid border-sienna" />
        <img
          className="absolute h-[8.54%] w-[91.73%] top-[42.53%] right-[1.87%] bottom-[48.93%] left-[6.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={vactor}
        />
        <div className="absolute top-[473px] left-[110px] rounded-3xs bg-antiquewhite shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[226px] h-[34px] border-[1px] border-solid border-sienna" />
        <div className="absolute top-[378px] left-[57px] rounded-[50%] bg-antiquewhite box-border w-[72px] h-[71px] border-[1px] border-solid border-sienna" />
        <div className="absolute top-[454px] left-[57px] rounded-[50%] bg-antiquewhite box-border w-[72px] h-[71px] border-[1px] border-solid border-sienna" />
        <div className="absolute top-[27px] left-[151px] tracking-[-0.01em] flex items-center justify-center w-[119px] h-[21px]">
          <Link to="/1-taomlar" style={{ textDecoration: 'none', color:"white" }}>1-TAOMLAR</Link>
        </div>
        <div className="absolute top-[103px] left-[151px] tracking-[-0.01em] flex items-center justify-center w-[119px] h-[21px]">
          <Link to="/2-taomlar" style={{ textDecoration: 'none', color:"white" }}>2-TAOMLAR</Link>
        </div>
        <div className="absolute top-[179px] left-[144px] tracking-[-0.01em] flex items-center justify-center w-36 h-[21px]">
           <Link to="/shashliklar" style={{ textDecoration: 'none', color:"white" }}>SHASHLIKLAR</Link>
        </div>
        <div className="absolute top-[254px] left-[144px] tracking-[-0.01em] flex items-center justify-center w-36 h-[21px]">
          <Link to="/fast-food" style={{ textDecoration: 'none', color:"white" }}>FAST FOOD</Link>
        </div>
        <img
          className="absolute h-[8.72%] w-[97.33%] top-[56.23%] right-[2.67%] bottom-[35.05%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={vactor}
        />
        <img
          className="absolute h-[14.06%] w-[21.07%] top-[1%] right-[65.07%] bottom-[86.48%] left-[13.87%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src={menutegi}
        />
        <img
          className="absolute top-[12.99%] right-[64.27%] bottom-[46.44%] left-[12.87%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={sloy3}
        />
        <div className=" absolute top-[330px]   left-[144px] tracking-[-0.01em] flex items-center justify-center w-36 h-[21px]">
          <Link to="/assorti" style={{ textDecoration: 'none', color:"white" }}>ASSORTI</Link>
        </div>
        <div className="absolute top-[406px] left-[144px] tracking-[-0.01em] text-sienna flex items-center justify-center w-36 h-[21px]">
          <Link to="/salatlar" style={{ textDecoration: 'none', color:"#885133" }}>SALATLAR</Link>
        </div>
        <div className="absolute top-[482px] left-[144px] tracking-[-0.01em] text-sienna flex items-center justify-center w-36 h-5">
          <Link to="/ichimliklar" style={{ textDecoration: 'none', color:"#885133" }}>ICHIMLIKLAR</Link>
        </div>
        <img
          className="absolute top-[462px] left-[61px] w-[59px] h-[58px] object-cover"
          alt=""
          src={ichimliklar}
        />
        <img
          className="absolute top-[12px] left-[60px] w-[66px] h-[54px] object-cover"
          alt=""
          src={shurva}
        />
        <img
          className="absolute top-[153px] left-[57px] rounded-[50%] w-[68px] h-[67px] object-cover"
          alt=""
          src={kabob}
        />
        <img
          className="absolute top-[88px] left-[59px] w-[68px] h-12 object-cover"
          alt=""
          src={osh}
        />
        <div className="absolute top-[164px] left-[58px] w-[71px] h-[63px]" />
        <div className="absolute top-[239px] left-[58px] w-[71px] h-[62px]" />
        <div className="absolute top-[315px] left-[58px] w-[71px] h-[62px]" />
        <div className="absolute top-[391px] left-[58px] w-[71px] h-[62px]" />
        <div className="absolute top-[466px] left-[58px] w-[71px] h-[63px]" />
        <img
          className="absolute h-[9.25%] w-[23.73%] top-[55.52%] right-[63.47%] bottom-[35.23%] left-[12.8%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src={vectorassorti}
        />
        <img
          className="absolute top-[241px] left-[58px] w-[69px] h-[42px] object-cover"
          alt=""
          src={burger}
        />
        <img
          className="absolute top-[317px] left-[55px] w-[76px] h-[46px] object-cover"
          alt=""
          src={assorti}
        />
        <img
          className="absolute top-[392px] left-[57px] w-[72px] h-[49px] object-cover"
          alt=""
          src={salat}
        />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[375px] h-[153px] overflow-hidden">
        <img
          className="absolute top-[9px] left-[142px] w-[102px] h-[111px] object-cover"
          alt=""
          src={logo}
        />
      </div>
      <b className="absolute top-[142px] left-[150px] text-[25px] tracking-[-0.01em] flex text-darkslategray items-center justify-center w-[86px] h-[22px]">
        MENU
      </b>
    </div>
  );
};

export default Home;

// import React from "react";
// import logo from "../Components/foto/logo-1 1.svg";
// import fotobc from "../Components/foto/Group shurva (1).svg";
// import salat from "../Components/foto/Group 7.svg"
// import tel from "../Components/foto/tel icon.svg"
// import telegram from "../Components/foto/telegram.svg"
// import instagram from "../Components/foto/instagram.svg"
// import youtube from "../Components/foto/you tube.svg"
// import location from "../Components/foto/locatin.svg"

// const Home = () => {
//   return (
//     <div>
//       <div className="container">
//         <div className="main_block">
//           <div className="logo_block">
//             <div className="divfoto">
//               <img src={logo} />
//             </div>
//           </div>
//           <div className="menu_block">
//             <div className="text">
//               <h1>MENU</h1>
//             </div>
//             <div className="df">
//             <div className="menu_div">
//               <div className="divfotobc">
//                 <img src={fotobc} />
//               </div>
//               <p>1-TAOMLAR</p>
//             </div>
//             </div>

//             <div className="df">
//             <div className="menu_div">
//               <div className="divfotobc">
//                 <img src={fotobc} />
//               </div>
//               <p>1-TAOMLAR</p>
//             </div>
//             </div>

//             <div className="df">
//             <div className="menu_div">
//               <div className="divfotobc">
//                 <img src={fotobc} />
//               </div>
//               <p>1-TAOMLAR</p>
//             </div>
//             </div>

//             <div className="df">
//             <div className="menu_div">
//               <div className="divfotobc">
//                 <img src={fotobc} />
//               </div>
//               <p>1-TAOMLAR</p>
//             </div>
//             </div>

//             <div className="df">
//             <div className="menu_div">
//               <div className="divfotobc">
//                 <img src={fotobc} />
//               </div>
//               <p>1-TAOMLAR</p>
//             </div>
//             </div>

//             <div className="dubl">
//                 <div className="desert">
//                     <img src={salat} alt="" />
//                     <button>SALATLAR</button>
//                 </div>

//                 <div className="desert">
//                     <img src={salat} alt="" />
//                     <button>SALATLAR</button>
//                 </div>
//             </div>

//             <div className="footer">
//                 <h1>Biz bilan bog’lanish</h1>
//                 <div className="icon">
//                     <button><img src={tel} alt="" /></button>
//                     <button><img src={telegram} alt="" /></button>
//                     <button><img src={instagram} alt="" /></button>
//                     <button><img src={youtube} alt="" /></button>
//                     <button><img src={location} alt="" /></button>
//                 </div>
//             </div>

//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Home;

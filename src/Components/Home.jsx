import React from 'react'
import rasmlogo from './foto/loogoo.svg'
import backround from "./foto/Fon.svg"
import vector1 from "./foto/vector1.svg"
import shurva from "./foto/shurvaa.svg"
import osh from "./foto/osh.svg"
import kabob from "./foto/kabob.svg"
import fastfood from "./foto/burger.svg"
import assorti from "./foto/assorti.svg"
import salatlar from "./foto/salat.svg"
import tel from "./foto/tel icon.svg"
import telegram from "./foto/telegram.svg"
import instagram from "./foto/instagram.svg"
import youtube from "./foto/you tube.svg"
import location from "./foto/locatin.svg"
import ichimliklar from "./foto/ichimliklar.svg"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className="absolute top-[0px] left-[394px] bg-whitesmoke-200 w-[375px] h-[812px] overflow-hidden text-mini text-whitesmoke-100">
        <img
          className="absolute top-[-22px] left-[-436px] w-[1344px] h-[738px] "
          alt=""
          src={backround}
        />
        <div className="absolute top-[721px] left-[0px] w-[375px] h-[92px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] bg-darkslategray-200 w-[375px] h-[92px]" />
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
            src={location}
          />
          <img
            className="absolute h-[30.43%] w-[10.67%] top-[39.13%] right-[24.8%] bottom-[30.43%] left-[64.53%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={youtube}
          />
          {/* <img
            className="absolute h-[13.04%] w-[2.67%] top-[47.83%] right-[28.53%] bottom-[39.13%] left-[68.8%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={youtube}
          /> */}
          {/* <img
            className="absolute h-[19.57%] w-[4.8%] top-[44.57%] right-[46.93%] bottom-[35.87%] left-[48.27%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          /> */}
          {/* <img
            className="absolute h-[4.35%] w-[1.07%] top-[42.39%] right-[46.4%] bottom-[53.26%] left-[52.53%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          /> */}
          <img
            className="absolute h-[36.96%] w-[9.07%] top-[35.87%] right-[44.8%] bottom-[27.17%] left-[46.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={instagram}
          />
          <img
            className="absolute h-[36.96%] w-[9.07%] top-[35.87%] right-[64.53%] bottom-[27.17%] left-[26.4%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={telegram}
          />
        </div>
        <div className="absolute top-[159px] left-[0px] w-[375px] h-[562px] overflow-hidden text-xl text-white">
          <img
            className="absolute h-[14.06%] w-[93.6%] top-[-0.53%] right-[4.27%] bottom-[86.48%] left-[2.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector1}
          />
          <img
            className="absolute h-[14.06%] w-[93.6%] top-[12.81%] right-[4.27%] bottom-[73.13%] left-[2.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector1}
          />
          <img
            className="absolute h-[14.06%] w-[93.6%] top-[26.51%] right-[4.27%] bottom-[59.43%] left-[2.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector1}
          />
          <img
            className="absolute h-[14.06%] w-[93.6%] top-[40.21%] right-[4.27%] bottom-[45.73%] left-[2.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector1}
          />
          <img
            className="absolute h-[14.06%] w-[93.6%] top-[54.45%] right-[4.27%] bottom-[31.49%] left-[2.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector1}
          />
          <img
            className="absolute h-[14.06%] w-[93.6%] top-[68.51%] right-[4.27%] bottom-[17.44%] left-[2.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector1}
          />
          <img
            className="absolute h-[14.06%] w-[93.6%] top-[82.56%] right-[4.27%] bottom-[3.38%] left-[2.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector1}
          />
          <div className="absolute top-[27px] left-[151px] tracking-[-0.01em] flex items-center justify-center w-[119px] h-3">
            <Link className='no-underline	text-white' to="/1-taomlar">
            1-TAOMLAR
            </Link>
          </div>
          <div className="absolute top-[101px] left-[152px] tracking-[-0.01em] flex items-center justify-center w-[119px] h-3">
          <Link className='no-underline	text-white' to="/1-taomlar">
            2-TAOMLAR
            </Link>
          </div>
          <div className="absolute top-[178px] left-[144px] tracking-[-0.01em] flex items-center justify-center w-36 h-3">
          <Link className='no-underline	text-white' to="/1-taomlar">
          SHASHLIKLAR
            </Link>
          </div>
          <div className="absolute top-[258px] left-[144px] tracking-[-0.01em] flex items-center justify-center w-36 h-3">
          <Link className='no-underline	text-white' to="/1-taomlar">
          FAST FOOD
            </Link>
          </div>
          <div className="absolute top-[335px] left-[144px] tracking-[-0.01em] flex items-center justify-center w-36 h-3">
          <Link className='no-underline	text-white' to="/1-taomlar">
          ASSORTI
            </Link>
          </div>
          <div className="absolute top-[414px] left-[144px] tracking-[-0.01em] flex items-center justify-center w-36 h-3">
          <Link className='no-underline	text-white' to="/1-taomlar">
          SALATLAR
            </Link>
          </div>
          <div className="absolute top-[493px] left-[144px] tracking-[-0.01em] flex items-center justify-center w-36 h-3">
          <Link className='no-underline	text-white' to="/1-taomlar">
          ICHIMLIKLAR
            </Link>
          </div>
          <img
            className="absolute top-[470px] left-[68px] w-[55px] h-[54px] object-cover"
            alt=""
            src={ichimliklar}
          />
          <img
            className="absolute top-[3px] left-[65px] w-16 h-[52px] object-cover"
            alt=""
            src={shurva}
          />
          <img
            className="absolute top-[153px] left-[63px] rounded-[50%] w-[68px] h-[67px] object-cover"
            alt=""
            src={kabob}
          />
          <img
            className="absolute top-[83px] left-[63px] w-[68px] h-12 object-cover"
            alt=""
            src={osh}
          />
          <div className="absolute top-[164px] left-[58px] w-[71px] h-[63px]" />
          <div className="absolute top-[239px] left-[58px] w-[71px] h-[62px]" />
          <div className="absolute top-[315px] left-[58px] w-[71px] h-[62px]" />
          <div className="absolute top-[391px] left-[58px] w-[71px] h-[62px]" />
          <div className="absolute top-[466px] left-[58px] w-[71px] h-[63px]" />
          <img
            className="absolute top-[239px] left-[60px] w-[69px] h-[42px] object-cover"
            alt=""
            src={fastfood}
          />
          <img
            className="absolute top-[315px] left-[60px] w-[76px] h-[46px] object-cover"
            alt=""
            src={assorti}
          />
          <img
            className="absolute top-[398px] left-[63px] w-[67px] h-[43px] object-cover"
            alt=""
            src={salatlar}
          />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[375px] h-[153px] overflow-hidden">
          <img
            className="absolute top-[9px] left-[142px] w-[102px] h-[111px] object-cover"
            alt=""
            src={rasmlogo}
          />
        </div>
        <b className="absolute top-[142px] left-[150px] text-[25px] tracking-[-0.01em] flex text-darkslategray-200 items-center justify-center w-[86px] h-[22px]">
          MENU
        </b>
      </div>
    </>
  )
}

export default Home
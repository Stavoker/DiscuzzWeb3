import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { MdChat } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa';


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-3 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start text-center">
        <h1 className="text-white text-3xl sm:text-5xl sm:mb-[10%] py-2 text-gradient">
          <span className="levitate-1">Chat</span> <span className="levitate-2">Find</span> <span className="levitate-3">Earn</span> <br />
          Discuzz Network! <br />
          
        </h1>
      </div>


      <div className="flex-1 flex flex-col justify-start items-center left-move">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Discuzz Video-Chat"
          icon={<MdChat fontSize={21} className="text-white" />}
          subtitle="Connect with others in real-time video chats. Earn tokens by participating in calls, surveys, and discussions."
        />
        <ServiceCard
          color="bg-[#75b50c]"
          title="Discuzz FindMe"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Grow your network and find like-minded individuals. Create a profile and connect based on shared interests and goals."
        />
        <ServiceCard
          color="bg-[#c762c5]"
          title="Discuzz Crypto"
          icon={<FaCoins fontSize={21} className="text-white" />}
          subtitle="Effortlessly manage and transfer your tokens. Enjoy fast, secure transactions with low fees via BNB Smart Chain."
        />
      </div>
    </div>
  </div>


);

export default Services;

import React from "react";
// import photosnap from '../assests/static-job-listings-master/images/photosnap.svg'

const Jobs = (props) => {
  if (props.job.id === 1 || props.job.id === 2) {
  }

  return (
    <div className=" flex justify-center w-full">
      <div className="w-10/12 mx-auto">
        <div className="bg-white rounded relative w-full mt-12 p-4 flex-col space-y-[14px]">
          <div className="logo">
            <img src={props.job.logo} alt="" className="absolute" />
          </div>
          <div>
            <h3 className='text-Dark-Cyan text-lg'>{props.job.company} </h3>
            <p>{props.job.new}</p>
            <p>{props.job.featured}</p>
          </div>
          <h1 className="text-lg text-Very-Dark-Grayish-Cyan">
            {props.job.position}
          </h1>
          <div className="spans flex  ">
            <span className="mr-4">{props.job.postedAt}</span>
            <span className="w-1 h-1  rounded-full bg-Very-Dark-Grayish-Cyan text-center align-middle
            justify-center mt-2 mr-2"></span>
            <span className="mr-4">{props.job.contract}</span>
            <span className="w-1 h-1  rounded-full bg-Very-Dark-Grayish-Cyan text-center align-middle
            justify-center mt-2 mr-2"></span>
            <span className="mr-4">{props.job.location}</span>
          </div>
          <div className="my-8 md:hidden">
            <hr className="bg-slate-200 w-full space-y-10" />
          </div>
          <div className="tools flex gap-3 flex-wrap">
            <span>{props.job.role}</span>
            <span>{props.job.level}</span>
            <span>{props.job.Midweight}</span>
            <span>{props.job.languages[0]}</span>
            <span>{props.job.languages[1]}</span>
            <span>{props.job.languages[2]}</span>
            <span>{props.job.tools[0]}</span>
            <span>{props.job.tools[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

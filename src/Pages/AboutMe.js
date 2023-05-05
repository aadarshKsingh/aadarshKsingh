import { useState, useEffect } from "react";
import createClient from "../Sanity/client.js";
import React from "react";
function About() {
  const Image = React.memo(function Image({src,className,style,alt}){
      return <img src={src} className={className} style={style} alt={alt}/>
  })
  const [aboutData, setAbout] = useState("");
  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "about"]{
            background{
              asset->{
                _id,
                url
              }
            },
            profile{
              asset->{
                _id,
                url
              }
            },
            name,
            location,
            bio,
            tag1,
            tag2,
            tag3,
            skills
        }`
      )
      .then((data) => setAbout(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="w-full grid justify-center scale-100 ">
        <ul className="pt-12 hover:scale-105 ease-in duration-300">
          {aboutData &&
            aboutData.map((about, index) => {
              return (
                <div
                  className="
                 card mx-20 flex place-items-center text-center 
                    text-3xl flex-col justify-center items-center shadow-lg bg-profile-bg
                    rounded-xl w-min  text-profile-fg"
                  key={index}
                >
                  <div className="w-96">
                    <Image
                      src={about.background.asset.url}
                      alt="bg"
                      style={{ height: "150px", width: "400px" }}
                      className="bg-transparent pt-2  blur-3xl rounded-2xl "
                    />
                    <Image
                      src={about.profile.asset.url}
                      className="w-48 p-2 rounded-full ring-2 ring-red-600 shadow-black relative -top-28 left-[100px]"
                      alt="profile"
                    />
                  </div>
                  <div className=" text-2xl break-normal pb-16 -m-16 font-extrabold">
                    {about.name}
                  </div>
                  <div className="pb-7 subpixel-antialiased font-extrabold text-xl ">
                    {about.location}
                  </div>
                  <div className="pb-7 text-lg">{about.bio}</div>
                  <div className="flex text-lg pb-5 justify-between gap-x-11">
                    <p className="border-red-600 border-2 rounded-lg px-2">{about.tag1}</p>
                    <p className="border-red-600 border-2 rounded-lg px-2">{about.tag2}</p>
                    <p className="border-red-600 border-2 rounded-lg px-2">{about.tag3}</p>
                  </div>
                  <div
                    className="bg-[#121317] w-[27rem] justify-center truncat break-words flex-wrap text-sm text-black"
                    style={{ borderRadius: "0px 0px 0.75rem 0.75rem" }}
                  >
                    <div className="flex m-2 flex-wrap break-words">
                      {about.skills.split("\n").map((skill, ind) => (
                        <p key={ind} className="bg-[#363945] text-neutral-100 rounded-lg m-1 px-2 py-1 ">{skill}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default About;

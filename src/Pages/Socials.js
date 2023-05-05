import createClient from "../Sanity/client.js";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { NavLink } from "react-router-dom";
import React from "react";
function Socials() {
  const [socialsData, setSocials] = useState("");
  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "socials"]{
            title,
            link,
            image
        }`
      )
      .then((data) => setSocials(data))
      .catch(console.error);
  }, []);

  const builder = imageUrlBuilder(createClient);
  function urlFor(source) {
    return builder.image(source);
  }

  const Image = React.memo(function Image({src,className,style,alt}){
    return <img src={src} className={className} style={style} alt={alt}/>
})

  return (
    <div  >
      <div className="flex flex-wrap flex-row h-80 w-screen justify-center items-center">
        {socialsData &&
          socialsData
            .slice(0)
            .reverse()
            .map((social, index) => (
              <NavLink to={social.link} key={index}>
                <div
                  className="container card px-8 rounded-xl card shadow-sm flex flex-wrap place-items-center justify-end flex-col"
                >
                  <Image
                    src={urlFor(social.image).url()}
                    alt="img"
                    style={{
                      filter: "brightness(0) invert(1)",
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  <p className="text-center">{social.title}</p>
                </div>
              </NavLink>
            ))}
      </div>
    </div>
  );
}

export default Socials;

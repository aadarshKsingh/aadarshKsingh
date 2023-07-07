import createClient from "../Sanity/client.js";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Thoughts() {
  const [thoughtData, setThought] = useState(null);
  useEffect(() => {
    createClient
      .fetch(
        `*[_type=='Thought']{
          title,
        
          slug,
          postedOn,
    }`
      )
      .then((data) => setThought(data))
      .catch(console.error);
  }, []);

  return (
    <div className="relative lg:px-80 md:px-44 sm:px-16 pt-10">
      <div>
        <div className=" flex-wrap wrap-row">
          {thoughtData &&
            thoughtData.map((thought, index) => (
              <div
                className="container p-5 tracking-normal bg-white m-5 rounded-md backdrop-blur-md bg-opacity-75"
                key={index}
              >
                <section>
                <NavLink to={"/Thoughts/"+thought.slug.current} key={thought.slug.current}>
                  <p className="text-3xl font-extrabold">
                    {thought.title}
                  </p>
                  </NavLink>
                  <p className="h6">Posted On {thought.postedOn}</p>
                  <p className="pt-5 line-clamp-5">{thought.body}</p>
                </section>
              </div>
              
            ))}
        </div>
      </div>
    </div>
  );
}

export default Thoughts;

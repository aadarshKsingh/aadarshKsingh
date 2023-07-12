import React, { useState, useEffect } from "react";
import sanityClient from "../Sanity/client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
// import { PortableText } from "@portabletext/react";
// import BlockContent from "@sanity/block-content-to-react";
function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  // const components = {
  //   types: {
  //     // Define your custom components for each block type here
  //     // For example:
  //     paragraph: (props) => <p>{props}</p>,
  //     heading: (props) => <h2>{props}</h2>,

  //     // Fallback component for undefined types
  //     undefined: ({ children, index }) => (
  //       <div>
  //         <p key={index}>{children[index]}</p>
  //       </div>
  //     ),
  //     block: (children, index) => <p key={index}>{children[index]}</p>,
  //     span: (children, index) => <span key={index}>{children[index]}</span>,
  //   },
  // };
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
          title,
          "text": body[].children[].text,
          "body": body[_type == "image"] {
            "url": asset->url
          },
         
        }`
      )
      .then((data) => {
        return setSinglePost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="items-center w-full h-screen text-white flex flex-col py-48 font-extrabold">
        Loading Post...
      </div>
    );

  return (
    <main className="items-center relative py-10 mx-10 grid">
      <article className="card rounded-xl p-5 shadow-lg bg-white">
        <div>
          <div className="font-bold text-3xl">{singlePost.title}</div>
          <div className="pb-5 text-sm">Posted on {singlePost.postedOn}</div>
          <div>
            {singlePost.body[0] !== undefined ? (
              <img
                src={urlFor(singlePost.body).url()}
                className="sm:h-24 md:h-48 lg:h-64 my-5"
                alt={singlePost.title}
              />
            ) : (
              <></>
            )}
          </div>
          <div>
            {singlePost.text.map((block) => (
              <div key={block[0]}>{block}</div>
            ))}
            {/* <PortableText
              values={singlePost.text[0]}
              components={components}
              ignoreUnknownTypes={true}
            /> */}
          </div>
        </div>
      </article>
    </main>
  );
}

export default SinglePost;

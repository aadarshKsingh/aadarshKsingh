import React, { useState, useEffect } from "react";
import sanityClient from "../Sanity/client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import {PortableText,defaultComponents} from "@portabletext/react";
// import { serializers } from "@sanity/block-content-to-react/lib/targets/dom";
// import BlockContent from "@sanity/block-content-to-react";
function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  const components = {
    types:{
      block:{
        h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
        strong: ({children})=><strong className="text-2xl">{children}</strong>,
        span: ({children}) => <span className="text-2xl">{children}</span>
      },
      Object:{
        h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
        strong: ({children})=><strong className="text-2xl">{children}</strong>,
        span: ({children}) => <span className="text-2xl">{children}</span>
      },
      array:{
       
        h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
      
      },
      span:{
        span: ({children}) => <span className="text-2xl">{children}</span>
      }
  }
}
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
          title,
          body,
          link,
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
    function blocksToText(blocks) {
      return blocks
        .map(block => block.children.map(child => child.text).join(''))
    }
  return (
    <main className="items-center relative py-10 mx-10 grid">
      <article className="card rounded-xl p-5 shadow-lg bg-white">
        <div>
          <div className="font-bold text-3xl">{singlePost.title}</div>
          <div className="pb-5 text-sm">Posted on {singlePost.postedOn}</div>
          <div>
            {/* {singlePost.body[0] !== undefined ? (
              <img
                src={urlFor(singlePost.body).url()}
                className="sm:h-24 md:h-48 lg:h-64 my-5"
                alt={singlePost.title}
              />
            ) : (
              <></>
            )} */}
          </div>
          <div>
            {console.log(singlePost.body)}
            {JSON.stringify(singlePost.body)}
          <PortableText
          value={Object.values(singlePost.body)}
          components={components}
          onMissingComponent={false}
          />
          
          </div>
        </div>
      </article>
    </main>
  );
}

export default SinglePost;

import React, {useState, useEffect} from "react"
import sanityClient from '../Sanity/client'
import { useParams } from "react-router-dom"

function SinglePost(){
    const [singlePost,setSinglePost] = useState(null);
    const { slug } = useParams();
   
    useEffect(()=>{
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            image{
                asset->{url}
            },
            body,
            postedOn,
            link,
        }`).then((data)=>setSinglePost(data[0])).catch(console.error);
    }, [slug])

    if(!singlePost)
        return <div className="items-center w-full h-screen text-white flex flex-col py-48 font-extrabold">Loading Post...</div>


    return <main className="items-center relative py-10 mx-10 grid">
        <article className="card rounded-xl p-5 shadow-lg bg-white">
            <div>
                <div className="font-bold text-3xl">{singlePost.title}</div>
                <div className="pb-5 text-sm">Posted on {singlePost.postedOn}</div>
                <div>{singlePost.image!==null ? (<img src={singlePost.image.asset.url} className="sm:h-24 md:h-48 lg:h-64 my-5" alt={singlePost.title}/>):<></>}   
                </div>
                <div><p className="">{singlePost.body}</p></div>
            </div>
        </article>

    </main>
}

export default SinglePost;
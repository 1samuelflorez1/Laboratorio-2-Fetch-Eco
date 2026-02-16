import { useEffect, useState } from "react";
import type { PostTypes } from "./types/PostsTypes";
import { getStuff } from "./services/InfoDB";
import CardPost from "./components/CardPost";

function App() {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [ErrorFetching, setErrorFetching] = useState("");
  const [loading, setLoading] = useState(true);
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [img, setimg] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStuff();
        setTimeout(() => {
          setPosts(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setErrorFetching(`${error}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const HandleNewPost = async () => {
    
    const NewPost = {title, description, img}

    try{
      const ResponsePost = await fetch("http://localhost:3000/post", {
        method:"POST",
        headers: {
          "Content-Type": "aplication/json"
        },
        body: JSON.stringify(NewPost)
      });
      const Result = await ResponsePost.json()
      alert(`Post exitosamente publicado ${Result}`)
    } catch(error){
      alert(`${error}`)
    }
  }

  if (loading) {
    return(
    <div className="flex items-center justify-center min-w-screen">
      <span className="loading loading-bars loading-xl text-blue-800 size-15"></span>
    </div>
    )
  }

  if (ErrorFetching) {
    return (
    <div>
      <p className="text-white">{ErrorFetching}</p>
    </div>
    )
  }

  return (
    <div className="min-w-screen flex justify-center">
      <div className="p-8 flex flex-col items-center">
        <p className="text-6xl font-bold mb-6 text-black">
          Create post
        </p>
        <form
        onSubmit={HandleNewPost} 
        className="flex flex-col gap-4 mb-10">
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="text-black w-100 border p-2 rounded focus:outline-black border-black/20
            hover:border-blue-600 transition-all cursor-pointer placeholder:text-black/20"
            placeholder="Title"
            type="Text"
          />
          <input
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="text-black w-100 border p-2 rounded focus:outline-blue-600 border-black/20
              hover:border-blue-800 transition-all cursor-pointer placeholder:text-black/20"
            placeholder="Description"
            type="text"
          />
          <input
            value={img}
            onChange={(e) => setimg(e.target.value)}
            className="text-black w-100 border p-2 rounded focus:outline-blue-600 border-black/20
            hover:border-blue-800 transition-all cursor-pointer placeholder:text-black/20"
            placeholder="Image Link"
          />
          <div className="flex flex-col gap-2 mt-2">

            <button
              type="submit"
              className="bg-black text-white py-2 rounded 
            hover:bg-blue-700 transition w-100 cursor-pointer"
            >
              Create Post
            </button>

            {/* <button
              className="bg-black text-white py-2 rounded 
            hover:bg-blue-700 transition w-100 cursor-pointer"
            >
              List Posts
            </button> */}

          </div>
        </form>

        <div className="grid grid-cols-3 gap-15">
          {posts.length > 0 ? (
            posts.map((postIndividual: PostTypes) => {
              return (
                <CardPost
                  key={postIndividual.id}
                  CardIndividualPost={postIndividual}
                ></CardPost>
              );
            })
          ) : (
            <div>
              <p>No hay informacion</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

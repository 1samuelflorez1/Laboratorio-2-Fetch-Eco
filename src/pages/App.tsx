import { useEffect, useState } from "react";
// import type { PostTypes } from "../types/PostsTypes";
// import { getStuff } from "../services/InfoDB";
// import CardPost from "../components/CardPost";
import { useNavigate } from "react-router";

function App() {
  // const [posts, setPosts] = useState<PostTypes[]>([]);
  const [ErrorFetching, setErrorFetching] = useState("");
  const [loading, setLoading] = useState(true);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [img, setimg] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await getStuff();
        setTimeout(() => {
          // setPosts(data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setErrorFetching(`${error}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const HandleNewPost = async () => {
    const NewPost = { title, description, img };
    navigate("/listpost")
    try {
      const ResponsePost = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify(NewPost),
      });
      const Result = await ResponsePost.json();
      alert(`Post exitosamente publicado`);
      console.info(Result)

    } catch (error) {
      alert(`${error}`);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-xl text-blue-800 size-15"></span>
      </div>
    );
  }

  if (ErrorFetching) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-black text-2xl font-bold">{ErrorFetching}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-black text-white py-2 rounded mt-2 
            hover:bg-blue-700 transition w-50 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center mt-10">
      <div className="p-20 flex flex-col">
        <p 
        className="text-6xl font-thin mb-6 text-black cursor-pointer hover:text-blue-700
        transition-all hover:font-bold">Create Post</p>
        <form onSubmit={HandleNewPost} className="flex flex-col gap-4 mb-2">
          <input
            required
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="text-black w-100 border p-2 rounded focus:outline-black border-black/20
            hover:border-blue-600 transition-all cursor-pointer placeholder:text-black/20 hover:scale-x-110"
            placeholder="Title"
            type="Text"
          />
          <input
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="text-black w-100 border p-2 rounded focus:outline-blue-600 border-black/20
              hover:border-blue-800 transition-all cursor-pointer placeholder:text-black/20 hover:scale-x-110"
            placeholder="Description"
            type="text"
          />
          <input
            required
            value={img}
            onChange={(e) => setimg(e.target.value)}
            className="text-black w-100 border p-2 rounded focus:outline-blue-600 border-black/20
            hover:border-blue-800 transition-all cursor-pointer placeholder:text-black/20 hover:scale-x-110"
            placeholder="Image Link"
          />
          <div className="flex flex-col gap-2 mt-2">
            <button
              type="submit"
              className="bg-white text-black py-2 rounded hover:text-white
            hover:bg-blue-700 transition-all w-100 cursor-pointer font-light
            hover:font-bold hover:scale-x-110"
            >
              Create Post
            </button>

          </div>
        </form>
            <button
              onClick={() => navigate("/listpost")}
              className="bg-white text-black py-2 rounded hover:text-white
            hover:bg-blue-700 transition-all w-100 cursor-pointer font-light
            hover:font-bold hover:scale-x-110"
            >
             Go to List Posts
            </button>
      </div>
    </div>
  );
}

export default App;

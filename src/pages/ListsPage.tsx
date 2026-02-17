import { useEffect, useState } from "react";
import type { PostTypes } from "../types/PostsTypes";
import { getStuff } from "../services/InfoDB";
import CardPost from "../components/CardPost";
import { useNavigate } from "react-router";

function ListPost() {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [ErrorFetching, setErrorFetching] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStuff();
        setTimeout(() => {
          setPosts(data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setErrorFetching(`${error}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const HandleDelete = async (id: number) => {
    try {
      const ResponsePost = await fetch(`http://localhost:3000/post/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "aplication/json",
        },
      });
      const Result = await ResponsePost.json();
      alert(`Post exitosamente eliminado ${Result}`);
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
    <div className="min-h-screen flex justify-center">
      <div className="p-8 flex flex-col items-center">
        <p className="text-6xl font-bold mb-6 text-black">List Posts</p>
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white py-2 rounded 
            hover:bg-blue-700 transition w-100 cursor-pointer"
        >
          Go to Create Post
        </button>

        <div className="grid grid-cols-3 gap-15 mt-15">
          {posts.length > 0 ? (
            posts.map((postIndividual: PostTypes) => {
              return (
                <CardPost
                  Ondelete={HandleDelete}
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

export default ListPost;

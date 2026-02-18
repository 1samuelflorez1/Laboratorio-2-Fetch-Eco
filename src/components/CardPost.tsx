import type { PostTypes } from "../types/PostsTypes";

function CardPost({ CardIndividualPost, Ondelete}: { CardIndividualPost: PostTypes; Ondelete: (id: number) => void}) {

  function OnDeleteFunction (){
    Ondelete(CardIndividualPost.id)
    window.location.reload()
  }

  return (
    <>
      <div
        className={`p-10 bg-black/10 mb-10 flex flex-col w-100 rounded-2xl cursor-pointer 
        hover:scale-110 transition-all blur-md hover:blur-none hover:bg-blue-600/20 hover:border-blue-700 
        hover:border-2`}
      >
        <p className="text-3xl font-bold mb-2 text-black/80">
          {CardIndividualPost.title}
        </p>
        <p className="font-normal mb-3 text-black">
          {CardIndividualPost.description}
        </p>
        <img
          className="w-100 h-auto rounded-2xl drop-shadow-xl"
          src={CardIndividualPost.img}
        ></img>
        <button
          onClick={() => OnDeleteFunction()}
          className="mt-2 bg-black font-light
            hover:font-bold transition-all py-2 rounded hover:w-78
            hover:bg-blue-700 w-60 self-center cursor-pointer"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default CardPost;

import type { PostTypes } from "../types/PostsTypes"

function CardPost ({CardIndividualPost}: {CardIndividualPost: PostTypes}) {

    return (<>
        <div className={`p-10 bg-black/10 mb-10 flex flex-col w-100 rounded-2xl cursor-pointer 
        hover:scale-110 transition-all blur-md hover:blur-none`}>
            <p className="text-3xl font-bold mb-2 text-black/80">{CardIndividualPost.title}</p>
            <p className="font-normal mb-3 text-black">{CardIndividualPost.description}</p>
            <img className="w-100 h-auto rounded-2xl drop-shadow-xl" src={CardIndividualPost.img}></img>
            <button className="mt-2 bg-black text-white py-2 rounded 
            hover:bg-blue-700 transition w-auto cursor-pointer">Delete</button>
        </div>
    </>)
}

export default CardPost
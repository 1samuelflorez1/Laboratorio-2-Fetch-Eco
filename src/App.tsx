function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black/20 p-4">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md">
        <p className="text-3xl font-bold mb-6 text-center text-white">
          Create post
        </p>
        <form className="flex flex-col gap-4">
          <input
            className="w-full border p-2 rounded focus:outline-blue-500"
            placeholder="Image Link"
          />
          <input
            className="w-full border p-2 rounded focus:outline-blue-500"
            placeholder="Title"
            type="text"
          />
          <input
            className="w-full border p-2 rounded focus:outline-blue-500"
            placeholder="Description"
            type="text"
          />
          <div className="flex flex-col gap-2 mt-2">
            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Create Post
            </button>
            <button className="text-blue-600 border border-blue-600 py-2 rounded hover:bg-blue-50 transition">
              List Posts
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

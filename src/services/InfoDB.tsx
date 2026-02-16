const getStuff = async () => {
    const Response = await fetch("http://localhost:3000/post")
    const data = await Response.json()
    return data.results
}
export {getStuff}
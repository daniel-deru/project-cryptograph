import express from "express"

const server = express()

server.use(express.static("public"))

server.get("/", (req, res) => {
    res.redirect("/encode.html")
})


const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`server is lisetening on port ${port}`)
})
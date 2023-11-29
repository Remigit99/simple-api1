const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const myProduct = require("./model/productModel")

const app = express()

const PORT = process.env.PORT || 9092

app.use(express.json())

app.post("/product", async (req, res) => {
    // console.log(req.body)
    // res.send(req.body)

    try {

        const product = await myProduct.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        console.log(error)
    }

})


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database connected Successfully")
        app.listen(PORT, () => console.log(`Server listen on PORT ${PORT}`))
    }).catch((err) => console.log(err))

// const seriesList = [{
//     title: "Game of Thrones",
//     seasons: 8
// },
// {
//     title: "Fix The Fox",
//     seasons: 2
// },
// {
//     title: "Legend Of The Seeker",
//     seasons: 4
// },
// {
//     title: "Into The Badlands",
//     seasons: 4
// }
// ]

// //Middleware

// app.use(express.json())
// app.use((req, res, next) => {
//     console.log(`${req.method} : ${req.url}`)
//     next()
// })

// app.get('/series', (req, res) => {
//     res.send(seriesList)
// })

// app.get('/series/:title', (req, res) => {
//     res.send(seriesList[title])
// })

// app.post("/series", (req, res) => {
//     console.log(req.body)
//     seriesList.push(req.body)
//     res.send("Success")

// })
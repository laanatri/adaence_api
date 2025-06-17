const express = require("express");
const cors = require("cors");

const app = express();
const port = 8888;
app.use(cors());
app.use(express.json());

app.use('/elders', require('./routes/elderRoute'));
app.use('/activities', require('./routes/activityRoute'));





module.exports = {app};




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});






// app.post('/elder', (req, res) => {
//     const newElder = {
//         firstname: req.body.firstname,
//         age: req.body.age,
//         job: req.body.job,
//         city: req.body.city,
//         zipcode: req.body.zipcode,
//         description: req.body.description,
//         imageUrl: req.body.imageUrl,
//         type: req.body.type
//     };

//     elders.push(newElder);
//     res.status(201).json(newElder);
// });

// app.get("/elder", (req, res) => {
//     res.send({elders: elders});
// });

// app.get('/elder/search', (req, res) => {
//     const { type = "Tous les moments possibles", city = "", page = 1, limit = 10} = req.query
    
//     let elders_result = elders.filter((elder) => {
//         const matchesType = type.toLowerCase() === "tous les moments possibles" || elder.type.toLowerCase() === type.toLowerCase();
//         const matchesCity = city.toLowerCase() === "" || elder.city.toLowerCase().includes(city.toLowerCase())
//         return matchesType && matchesCity
//     })

//     let elders_result_sliced = elders_result.slice((page - 1) * limit, page * limit)
    
//     if(elders_result.length === 0){
//         return res.status(404).send(`No user for this research`)
//     }
    
//     res.json({elders: elders_result_sliced, total: elders_result.length});
// });

// app.put('/elder/:firstname', (req, res) => {
//     const firstname = req.params.firstname
//     let elder = elders.find(elder => elder.firstname === firstname)
    
//     if(!elder){
//         return res.status(404).send(`Elder not found`)
//     }
    
//     elder.firstname = req.body.firstname,
//     elder.age = req.body.age,
//     elder.job = req.body.job,
//     elder.city = req.body.city,
//     elder.zipcode = req.body.zipcode,
//     elder.description = req.body.description,
//     elder.imageUrl = req.body.imageUrl,
//     elder.type = req.body.type
//     res.status(200).json(elder)
// })

// app.delete('/elder/:firstname', (req,res) => {
//     const firstname = req.params.firstname
//     let elder = elders.find(elder => elder.firstname === firstname)    
    
//     if(!elder){
//         return res.status(404).send(`Elder not found`)
//     }

//     const deleted = elders.splice(elders.indexOf(elder),1)   
    
//     res.status(200).json(deleted)
// })








// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.get('/elder/:age', (req, res) =>{
//     const elderAGE = parseInt(req.params.age)
//     const elder = elders.filter((elder) => elder.age === elderAGE)

//     if(elder.length === 0){
//         return res.status(404).send(`No user with the AGE of ${elderAGE}`)
//     }

//     res.json(elder)
// })

// app.get('/elder/:type', (req, res) =>{
//     const elderTYPE = req.params.type.toLowerCase()
//     const elder = elders.filter((elder) => elder.type.toLowerCase() === elderTYPE)

//     if(elder.length === 0){
//         return res.status(404).send(`No user for the activity of ${elderTYPE}`)
//     }

//     res.json(elder)
// })
import { createServer } from "http";
import https from 'https';
let myserver = createServer((req, res)=>{
    // res renderiza los mensajes al servidor
    let data = "";
    https.get("https://api.nasa.gov/planetary/apod?api_key=5WjbHT1Oqu2o9vdlregm5Jw2Mrq9pUVnbTpYuDdz", (peticion)=>{
        peticion.on("data", (chuck)=>{
            data += chuck;
        })
        peticion.on("end", ()=>{
            res.end(data);
        })
    })

    // let datos = "";
    // req.on("data", (chuck)=>{
    //     datos += chuck;
    // })
    // req.on("end", ()=>{
    //     res.end(datos);
    // })
})

const config = {
    hostname : "127.9.0.198",
    port : 5001
}
myserver.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}/`);
});
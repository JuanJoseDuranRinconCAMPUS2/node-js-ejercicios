import { createServer } from "http";
import https from 'https';
let myserver = createServer((req, res)=>{
    // res renderiza los mensajes al servidor
    let data = "";
    if(req.url == "/posts"){
        https.get("https://jsonplaceholder.typicode.com/posts", (peticion)=>{
        peticion.on("data", (chuck)=>{
            data += chuck;
        })
        peticion.on("end", ()=>{
            let plantilla = /*HTML*/`
            <table style="border-collapse: collapse; border: 3px solid #ccc;">
                <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                </thead>
                <tbody>
            `;
            data = JSON.parse(data);
            data.forEach((val, id) => {
                plantilla+= /*HTML*/`
                    <tr>
                        <td>${val.userId}</td>
                        <td>${val.id}</td>
                        <td>${val.title}</td>
                        <td>${val.body}</td>
                    </tr>
                `;
            });
            plantilla+= /*HTML*/`
                    </tbody>
                </table>
            `;
            res.end(plantilla);
        })
    })
    }else if(req.url == "/comments"){
        https.get("https://jsonplaceholder.typicode.com/comments", (peticion)=>{
            peticion.on("data", (chuck)=>{
                data += chuck;
            })
            peticion.on("end", ()=>{
                let plantilla = /*HTML*/`
                <table style="border-collapse: collapse; border: 3px solid #ccc;">
                    <thead>
                    <tr>
                        <th>postId</th>
                        <th>id</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                    </thead>
                    <tbody>
                `;
                data = JSON.parse(data);
                data.forEach((val, id) => {
                    plantilla+= /*HTML*/`
                        <tr>
                            <td>${val.postId}</td>
                            <td>${val.id}</td>
                            <td>${val.email}</td>
                            <td>${val.body}</td>
                        </tr>
                    `;
                });
                plantilla+= /*HTML*/`
                        </tbody>
                    </table>
                `;
                res.end(plantilla);
            })
        })
    }else if(req.url == "/albums"){
        https.get("https://jsonplaceholder.typicode.com/albums", (peticion)=>{
            peticion.on("data", (chuck)=>{
                data += chuck;
            })
            peticion.on("end", ()=>{
                let plantilla = /*HTML*/`
                <table style="border-collapse: collapse; border: 3px solid #ccc;">
                    <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                    </thead>
                    <tbody>
                `;
                data = JSON.parse(data);
                data.forEach((val, id) => {
                    plantilla+= /*HTML*/`
                        <tr>
                            <td>${val.userId}</td>
                            <td>${val.id}</td>
                            <td>${val.title}</td>
                        </tr>
                    `;
                });
                plantilla+= /*HTML*/`
                        </tbody>
                    </table>
                `;
                res.end(plantilla);
            })
        })
    }else if(req.url == "/photos"){
        https.get("https://jsonplaceholder.typicode.com/photos", (peticion)=>{
            peticion.on("data", (chuck)=>{
                data += chuck;
            })
            peticion.on("end", ()=>{
                let plantilla = /*HTML*/`
                <table style="border-collapse: collapse; border: 3px solid #ccc;">
                    <thead>
                    <tr>
                        <th>albumId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                    </tr>
                    </thead>
                    <tbody>
                `;
                data = JSON.parse(data);
                data.forEach((val, id) => {
                    plantilla+= /*HTML*/`
                        <tr>
                            <td>${val.albumId}</td>
                            <td>${val.id}</td>
                            <td>${val.title}</td>
                            <td><img src="${val.url}" width= 200px;> </td>
                            <td><img src="${val.thumbnailUrl}" width= 200px;> </td>


                        </tr>
                    `;
                });
                plantilla+= /*HTML*/`
                        </tbody>
                    </table>
                `;
                res.end(plantilla);
            })
        })
    }else if(req.url == "/todos"){
        https.get("https://jsonplaceholder.typicode.com/todos", (peticion)=>{
            peticion.on("data", (chuck)=>{
                data += chuck;
            })
            peticion.on("end", ()=>{
                let plantilla = /*HTML*/`
                <table style="border-collapse: collapse; border: 3px solid #ccc;">
                    <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                    </thead>
                    <tbody>
                `;
                data = JSON.parse(data);
                data.forEach((val, id) => {
                    plantilla+= /*HTML*/`
                        <tr>
                            <td>${val.userId}</td>
                            <td>${val.id}</td>
                            <td>${val.title}</td>
                            <td>${val.completed}</td>
                        </tr>
                    `;
                });
                plantilla+= /*HTML*/`
                        </tbody>
                    </table>
                `;
                res.end(plantilla);
            })
        })
    }else if(req.url == "/users"){
        https.get("https://jsonplaceholder.typicode.com/users", (peticion)=>{
            peticion.on("data", (chuck)=>{
                data += chuck;
            })
            peticion.on("end", ()=>{
                let plantilla = /*HTML*/`
                <table style="border-collapse: collapse; border: 3px solid #ccc;">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>address/street</th>
                        <th>address/suite</th>
                        <th>address/city</th>
                        <th>address/zipcode</th>
                        <th>address/geo/lat</th>
                        <th>address/geo/lng</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>company/name</th>
                        <th>company/catchPhrase</th>
                        <th>company/bs</th>

                    </tr>
                    </thead>
                    <tbody>
                `;
                data = JSON.parse(data);
                data.forEach((val, id) => {
                    plantilla+= /*HTML*/`
                        <tr>
                            <td>${val.id}</td>
                            <td>${val.name}</td>
                            <td>${val.email}</td>
                            <td>${val.address.street}</td>
                            <td>${val.address.suite}</td>
                            <td>${val.address.city}</td>
                            <td>${val.address.zipcode}</td>
                            <td>${val.address.geo.lat}</td>
                            <td>${val.address.geo.lng}</td>
                            <td>${val.phone}</td>
                            <td>${val.website}</td>
                            <td>${val.company.name}</td>
                            <td>${val.company.catchPhrase}</td>
                            <td>${val.company.catchPhrase}</td>
                        </tr>
                    `;
                });
                plantilla+= /*HTML*/`
                        </tbody>
                    </table>
                `;
                res.end(plantilla);
            })
        })
    }

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

// https://api.nasa.gov/planetary/apod?api_key=5WjbHT1Oqu2o9vdlregm5Jw2Mrq9pUVnbTpYuDdz
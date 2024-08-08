import * as axios from "axios";

const client = axios.default;



client.get(' http://localhost:7001').then((response) => {
    console.log(response.data);
})

client.get(' http://localhost:7001/task/234/summary').then((response) => {
    console.log(response.data);
})

client.post("http://localhost:7001/task/create",{
    name: "界面设计",
    description:"敏捷看板"
},
    {
            headers:{
                "content-type": "application/json"
            }
    }
    ).then((response) => {
        console.log(response.data);
        console.log(response);
        console.log(response.status);
        console.log(response.request);
})
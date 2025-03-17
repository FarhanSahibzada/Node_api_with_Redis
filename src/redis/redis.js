import { client } from "../app.js";

export async function init() {
    try {
        const result = await client.del("name",)
        console.log(result)

    } catch (error) {
        console.log("error when sending the data", error)
    }

}


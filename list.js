import client from "./client.js";


async function init() {
    // await client.lpush('messages', 1);
    // await client.lpush('messages', 2);
    // await client.lpush('messages', 3);
    // await client.lpush('messages', 4);
    const result = await client.blpop("messages", 2);
    console.log(result);
}

init()
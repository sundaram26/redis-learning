import client from "./client.js";

async function init() {
    // await client.set('msg:6', 'Hey from Node.js');
    // await client.expire("msg:6", 10); //key and ttl in sec
    const result = await client.get('msg:6');
    console.log("Result -> ", result);
}

init();
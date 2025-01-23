const mongoose = require("mongoose");
const initData = require("./init.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() =>{
    console.log("connected to db");
}).catch(err =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj)=>({
            ...obj,
            owner:"66bf6ece8862869d1a8c0e99",
        }));
        await Listing.insertMany(initData.data);
        console.log("data initialised");
}

initDB();
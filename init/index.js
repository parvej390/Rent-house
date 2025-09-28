const mongoose = require("mongoose");
const initData = require("./Data.js");
const listing = require("../models/listing.js");

const Mongo_url = "mongodb://127.0.0.1:27017/test";

main()
    .then(() => {
        console.log("connected to database");
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect(Mongo_url);
}

const initDB = async () => {
    await listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "68bd60a74926687f513aeca6"}));
    await listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
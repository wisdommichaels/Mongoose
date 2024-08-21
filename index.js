import dotenv from "dotenv";
import connectdb from "./db.js";
import cast from "./models/castModel.js";

dotenv.config();

const main = async ()=>{
    try {
        await connectdb();
        console.log("MongoDB connected");
}
    catch (error) {
        console.error("Error connecting to MongoDB", error.message);
        process.exit(1);
    }
    const addCast = new cast({
        name: "John Doe",
        age: 30,
        nationality: "American",    
    });
    addCast.save().then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}
main()
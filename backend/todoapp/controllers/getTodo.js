import todo from "../models/todo.js";

const getTodo = async (req, res) => {
    try{
        //fetch all todo items from database
        const todoItems = await todo.find({});
        //response
        res.status(200).json({
            success : true,
            data : todoItems,
            message : "Entire todo data is fetched"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            error : err.message,
            message : "Server Error!"
        })
    }
}

export default getTodo;
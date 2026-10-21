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

// export default getTodo;

const getTodoById = async (req, res) => {
    try{
        const id = req?.params?.id;
        const result = await todo.find({_id : id});

        if(!result){
            return res.status(404).json({
                success : false,
                message : "No data found with given id"
            })
        }
        //Data for given Id is found
        res.status(200).json({
            success :  true,
            data : result,
            message : `Todo ${id} data fetched successfully!`
        })
    }
    catch(err) {
        console.log(err);
        res.send(500).json({
            success : false,
            data : err.message,
            message : "Server Error!"
        })
    }
}

export {getTodo, getTodoById};
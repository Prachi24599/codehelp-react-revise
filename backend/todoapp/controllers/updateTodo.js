import Todo from "../models/todo.js";

const updateTodo = async(req, res) => {
    try{
        const {id} = req?.params;
        const {title, description} = req?.body;
        const updatedResult = await Todo.findByIdAndUpdate(
            {_id : id},
            {title, description, updatedAt : Date.now()} 
        )
        res.status(200).json({
            success : true,
            data : updatedResult,
            message : "Updated Successfully!"
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

export default updateTodo;
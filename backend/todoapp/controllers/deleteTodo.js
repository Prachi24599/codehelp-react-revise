import Todo from "../models/todo.js"

const deleteTodo = async(req, res) => {
 try{
        const {id} = req?.params;
        const deleteId = await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message : "Deleted Todo"
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

export default deleteTodo;
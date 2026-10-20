import Todo from "../models/todo";

//define route handler
const createTodo = async (req, res) => {
    try{
        //extract title and description from the request body
        const {title, description} = req.body;
        //create a new todo object and insert in the db
        const response = await Todo.create({title, description});
        res.status(200).json({
            success : true,
            data : response,
            message : "Entry created successfully!"
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            success : false,
            data : "Internal Server Error!!",
            message : err.message
        })
    }
}

export default createTodo;
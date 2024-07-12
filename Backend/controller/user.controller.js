import User from "../model/user.model.js";


//Post data
export const create = async (req, res) => {
    try {

        const userData = new User(req.body);

        if (!userData) {
            return res.status(404).json({ msg: "User data not found" })
        }
        const savedData = await userData.save();
        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({ error });
    }
}


//get data

export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            res.status(404).json({ msg: "Data not found" })
        }
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({ error });
    }
}


// getOne data

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404)({ msg: "User not found" })
        }
        res.status(404).json(userExist)

    } catch (error) {
        res.status(500).json({ error })
    }
}


//update 

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401)({msg: "User not found"})
        }
        const updateData = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updateData);

    } catch {
        res.status(500).json({ error })
    }
}


//Delete

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404)({msg:"user not exist"})
        }
       const trashData = await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User deleted successfully" , "data" : trashData})
        
    } catch (error) {
        res.status(500).json(({ error }))
    }
}
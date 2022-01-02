import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    name: {type: String, required: true},
    email: {tpye: String, required: true},
    password: {tpye: String, required: true},
    id: {tpye: String}


});

export default mongoose.model("User", userSchema);
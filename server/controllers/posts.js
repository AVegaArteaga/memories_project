import PostMessage from "../models/postMessage.js";
//import express from 'express';
import mongoose from 'mongoose';

export const getPosts = async (reg, res) => {

    //res.send('Cock and ball torture mr freeman, Cock and ball torture.')
    try{
        const postMessages = await PostMessage.find();
        //console.log(postMessages);

        res.status(200).json(postMessages);

    } catch (error){
        res.status(404).json({message: error.message});
    }

}

export const createPost = async (reg, res) =>{

    const post = reg.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save(); //async
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
        
    }
}

export const updatePost = async (req, res) =>{
    const { id: _id  } = req.params;
    const post = req.body; //sent from the front end

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id'); //if mongose ID 

    const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {new: true}); //reseive updated post

    res.json(updatePost); //send over updated post

}

export const deletePost = async(req, res ) =>{
    const {id} = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id'); //if mongose ID 

    await PostMessage.findByIdAndRemove(id);

    console.log('DELETE');

    res.json({message: 'Post deleted successfully'})
} 
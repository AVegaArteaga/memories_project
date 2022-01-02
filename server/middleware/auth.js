//middleware is

import jwt from 'jsonwebtoken';

//wants to like a post
//click the like button => auth middleware(next) => like controller 

const auth = async (req, res, next) =>{ // next means do something and move to the next thing
   
    try {
        const token = req.headers.authorization.split(" ")[1]; //just the token 1st position of array
        
        const isCustomAuth = token.length < 500; //if less then its ours, if more then is GoogleAuth

        let decodedData;
        
        if( token && isCustomAuth){ // if working with our token
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData.id;
        }
        else{
            decodedData = jwt.decode(token);
            req.userId = decodedData.sub; 
        }

        next(); //pass the action
    } catch (error) {
        console.log(error);
    }
}

export default auth;
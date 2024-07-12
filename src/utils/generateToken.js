import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {

    const payload = { 
        userId: userId.toJSON()
    };
 
    const options = {
        expiresIn: '1h' // Set expiration time to 1 hour
    };

    //const token = jwt.sign(payload, 'your-secret-key', options); // 

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, options)

    

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 10 * 24 *60 * 60 * 1000
    })
}

export default generateToken
const notFound = (req,res,next) => {
    const error = new Error (`not found - ${req.originalUrl}`);
    res.status(404);
    next(error); //  also we can use res.send but we use next middleware, so, it
    // it will enter for next function
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    })
}

export {notFound, errorHandler}
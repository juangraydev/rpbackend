const jwt = require('jsonwebtoken')

module.exports = () => {
    return (req, res, next)=>{
        console.log('Authorization Middleware');
        
        // Find JWT in Headers
        const token = req.headers['authorization']
        if(!token){
            res.status(401).send("Unauthorize")
        }else{
            const tokenBody = token.slice(7);

            jwt.verify(tokenBody, process.env.SECRET_KEY, (err, decoded) => {
                if(err) {
                    console.log(`JWT Error: ${err}`);
                    return res.status(401).send("Error: Access Denied")
                }
                // No Error, JWT is good!
                next();
            })
        }
    }
}
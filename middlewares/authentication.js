const { ValidateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next)=>{
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue){
            next();
        }
       try{
        const userPaylaod = ValidateToken(tokenCookieValue);
        req.user = userPaylaod;
       }catch (error) {}
       
       next();

    };
}


module.exports ={
    checkForAuthenticationCookie,
};
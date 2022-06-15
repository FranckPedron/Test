/**
 *Catches any error that could occur when executing a method and goes to the next middleware
 * Allows to keep the server running even if an error occurs
 * @param method
 * @returns {(function(*, *, *): Promise<void>)|*}
 */
const routerWrapper = (method)=>{

    return async (req,res,next)=>{

        try{
            await method(req,res,next);
        }
        catch(err){
            next(err);
        }
    }
};

module.exports = routerWrapper;

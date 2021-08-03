const date = new Date() 
const day = date.getUTCDay()


const time = (req , res , next) =>{
    if (day != 6 && day != 7)
    {
        next()
    }
    else
{
    res.status( 401).send('we are closed today ')
}}
module.exports =time ;
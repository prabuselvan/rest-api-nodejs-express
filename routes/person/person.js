let express = require('express');
let router = express();

// queryString --> query property on the request object
router.get('/person',(req, res)=> {
    res.send('Requested the person');
});

router.get('/person/:name',(req,res)=> {
    console.log(`parameters are ${req.params.name}`);
    res.send(`Person By Name is ${req.params.name}`);
})
module.exports= router;
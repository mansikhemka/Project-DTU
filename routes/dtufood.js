/**
 * Created by mansikhemka on 03/10/16.
 */

const express = require('express');
const router=express.Router();

const dtufood = [
    {
        place:"Mexy",
        desc :"Near Amul",
        path :"/mexy"
    },
    {
        place: "Nescafe",
        desc : "Near Audi",
        path : "/nescafe"

     },
    {
        place: "Mic Mac",
        desc : "Near senior boys hostel",
        path : "/micmac"
    }

];

router.get('/',(req,res)=>{
    res.render('dtufood', {dtufood:dtufood});
});

module.exports = router;
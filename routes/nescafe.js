/**
 * Created by mansikhemka on 03/10/16.
 */


const express = require('express');
const router = express.Router();

const menu = [
    {
        dish: "Ice Tea",
        cost : "Rs 25/-"
    },
    {
        dish: "Truffle",
        cost : "Rs 55/-"
    },
    {
        dish: "Maggie",
        cost : "Rs 35/-"
    }
];

router.get('/', (req, res) => {
   res.render('nescafe', {menu:menu});
});

module.exports = router;
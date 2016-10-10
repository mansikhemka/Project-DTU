/**
 * Created by mansikhemka on 03/10/16.
 */


const express = require('express');
const router = express.Router();

const menu=[
    {
       dish: "Paneer Parantha",
        cost: "Rs 40/-"
    },
    {
        dish: "Burger",
        cost: "Rs 35/-"
    },
    {
        dish: "Rajma Chawal",
        cost: "Rs 40/-"
    }
];

router.get('/', (req, res) => {
   res.render('micmac', {menu:menu});
});

module.exports = router;
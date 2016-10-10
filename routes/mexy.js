/**
 * Created by mansikhemka on 03/10/16.
 */

const express = require('express');
const router = express.Router();

const mexy=[
    {
        dish : "Chilly Potato",
        cost : "Rs 120/-"
    },
    {
        dish : "Kachodi Sabdzi",
        cost : "Rs 40/-"
    },
    {
        dish : "Masala Dosa",
        cost : "Rs 80/-"
    }
];

router.get('/', (req, res) => {
   res.render('mexy', {mexy: mexy});
});

module.exports = router;
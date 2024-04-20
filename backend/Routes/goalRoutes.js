const express = require('express');
const router = express.Router();
const {getGoals} = require('../Controllers/goalController.js')
const {postGoal} = require('../Controllers/goalController.js')
const {updateGoal} = require('../Controllers/goalController.js')
const {deleteGoal} = require('../Controllers/goalController.js')

// router.get('/', getGoals);
// router.post('/', postGoal);
// we can put the above two in one line of code as the below.
router.route('/').get(getGoals).post(postGoal)

// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);
// we can also put the two in one line of code.
router.route('/:id').put(updateGoal).delete(deleteGoal)




//Exporting the router variable
module.exports = router;


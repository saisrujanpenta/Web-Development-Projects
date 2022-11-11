// const User = require('../models/User')
const User = require('../models/User')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const hashedPass = 10;

//Show the list of users

const index = (req, res, next) => {
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occurred!'
        })
    })
}

//Show single user

const show = (req, res, next) => {
    let userID = req.body.userID
    User.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occurred!'
        })
    })
}

//add new user

const store = (req, res, next) => {
// const hashedPass = bcrypt.hash(req.body.password);
    // bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
    //     if(err) {
    //         res.json({
    //             error: err
    //         })
    //     }
    // })

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

user.save()
.then(response => {
    res.json({
        message: 'User Added Successfully!'
    })
})
.catch(error => {
    res.json({
        message: 'An error occurred!'
    })
})

}

//update a user

const update = (req, res, next) => {
    let userID = req.body.userID

    let updateData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    User.findByIdAndUpdate(userID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'User Updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occurred!'
        })
    })
}

//delete a user

const destroy = (req, res, next) => {
    let userID = req.body.userID
    User.findOneAndRemove(userID)
    .then(() => {
        res.json({
            message: 'User deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occurred!'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}

import { validationResult } from 'express-validator';

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        console.log(err);
        //TODO: CREATE A CUSTOM HUNDLE ERROR FOR THIS CATCH SECTION
        res.status(403).send({ errors: err.array() })
    }
}

module.exports = { validateResult }
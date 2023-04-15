const { ErrorHandler } = require("./errorHelper");

exports.havePermission = (req, userId) => {
    if (userId != req.user.id && !req.user.roll !== "admin")
        throw new ErrorHandler(402, "you dont have promithon to make change! ");
};

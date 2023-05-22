require("dotenv").config();
// console.log(process.env.COLECTION_DB);
exports.config = {
    URL_DB : process.env.URL_DB,
    COLECTION_DB : process.env.COLECTION_DB,
    TOKEN_SECRET : process.env.TOKEN_SECRET
}
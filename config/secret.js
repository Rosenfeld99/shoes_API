require("dotenv").config();
// console.log(process.env.COLECTION_DB);
exports.config = {
  URL_DB: process.env.URL_DB,
  COLECTION_DB: process.env.COLECTION_DB,
  PASS_DB: process.env.PASS_DB,
  USER_DB: process.env.USER_DB,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};

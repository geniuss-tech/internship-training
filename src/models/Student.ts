import Sequelize from "sequelize";
import db from "../config/database";

const Student = db.define("Student", {
  ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  birthdate: {
    type: Sequelize.DATEONLY,
  },
});

export default Student;

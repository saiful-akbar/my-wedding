import PropTypes from "prop-types";
import db from "@/database/db.json";

/**
 * Hooks DB
 *
 * @param {func} callback
 * @returns object
 */
const useDB = (callback) => callback(db);

/**
 * Prop types
 */
useDB.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default useDB;

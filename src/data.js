const database = JSON.parse(localStorage.getItem("db")) || {
  mon: [],
  tue: [],
  wed: [],
  thu: [],
  fri: [],
  sat: [],
  sun: [],
};
export default database;

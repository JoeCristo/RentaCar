const REGEXP_NAME = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\ ]{2,50}$/;
const REGEXP_PHONE = /^(\((\+34|0034)\)[6789][0-9]{8}|[6789][0-9]{8})$/;
const REGEXP_DNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/;
const REGEXP_ADDRESS = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ1234567890\ \/\º\-]{2,50}$/;
const CLIENTS = "clients";
const GARAGES = "garages";
const EMPLOYEES = "employees";
const INACTIVE = "inactivo";
const ACTIVE = "activo";
const ADD_CORRECT = "Customer successfully added";
const MODIFIED_CORRECT = "Customer Modified Correctly"
const INCORRECT_NAME = "*Incorrect name";
const INCORRECT_PHONE = "*Incorrect phone";
const INCORRECT_DNI = "*Incorrect DNI";
const INCORRECT_ADDRESS = "*Incorrect address";
const FILL_FIELDS = "*Please, fill all the fields";
const COLOR_PRIMARY = "#337ab7";
const COLOR_WARRNIG = "red";
const PERSON_NOT_EXISTS = "*This client don't exists in our database, check dni please";
const PERSON_EXISTS = "*This client exists in our database";
const NO_CAR_SELECT = '*No car selected yet';
const NO_DAYS = '*No specified days';
const ADD_BOOKING = "Booking made successfully";
const FORMAT_DATE = 'YYYY-MM-DD HH:mm:ss';
const FORMAT_NO_HOUR = 'YYYY-MM-DD';
const DAYS = 'days';
const INCORRECT_DATE = '*Date start format not valid';
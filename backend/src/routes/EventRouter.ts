import { Router } from "express";
import { body, param } from "express-validator";
import { AuthRequired, handleInputError } from "../middleware";
import {
  createEvent,
  deleteEvent,
  getEventbyId,
  getEvents,
  updateEvent,
} from "../controllers/EventController";
const router = Router();

router.use(AuthRequired);

// obtener Eventos
router.get("/", getEvents);

// obtner un evento
router.get(
  "/:id",
  // validacion con express-validator
  param("id").isMongoId().withMessage("Invalid event ID"),
  handleInputError,
  getEventbyId
);

// crear un evento
router.post(
  "/",
  // validacion con express-validator
  body("name").isString().notEmpty().withMessage("Name is required"),
  body("date").isDate().notEmpty().withMessage("Date is required"),
  body("time").isString().notEmpty().withMessage("Time is required"),
  body("location").isString().notEmpty().withMessage("Location is required"),
  body("description").isString().withMessage("Description must be a string"),
  // body("user").isMongoId().withMessage("Invalid user ID"),
  handleInputError,
  createEvent
);
// actualizar un evento
router.put(
  "/:id",
  param("id").isMongoId().withMessage("Invalid event ID"),
  body("name").isString().notEmpty().withMessage("Name is required"),
  body("date").isDate().notEmpty().withMessage("Date is required"),
  body("time").isString().notEmpty().withMessage("Time is required"),
  body("location").isString().notEmpty().withMessage("Location is required"),
  body("description").isString().withMessage("Description must be a string"),
  body("user").isMongoId().withMessage("Invalid user ID"),
  handleInputError,
  updateEvent
);
// eliminar un evento
router.delete(
  "/:id",
  param("id").isMongoId().withMessage("Invalid event ID"),
  deleteEvent
);

export default router;

import { Router } from "express";
import EventController from "./EventController";

const router = Router();

router.post('/events', EventController.create);
router.get('/events',EventController.getAll);
router.get('/events/:id',EventController.getOne);
router.put('/events',EventController.update);
router.delete('/events/:id',EventController.delete);

export default router;

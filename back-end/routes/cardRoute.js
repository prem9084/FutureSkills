import express from "express";
import {
  createCard,
  getSingleCard,
  gettAllCards,
} from "../controller/CardController.js";

const router = express.Router();

router.post("/create", createCard);
router.get("/get-card", gettAllCards);
router.get("/search-cards", getSingleCard);

export default router;

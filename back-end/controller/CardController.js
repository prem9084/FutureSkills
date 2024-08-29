import CardModel from "../CardModel/CardModel.js";

// create card

export const createCard = async (req, res) => {
  try {
    const { id, title, description } = req.body;

    // validations

    if (!id) {
      return res.send({ message: "Id is requires" });
    }
    if (!title) {
      return res.send({ message: "title is requires" });
    }
    if (!description) {
      return res.send({ message: "description is requires" });
    }

    const existingCard = await CardModel.findOne({ id });

    if (existingCard) {
      return res.send({ message: "id already exists" });
    }

    const card = await CardModel({
      id,
      title,
      description,
    });

    await card.save();

    res.status(200).send({ success: true, message: "Add Successful", card });
  } catch (error) {
    console.log(error);
  }
};

// get all card

export const gettAllCards = async (req, res) => {
  try {
    const card = await CardModel.find({});

    res.status(200).send({ success: true, message: "fatched", card });
  } catch (error) {
    console.log(error);
  }
};

// get single card by card title

export const getSingleCard = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).send("Title query parameter is required");
  }

  try {
    const cards = await CardModel.find({ title: new RegExp(title, "i") });
    res.json(cards);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

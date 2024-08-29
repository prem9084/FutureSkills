import React, { useEffect, useState } from "react";
import "./Main.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = "http://localhost:8000";
const Main = () => {
  const [searchCard, setSearchCard] = useState("");
  const [card, setCard] = useState([]);
  const getCards = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/v1/cards/get-card`);
      if (data.success) {
        setCard(data.card);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/v1/cards/search-cards`, {
        params: { title: searchCard },
      });
      setCard(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchCard]);

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <div className="help">
        <div className="search text-center">
          <h1>How can we help?</h1>
          <div className="input-container">
            <ArrowRightAltIcon className="input-icon" />
            <input
              type="text"
              placeholder="Search"
              value={searchCard}
              onChange={(e) => setSearchCard(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>
        </div>
      </div>
      <div className="container card-container">
        {card.length > 0 ? (
          card.map((cards) => (
            <div className="cards p-2 w-25" key={cards._id}>
              <h4>{cards.title}</h4>
              <hr />
              <p>{cards.description}</p>
            </div>
          ))
        ) : (
          <p>No cards found.</p>
        )}
      </div>
    </>
  );
};

export default Main;

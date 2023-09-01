import React from "react";
import { Link, useLocation } from "react-router-dom";
import DrinkDetail from "../components/DrinkDetail";

const DrinkDetailPage = ({}) => {
  const location = useLocation();
  const { drinkData } = location.state;

  console.log(drinkData);
  // Challenge 5
  // It seems that when we select something from our menu, it doesn't work, can we fix that?
  // - A. our image isn't present
  // - B. some of our titles aren't present
  return (
    <>
      <DrinkDetail
        title={drinkData.drinkName}
        date={formatDate(drinkData.dateOfEntry)}
        description={
          drinkData.drinkDescription.json.content[0].content[0].value
        }
        image={drinkData.image.url}
        alt={drinkData.image.title}
      />
      <p>
        <Link to={".."} relative="path">
          Go back
        </Link>
      </p>
    </>
  );
};

export default DrinkDetailPage;

function formatDate(drinkDate) {
  const date = new Date(drinkDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

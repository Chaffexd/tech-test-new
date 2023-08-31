import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Drink from "../components/Drink";

const DrinkDetailPage = ({}) => {
  const params = useParams();
  console.log(params);

  const location = useLocation();
  const { drinkData } = location.state;

  console.log(drinkData);
  return (
    <>
      <Drink
        title={"drinkData"}
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

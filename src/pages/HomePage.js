import React, { useEffect, useState } from "react";
import Drink from "../components/Drink";
import { Link } from "react-router-dom";

// https://www.contentful.com/developers/docs/javascript/tutorials/getting-started-with-react-and-contentful/
// https://www.contentful.com/developers/docs/tutorials/general/graphql/

const SPACE_ID = "i5378jx5vby9";
const ACCESS_KEY = "rW3UKqMAq0JmI6ra3dWQ8Hhrpz3z2vjcD2lZog4SATw";

const query = `{
  drinkEntryCollection {
    items {
			drinkName,
      drinkDescription {
        json
      }
      image {
        title
        url
      }, 
      dateOfEntry
    }
  }
}`;

const HomePage = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.log(errors);
          setError(errors);
        }

        setPost(data.drinkEntryCollection.items);
      });
  }, []);

  console.log(post);

  if (!post) {
    return <p>{error.message}</p>;
  }


  return (
    <div>
      <h1>The Contentful Technical Challenge Menu</h1>
      <ul>
        {post.map((drink) => (
          <li key={drink.drinkName}>
            <Link to={`/${drink.drinkName.replace(/ /g, "-").toLowerCase()}`} state={{ drinkData: drink }}>
              <Drink
                title={drink.drinkName}
                image={drink.image.url}
                alt={drink.image.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

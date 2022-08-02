import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

function SearchResult() {
  const [searchRecipes, setsearchRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const data = await response.json();
    setsearchRecipes(data.results);
  };
  useEffect(() => {
    getSearched(params.search);
    console.log(params.search);

  }, [params.search]);
  return (

    <Grid>
    {searchRecipes.map((item) => {
      return (
        <Card key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
        </Card>
      );
    })}
  </Grid>
    );
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
  margin-top:2rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchResult;

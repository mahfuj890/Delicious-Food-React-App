import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import styled from "styled-components";
function Veggie() {
  const [veggie, setVeggie] = useState([]);
  const getveggie = async () => {
    //Set and Get veggie item in localStorage for not change each reload
    let check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await response.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };
  useEffect(() => {
    getveggie();
  }, []);

  return (
    <Wrapper>
      <h3>Veggie Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "4rem",
        }}
      >
        {veggie.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <SliderCard>
                <p>{item.title}</p>
                <img src={item.image} alt={item.title} />
                <Gradient />
              </SliderCard>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  margin: 4rem 0;
`;
const SliderCard = styled.div`
  position: relative;
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  p {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    width: 80%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
// const sldierWrapper = styled.div`

// `

export default Veggie;

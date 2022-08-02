import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Search() {
  const [input, setInput] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/searched/'+input)

  }
  return (
    <FormStyle onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <FaSearch />

    </FormStyle>

  );
}

const FormStyle = styled.form`
  position: relative;
  margin-top: 2rem;
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  input {
    border: none;
    background: linear-gradient(35deg, #434343, #313131);
    font-size: 1.2rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    max-width: 600px;
    width: 100%;
    margin: auto;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    font-size: 1rem;
    color: white;
  }
`;

export default Search;

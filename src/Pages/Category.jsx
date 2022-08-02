import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from 'react-icons/gi';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
function Category() {
  return (
    <List>
        <SLink to={"cuisine/italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>

        </SLink>
        <SLink to={"cuisine/american"}>
            <FaHamburger />
            <h4>American</h4>

        </SLink>
        <SLink to={"cuisine/thai"}>
            <GiNoodles />
            <h4>Thai</h4>

        </SLink>
        <SLink to={"cuisine/japanese"}>
            <GiChopsticks />
            <h4>Japanese</h4>

        </SLink>
    </List>
  )
}
const List = styled.div`
display:flex;
align-items: center;
justify-content: center;
text-align: center;
gap: 20px;
margin-top:1rem;
`;
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
border-radius: 50%;
text-decoration: none;
background: linear-gradient(35deg, #434343, #313131);
width: 5rem;
height: 5rem;
cursor: pointer;
transform: scale(0.7);
h4{
    color:white;
    font-size:0.8rem;
}
svg{
    color:white;
    font-size:1.5rem;
}
&.active{
    background: linear-gradient(to right, #f27121, #e94057);
}
`
export default Category
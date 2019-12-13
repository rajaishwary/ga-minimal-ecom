import styled from "styled-components";

export const ProductsContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 10px;
padding: 10px;
background-color: #fff;
`;

export const ProductCard = styled.div`
display: flex;
flex-direction: column;
background-color: lightgray;
height: 250px;
width: 150px;
margin-right: 5px;
margin-bottom: 5px;
background-color: #fff;
`;

export const ProductImg = styled.img`
height: 150px;
width: 150px;
`;

export const ProductName = styled.h4`
color: #000;
margin: 5px 5px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

export const SubText = styled.p`
font-size: 16px;
color: darkgray;
padding: 0 5px;
`;

export const Heading = styled.h3`
  color: #000;
  margin: 30px 20px;
`;

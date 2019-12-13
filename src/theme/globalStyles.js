import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	background-color: #e4e4e4;
	font-family: 'Helvetica Neue', arial, sans-serif;
	font-weight: 400;
	color: #444;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  }
  * {
	box-sizing: border-box;
  }
  p {
	  margin: 0;
  }
`;

export const AppContainer = styled.div`
  height: 100%;
  background-color: #e4e4e4;
`;

export const Container = styled.div`
  margin-top: 56px;
  padding: 8px;
`;

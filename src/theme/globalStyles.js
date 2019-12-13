import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	background: #FAFAFA;
	font-family: 'Helvetica Neue', arial, sans-serif;
	font-weight: 400;
	color: #444;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  }
  * {
	box-sizing: border-box;
  }
`;

export const AppContainer = styled.div`
	height: 100%;
`;
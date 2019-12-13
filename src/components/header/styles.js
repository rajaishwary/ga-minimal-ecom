import React from 'react'
import styled from 'styled-components'

export const MainHeader = styled.header`
    position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 56px;
	padding: 0;
	background: #5F86C9;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	z-index: 50;
`;

export const H1 = styled.h1`
    float: left;
	margin: 0;
	padding: 0 15px;
	font-size: 24px;
	line-height: 56px;
	font-weight: 400;
	color: #FFF;
`;

export const Nav = styled.nav`
	float: right;
	font-size: 100%;
`;

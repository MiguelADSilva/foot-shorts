import styled from "styled-components";

import { AiOutlineSearch } from 'react-icons/ai'

export const ContainerNavBar = styled.div `
    margin-bottom: 2rem !important;
    display: flex;
    flex-direction: row;
    align-self: center;
    min-width: 75rem;
    min-height: 7rem;
    position: sticky;
    top: 3rem;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.div `
  font-family: arial;
  color: white;
  font-size: 5rem;
`

export const ContentMenu = styled.div `
    display: flex;
    flex-direction: row;
    min-width: 10vw !important;
    justify-content: space-around;
    font-size: 4rem;
    color: white;
`

export const DivSearch = styled.div `
  min-width: 5vw !important;
  display: flex;
  flex-direction: row; 
`

export const DivInput = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const InputSearch = styled.input `
    visibility: hidden;
    font-size: 2rem;
    height: 3rem !important;
    border-radius: 5rem !important;
    border: transparent;
    padding-left: 1rem !important;

    &::placeholder  {
        padding-left: 1rem !important;
    }
`

export const SearchIcon = styled.i `
    cursor: pointer;

    &:hover {
        color: black;
    }

    &:hover ${InputSearch} {
        visibility: visible;
    }
`
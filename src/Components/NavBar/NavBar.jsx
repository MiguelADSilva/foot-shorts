import React from 'react'

import { 
  ContainerNavBar, 
  Title, 
  ContentMenu, 
  DivSearch, 
  SearchIcon, 
  InputSearch,
  DivInput
} from './Styles'

import { AiOutlineSearch } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'

const NavBar = () => {

  return (
    <ContainerNavBar>
        <Title>FootShorts</Title>
        <ContentMenu>
          <DivSearch>
            <SearchIcon>
              <DivInput>
                <InputSearch type="text" placeholder="Search...."/>
                <AiOutlineSearch />
              </DivInput>
            </SearchIcon>
          </DivSearch>
          <BiMenu />
        </ContentMenu>
    </ContainerNavBar>
  )
}

export default NavBar
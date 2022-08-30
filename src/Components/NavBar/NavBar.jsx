import React from 'react'

import { ContainerNavBar, Title, ContentMenu } from './Styles'

import { AiOutlineSearch } from 'react-icons/ai'

const NavBar = () => {
  return (
    <ContainerNavBar>
        <Title>FootShorts</Title>
        <ContentMenu>
          <AiOutlineSearch />
        </ContentMenu>
    </ContainerNavBar>
  )
}

export default NavBar
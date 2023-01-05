import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 10vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`
export const LinkStyle = styled(Link)`
  text-decoration: none;
`
export const WebsiteLogo = styled.img`
  height: 65px;
  width: 200px;
`

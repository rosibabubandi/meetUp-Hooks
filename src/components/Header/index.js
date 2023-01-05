import {HeaderContainer, LinkStyle, WebsiteLogo} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <LinkStyle to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </LinkStyle>
  </HeaderContainer>
)

export default Header

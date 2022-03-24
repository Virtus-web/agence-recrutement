import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atom'
import DarkLogo from '../../assets/dark-logo.png'
import LightLogo from '../../assets/light-logo.png'
import { useTheme } from '../../utils/hooks'

// const HeaderContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     padding: 15px; 
// `

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
     
`

function Header() {
    const { theme } = useTheme()

    return (
        <NavContainer>
            <Link to="/agence-recrutement">
                <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
            </Link>
            <div>
                <StyledLink $theme={theme} to="/agence-recrutement">Accueil</StyledLink>
                <StyledLink $theme={theme} to="/freelances">Profils</StyledLink>  
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header

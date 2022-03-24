import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atom'
import HomeIllustration from '../../assets/home-illustration.svg'
import { useTheme } from '../../utils/hooks'
import MyComponent from './MyComponent'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img`
  flex: 1;
`

// const Balloon = styled.div`
//     width: 100px;
//     height: 100px;
//     border-radius: 50px;
//     background-color: #e20202;
//     transform: scale(${({size}) => size})
// `

function Home() {
    // const [size, setSize] = useState(1)
    const { theme } = useTheme()
    const [display, setDisplay] = useState(true)

    return (
        <HomeWrapper>
            <HomeContainer theme={theme}>
                <LeftCol>
                    {display && <MyComponent />}
                    <button onClick={() => setDisplay(!display)}>
                        {display ? 'Cacher' : 'Afficher'} mon composant
                    </button>
                    <StyledTitle theme={theme}>
                        Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
                        {/* <h1>Hello le Monde 🏠</h1> */}
                        {/* <h1 onClick={() => setSize( size + 0.1)}>Hello le Monde 🏠</h1>
                            <Balloon size={size} /> */}
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration} />
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Home

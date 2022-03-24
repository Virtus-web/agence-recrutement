import { createGlobalStyle } from 'styled-components'
// import { useContext } from 'react'
// import { ThemeContext } from '../context'
import { useTheme } from '../hooks' //useTheme remplace l'utilisation de ThemeContext (et donc de l'import de useContext)


const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    ${'' /* body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0;  
    } */}

    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
    }
`

/* Ici cette syntaxe
background-color: ${({ isDarkMode }) => 
(isDarkMode ? 'black' : 'white')};
revient au même que
background-color: ${({ props }) =>
props.isDarkMode ? '#2F2E41' : 'white'};
*/

function GlobalStyle() {
    // const { theme } = useContext(ThemeContext)
    const { theme } = useTheme()
    
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
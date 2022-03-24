import DefaultPicture from '../../assets/profile.png'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'
// import Avatar from '../../images/avatar1.jpg'

//Prop par défaut au lieu d'afficher une erreur, méthode 1
// function Card({ label, title = 'Unknown', picture }) {
//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
//             <span>{label}</span>
//             <img src={picture} alt="freelance" height={80} width={80} />
//             <span>{title}</span>
//         </div>
//     )
// }

// Card.propTypes = {
//     label: PropTypes.string,
//     title: PropTypes.string.isRequired,
//     picture: PropTypes.string,
// }
 
// export default Card

//Prop par défaut au lieu d'afficher une erreur, méthode 2

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: normal;
    padding-left: 15px;
`

const CardTitle = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    align-self: center;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`


function Card({ label, title = 'Unknown', picture }) {
    const { theme } = useTheme()
    console.log(picture)

    return (
        <CardWrapper theme={theme}>
            <CardLabel theme={theme}>{label}</CardLabel>
            {/* <CardImage src={picture} alt="freelance" height={80} width={80} /> */}
            <CardImage src={require(`../../images/${picture}`).default} alt="freelance" />
            <CardTitle theme={theme}>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
}
 
export default Card
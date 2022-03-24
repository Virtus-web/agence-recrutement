// //VERSION STATE COMPONENT
// import { Component } from 'react'

// export class Profile extends Component {

//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         profileData: {}
//     //     }
//     // }

//     state = {
//             profileData: {}
//         }

//         // //Fetch version Promise récupéré dans useFecth (mais useFetch pas utilisé car hooks seulement pour les fonctions)
//         // componentDidMount() {
//         //     const { id } = this.props.match.params
        
//         //     fetch(`http://localhost:8000/freelance?id=${id}`)
//         //     .then((response) => response.json())
//         //     .then((jsonResponse) => {
//         //         this.setState({ profileData: jsonResponse?.freelanceData })
//         //     })
//         // }

//         //Et avec la version async/await idem
//         componentDidMount() {
//             const { id } = this.props.match.params
//             const fetchData = async () => {
//                 const response = await fetch(`http://localhost:8000/freelance?id=${id}`)
//                 const jsonResponse = await response.json()
//                 if (jsonResponse && jsonResponse.freelanceData) {
//                     this.setState({ profileData: jsonResponse?.freelanceData })
//                 }
//             }
//             fetchData()
//         }


//     render() {
//         const { profileData } = this.state
        // const {
        //     picture,
        //     name,
        //     location,
        //     tjm,
        //     job,
        //     skills,
        //     available,
        //     id,
        // } = profileData
 
//         return (
//             <div>
//                 <img src={picture} alt={name} height={150} width={150} />
//                 <h1>{name}</h1>
//                 <span>{location}</span>
//                 <h2>{job}</h2>
//                 <div>
//                     {skills &&
//                         skills.map((skill) => (
//                             <div key={`skill-${skill}-${id}`}>{skill}</div>
//                     ))}
//                 </div>
//                 <div>{available ? 'Disponible maintenant' : 'Indisponible'}</div>
//                 <span>{tjm} € / jour</span>
//             </div>
//         )
//     }
// }

// export default Profile

//VERSION STATELESS COMPONENT

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import colors from '../../utils/style/colors'
import { ThemeContext } from '../../utils/context'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 90px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`

const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  font-weight: 500;
`

const JobTitle = styled.h2`
  padding-top: 10px;
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`

const Location = styled.span`
  margin-left: 15px;
  color: ${colors.secondary};
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Price = styled.span`
  padding-top: 10px;
  font-weight: 500;
  font-size: 20px;
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`

const Skill = styled.span`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Availability = styled.span`
  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ available }) => (available ? 'green' : 'red')};
    content: '';
  }
  padding-left: 20px;
  position: relative;
`

function Profile(props) {
    console.log(props)
  const { id: queryId } = useParams()
  const [profileData, setProfileData] = useState({})

  console.log(queryId)
  console.log(props.match.params.id)
  useEffect(() => {
    fetch(`http://localhost:8000/freelance?id=${queryId}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setProfileData(jsonResponse?.freelanceData)
      })
  }, [queryId])

  const {
    picture,
    name,
    location,
    tjm,
    job,
    skills,
    available,
    id,
  } = profileData

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ProfileWrapper theme={theme}>
          <Picture src={picture} alt={name} height={150} width={150} />
          <ProfileDetails theme={theme}>
            <TitleWrapper>
              <Title>{name}</Title>
              <Location>{location}</Location>
            </TitleWrapper>
            <JobTitle>{job}</JobTitle>
            <SkillsWrapper>
              {skills &&
                skills.map((skill) => (
                  <Skill key={`skill-${skill}-${id}`} theme={theme}>
                    {skill}
                  </Skill>
                ))}
            </SkillsWrapper>
            <Availability available={available}>
              {available ? 'Disponible maintenant' : 'Indisponible'}
            </Availability>
            <Price>{tjm} € / jour</Price>
          </ProfileDetails>
        </ProfileWrapper>
      )}
    </ThemeContext.Consumer>
  )
}

export default Profile


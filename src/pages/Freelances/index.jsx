// import DefaultPicture from '../../assets/profil.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { Loader } from '../../utils/style/Atom'
// import { useState, useEffect } from 'react'
// import { useFetch, useTheme } from '../../utils/hooks'
import { useTheme } from '../../utils/hooks'
import { Link } from 'react-router-dom'
//ICI
import { freelancersList } from '../../datas/freelances'
 
// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'Devops',
//         // picture: DefaultPicture, inutile maintenant que c'est la prop par défaut directement dans Card
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Developpeur frontend',
//         // picture: DefaultPicture,
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Développeuse Fullstack',
//         // picture: DefaultPicture,
//     },
// ]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

// const LoaderWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `

function Freelances() {
    const { theme } = useTheme()
    // iciconst { data, isLoading, error } = useFetch(
    //     `http://localhost:8000/freelances`
    // )

    // const [isDataLoading, setDataLoading] = useState(false)
    // const [error, setError] = useState(false)

    // iciconst freelancersList = data?.freelancersList // Ici le "?" permet de s'assurer que data existe bien.
    // const [freelancersList, setFreelancesList] = useState([])
    console.log(freelancersList)

    // useEffect(() => {
    //     async function fetchFreelances() {
    //     setDataLoading(true)
    //     try {
    //         const response = await fetch(`http://localhost:8000/freelances`)
    //         const { freelancersList } = await response.json()
    //         setFreelancesList(freelancersList)
    //     } catch (err) {
    //         console.log('===== error =====', err)
    //         setError(true)
    //     } finally {
    //         setDataLoading(false)
    //     }
    //     }
    //     fetchFreelances()
    // }, [])

    // iciif (error) {
    //     return <span>Oups il y a eu un problème</span>
    // }

    return (
        <div>
            <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubtitle theme={theme}>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {/* {isLoading ? (
                <LoaderWrapper>
                    <Loader theme={theme} data-testid="loader" />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                {freelancersList.map((profile, index) => (
                    <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
                        <Card
                        key={`${profile.name}-${index}`}
                        label={profile.job}
                        title={profile.name}
                        picture={profile.picture}
                        />
                    </Link>
                ))}
                </CardsContainer>
            )} */}
            <CardsContainer>
                {freelancersList.map((profile, index) => (
                    <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
                        <Card
                        key={`${profile.name}-${index}`}
                        label={profile.job}
                        title={profile.name}
                        picture={profile.picture}
                        />
                    </Link>
                ))}
            </CardsContainer>
        </div>
  )
}

export default Freelances
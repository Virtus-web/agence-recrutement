import { useParams } from 'react-router-dom'
// import { useState, useEffect, useContext } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { Loader } from '../../utils/style/Atom'
import {Link} from 'react-router-dom'
import { SurveyContext } from '../../utils/context'
// import { useFetch, useTheme } from '../../utils/hooks'
import { useTheme } from '../../utils/hooks'
//ICI
import { surveyData } from '../../datas/survey'

//CSS//

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const QuestionContent = styled.span`
  margin: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

//COMPOSANT FONCTION//

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    // const [surveyData, setSurveyData] = useState({}) //Viré pour le use perso et data ajouté dans les paramètres de use perso
    // const [isDataLoading, setDataLoading] = useState(false) //Viré pour le use perso et isLoading ajouté dans les paramètres de use perso
    const { saveAnswers, answers } = useContext(SurveyContext)
    // const [error, setError] = useState(false) //Viré pour le use perso et error ajouté dans les paramètres de use perso
    const { theme } = useTheme()

    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer })
    }

    //Promises anciennes manière de gérer le fetch
    // useEffect(() => {
    //     setDataLoading(false)
    //     fetch(`http://localhost:8000/survey`)
    //             .then((response) => response.json()
    //             .then(({ surveyData }) => {
    //                 setSurveyData(surveyData)//On nomme généralement le paramètre de useState comme celui de fetch car il sort les données du scope donc ils se passe le relais en gros
    //                 setDataLoading(false)
    //             })
    //             .catch((error) => console.log(error))
    //         )
    //     }, [])

    //Async/Await manière plus moderne de gérer le fetch depuis ES7
    // useEffect(() => {
    //     async function fetchSurvey() {
    //     setDataLoading(true)
    //     try {
    //         const response = await fetch(`http://localhost:8000/survey`)
    //         const { surveyData } = await response.json()
    //         setSurveyData(surveyData)
    //     } catch (err) {
    //         console.log('===== error =====', err)
    //         setError(true)
    //     } finally {
    //         setDataLoading(false)
    //     }
    //     }
    //     fetchSurvey()
    // }, [])

    // if (error) {
    //     return <span>Oups il y a eu un problème</span>
    // }

    //Fetch perso via useFetch depuis le fichier importé index.jsx de hooks
    // iciconst { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)//On écrit les paramètres destructurés qui représentent ceux déclarés dans le return de usePerso
    // const { surveyData } = data //Comme data part en tant qu'objet vide, surveyData sera indéfini ce qui provoquera une erreur, résolue avec une condition surveyData ? l138
    //L138 il y avait <QuestionContent>{surveyData && surveyData[questionNumber]}</QuestionContent> mais on peut le remplacer avec cette syntaxe ici :
    // iciconst surveyData = data?.surveyData
    //au lieu de mettre la condition ans le retour, plus propre

    //Idem pour answer, avant dans le return :
    // {answers && (
    //             <ReplyWrapper>
    //                 <ReplyBox
    //                     onClick={() => saveReply(true)}
    //                     isSelected={answers[questionNumber] === true}
    //                 >
    //                     Oui
    //                 </ReplyBox>
    //                 <ReplyBox
    //                     onClick={() => saveReply(false)}
    //                     isSelected={answers[questionNumber] === false}
    //                 >
    //                     Non
    //                 </ReplyBox>
    //             </ReplyWrapper>
    //         )}
    //Maintenant c'est géré par ...?

    // iciif (error) {
    //     return <span>Il y a un problème</span>
    // }

    //Premier return initial simple
    // return (
    //     <div>
    //         <h1>Questionnaire 🧮</h1>
    //         <h2>Question {questionNumber}</h2>
    //         <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
    //         {questionNumberInt === 10 ? (
    //             <Link to="/results">Résultats</Link>
    //         ) : (
    //             <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
    //         )}
    //     </div>
    // )

    console.log(surveyData[0][questionNumber])

    //Ok pour nommer le paramètre de useState comme celui de fetch alias surveyData ?
    //Remplacement de isDataLoading par dataLoading pour le use perso et de surveyData par data à l'intérieur du composant ci-dessous
    //Est-ce qu'on écrit {surveyData && surveyData[questionNumber]} ou bien juste {surveyData[questionNumber]} vu qu'on fait la condition plus haut ?
     return (
        <SurveyContainer>
            <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
            <QuestionContent theme={theme} data-testid="question-content">{surveyData && surveyData[0][questionNumber]}</QuestionContent>
            {/* {isLoading ? (
                <Loader data-testid="loader" />
            ) : (
                <QuestionContent theme={theme} data-testid="question-content">{surveyData && surveyData[questionNumber]}</QuestionContent>
            )} */}
            <ReplyWrapper>
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                    theme={theme}
                >
                    Oui
                </ReplyBox>
                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                    theme={theme}
                >
                    Non
                </ReplyBox>
            </ReplyWrapper>
            <LinkWrapper theme={theme}>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData && surveyData[0][questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )    
}

export default Survey

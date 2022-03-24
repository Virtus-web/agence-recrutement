import { rest } from 'msw'
import { setupServer } from 'msw/node'
// import { render, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
//Il faut retirer le render si on importe le wrapper depuis un dossier extérieur utils
// import { waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test'
import Freelances from '.'
// import { ThemeProvider } from '../../utils/context' //On supprime ThemeProvider puisqu'on a rédigé un code générique pour le wrapper dans le dossier utils

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]
 
const server = setupServer(
    // On précise ici l'url qu'il faudra "intercepter"
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)
 
// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

// test('Should render without crash', async () => {
//     render(
//         <ThemeProvider>
//             <Freelances />
//         </ThemeProvider>
//     )
//     expect(screen.getByTestId('loader')).toBeTruthy()
//     await waitFor(() => {
//         expect(screen.getByText('Harry Potter')).toBeTruthy()
//         expect(screen.getByText('Hermione Granger')).toBeTruthy()
//     })
// })

// //Même test syntaxe légèrement différente avec le expect().toBeTruthy en moins
// test('Should render without crash version 2', async () => {
//     render(
//         <ThemeProvider>
//             <Freelances />
//         </ThemeProvider>
//     )
//     screen.getByTestId('loader')
//     await waitFor(() => {
//         expect(screen.getByText('Harry Potter')).toBeTruthy()
//         expect(screen.getByText('Hermione Granger')).toBeTruthy()
//     })
// })

// //Création d'un nouveau composant pour gérer les Contexte Provider utilisés dans le JSX
// function Wrapper({ children }) {
//     return <ThemeProvider>{children}</ThemeProvider>
// }

// test('Should display freelancers names', async () => {
//     render(
//         <Freelances />,
//         { wrapper: Wrapper }
//     )
//     await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
//     await waitFor(() => {
//         expect(screen.getByText('Harry Potter')).toBeTruthy()
//         expect(screen.getByText('Hermione Granger')).toBeTruthy()
//     })
// })

it('Should display freelancers names after loader is removed', async () => {
  render(<Freelances />)

  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  expect(screen.getByText('Harry Potter')).toBeInTheDocument()
  expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
  expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})
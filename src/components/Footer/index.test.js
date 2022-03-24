import Footer from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

//Ici le composant Footer fait partie d'un ensemble qui utilise le Contexte avec un Provider de theme, donc cela provoque une erreur
// describe('Footer', () => {
//     test('Should render without crash', async () => {
//         render(<Footer />)
//     })
// })

//Il faut aussi importer et intégrer le Contexte lorsqu'il est utilisé dans le code sur le composant concerné
describe('Footer', () => {
    test('Should render without crashing', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
        fireEvent.click(nightModeButton)
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
    })
})
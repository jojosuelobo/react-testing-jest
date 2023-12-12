import { render, screen, fireEvent, getByText } from "@testing-library/react"
import App from "./App"

const sum = (x: number, y: number) => {
    return x + y
}

describe('App component', () => {
    it('should sum correctly', () => {
        expect(sum(4, 4)).toBe(8)
    })

    it('should render App with Hello message', () => {
        render(<App />)
        screen.getByText("Hello world!")
    });

    it('should change message on button click', () => {
        render(<App />)

        screen.getByText("Let's learn more about testing in React")
        const button = screen.getByText('Change message')
        fireEvent.click(button)
        // regEx desconsiderar caps lock
        screen.getAllByText(/new message!/i)

        const oldMessage = screen.queryByText(
            "Let's learn more about testing in React"
        )
        expect(oldMessage).toBeNull()
        expect(oldMessage).not.toBeInTheDocument()
    });
})

export default {}
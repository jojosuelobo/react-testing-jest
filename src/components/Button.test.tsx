import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe('Button component', () => {
    it('should render with red background if disabled', () => {
        render(
            <Button disable onClick={() => { }}>
                Click me
            </Button>
        )

        const button = screen.getByRole('button', { name: 'Click me' })

        expect(button).toHaveStyle({ backgroundColor: "red" })
    });

    it('should call onClick prop on click', () => {
        const onClick = jest.fn()
        render(
            <Button disable onClick={onClick}>
                Click me
            </Button>)

        const button = screen.getByText('Click me')
        fireEvent.click(button)

        expect(onClick).toHaveBeenCalled()

    });
});
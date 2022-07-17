import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe("Pruebas al componente GifItem", () => {
    const title = "Titulo de prueba";
    const url = "https://urldeprueba.com/";

    test("Debe hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test("Debe mostrar la imagen con el URL y el Alt indicado", () => {
        render(<GifItem title={title} url={url} />);
        //screen.debug(); permite mostar el screen
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

})
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
//Se importa el hook para hacer un mock de el
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs'); //Se hace un mock del hook

describe('Pruebas al componente GifGrid', () => {
    const category = "One Punch";
    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        }); //Se simula el objeto de retorno de la funcion

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });
    test('Debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {
        //Arreglo de gifs ficticio que nuestro mock del hook va a retornar
        const gifs = [
            {
                id: 'AAA',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'AAB',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2); //Se obtienene las dos imagenes
    });
});
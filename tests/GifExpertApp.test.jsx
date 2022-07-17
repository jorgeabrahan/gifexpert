import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas al componente GifExpertApp', () => {
    test('Debe agregar la categoria a un arreglo', () => {
        render(<GifExpertApp />);
        /* Se obtiene el input y el form */
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //Cambiamos el valor del input
        fireEvent.input(input, {
            target: {
                value: "Rocket League"
            }
        });
        /* Disparar el evento de submit al formulario */
        fireEvent.submit(form);
        //Como la categoria no existe, se espera que se agregue
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
    });
    test('NO debe agregar una categoria que ya existe al arreglo', () => {
        render(<GifExpertApp />);
        /* Se obtiene el input y el form */
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //Cambiamos el valor del input
        fireEvent.input(input, {
            target: {
                value: "One Punch"
            }
        });
        /* Disparar el evento de submit al formulario */
        fireEvent.submit(form);
        //Como la categoria ya existe, se espera que NO se agregue
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
    });
});
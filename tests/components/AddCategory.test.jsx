import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas al componente AddCategory', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onAddCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {
            target: {
                value: "One Punch"
            }
        });
        expect(input.value).toBe("One Punch");
    });
    test('Debe llamar onAddCategory si el input tiene algun valor', () => {
        const inputVal = "Saitama";
        const onAddCategory = jest.fn(); //Una jest.fn() es un mock, una imitacion de la original
        render(<AddCategory onAddCategory={onAddCategory} />);
        /* Se obtiene el input y el form */
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //Cambiamos el valor del input
        fireEvent.input(input, {
            target: {
                value: inputVal
            }
        });
        /* Disparar el evento de submit al formulario */
        fireEvent.submit(form);
        /* Se espera que se limpie el input al llamar el submit */
        expect(input.value).toBe('');

        expect(onAddCategory).toHaveBeenCalled(); //Espera que haya sido llamada la funcion
        expect(onAddCategory).toHaveBeenCalledTimes(1); //Especificamente una vez
        expect(onAddCategory).toHaveBeenCalledWith(inputVal); //Se espera que la funcion haya sido llamada con el valor del input
    });

    test('No debe llamar onAddCategory si el input no tiene ningun valor', () => {
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory} />);

        /* Se obtiene el input y el form */
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //Cambiamos el valor del input
        fireEvent.input(input, {
            target: {
                value: ''
            }
        });
        /* Disparar el evento de submit al formulario */
        fireEvent.submit(form);
        // expect(onAddCategory).toHaveBeenCalledTimes(0); //Se espera que la funcion no haya sido llamada ni una vez
        expect(onAddCategory).not.toHaveBeenCalled();
    })
})
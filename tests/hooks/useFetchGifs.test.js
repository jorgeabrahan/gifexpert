import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en useFetchGifs', () => {
    test('Debe retornar el estado inicial', () => {
        //Se ejecuta el custom hook y se obtiene el resultado
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        //del resultado obtenemos las siguientes propiedades
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0); //Se espera que no tenga imagenes cuando recien se monte el hook
        expect(isLoading).toBeTruthy() //Se espera que se este cargando o consiguiendo las imagenes
    }); 
    
    test('Debe retornar un arreglo de imagenes y el isLoading debe ser false', async () => {
        //Se ejecuta el custom hook y se obtiene el resultado
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(() => {//Se espera 
            expect(result.current.images.length).toBeGreaterThan(0); //Hasta que el arreglo de imagenes tenga mas de 0
        }, {timeout: 5000}); //El segundo parametro son las opciones que permite especificar despues de cuanto tiempo debe dejar de esperar

        //Se desestructura una vez se obtuvieron las imagenes
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    }); 
});
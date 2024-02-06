import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import firebase, { FirebaseContext } from "../../../firebase";
import Estadistica from "./Estadistica";

describe('Ayuda cñor', () => {
    test('ayudita', () => {
        render(
            <FirebaseContext.Provider
                value={{
                    firebase
                }}
            >
                <BrowserRouter>
                    <Estadistica />
                </BrowserRouter>
            </FirebaseContext.Provider>
        )
    })
})
// test('Debe mostrar vista de orden', () => {
//     render(
//         <BrowserRouter>
//             <FirebaseContext.Provider
//                 value={{
//                     firebase
//                 }}
//             >
//                 <Orden />
//             </FirebaseContext.Provider>
//         </BrowserRouter>
//     )

//     const text = screen.getByText('Marcar Como Completado')

//     expect(text).toBeInTheDocument();
// })

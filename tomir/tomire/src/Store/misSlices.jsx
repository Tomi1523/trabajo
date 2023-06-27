import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
    name: "unValor",
    initialState:{miNombre: "Tomi", edad:18,
    bibliotecas:[{nombre:"react", inicio:2013},{nombre:"redux", inicio:2015}]
},
    reducers: {
        guardarMiNombre:(state, action) =>{
            state.miNombre = action.payload;
            state.edad = action.payload;
        },
        modificarUnValor: (state, action ) =>{
            const {indice, nuevoNombre,nuevoInicio} = action.payload;
            state.bibliotecas[indice].nombre = nuevoNombre
            state.bibliotecas[indice].inicio = nuevoInicio
        },

        agregarUnValor: (state, action ) =>{
            const { nuevoNombre,nuevoInicio} = action.payload;
            state.bibliotecas=[...state.bibliotecas,
                {nombre:nuevoNombre, inicio:nuevoInicio}]
        },
        eliminarUnValor: (state, action) =>{
            state.bibliotecas=state.bibliotecas.filter(valor => valor.nombre != action.payload)
        }
        
    }

})

export const otroSlice = createSlice({
    name: "otroValor",
    initialState:{puntuacion:0},
    reducers: {
        incrementarPuntuacion:(state) =>{
            state.puntuacion = state.puntuacion + 1;
        },
         
    }

})

export const {guardarMiNombre} = origenSlice.actions;
export const {modificarUnValor} = origenSlice.actions;
export const {eliminarUnValor} = origenSlice.actions;
export const {agregarUnValor} = origenSlice.actions;
export const {incrementarPuntuacion} = otroSlice.actions;
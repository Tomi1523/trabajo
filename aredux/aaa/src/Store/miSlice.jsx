import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
    name:"misTrabajadores",
    initialState:{
        trabajadores:[]
    },
    reducers:{
        agregarUnValor: (state, action)=>{
            state.trabajadores=[...state.trabajadores,action.payload]
        },
        modificarUnValor:(state, action) =>{
            const {indice, nuevoPais} =action.payload;
            state.trabajadores[indice].departamentos=nuevoPais
        },
        eliminarUnValor:(state, action) =>{
                const{nombre,apellido,telefono} =action.payload
                state.trabajadores=state.trabajadores.filter(valor=>
                    valor.name.first!==nombre && valor.name.last!==apellido &&
                    valor.cell!==telefono
                    )
        }
    }
})

export const departamentosSlice = createSlice({
    name:"misDepartamentos",
    initialState:{
        departamentos:["Argentina(programador)", "Chile(ventas)", "Ecuador(negocios)"]
    },
    reducers:{
        
    }
})

export const {agregarUnValor} = miSlice.actions;
export const {modificarUnValor} = miSlice.actions;
export const {eliminarUnValor} = miSlice.actions;

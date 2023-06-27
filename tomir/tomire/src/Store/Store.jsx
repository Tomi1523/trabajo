import { configureStore } from "@reduxjs/toolkit"
import { origenSlice, otroSlice } from "./misSlices"

export default configureStore({
    reducer:{
        unValor: origenSlice.reducer,
        otroValor:otroSlice.reducer
    }
})



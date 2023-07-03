import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//相当于定义了两个新类型

export default store
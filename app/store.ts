import { configureStore } from "@reduxjs/toolkit";
import currentPageSlice from "./features/currentPageSlice";

export const store = configureStore({
    reducer: {
        currentPage: currentPageSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from "@reduxjs/toolkit";

interface InitialInterface {
    isLinksPage: boolean;
}

const initialState: InitialInterface = {
    isLinksPage: true,
};

const currentPageSlice = createSlice({
    name: "currentPage",
    initialState,
    reducers: {
        changePageToLink: (state) => {
            state.isLinksPage = true;
        },
        changePageToProfile: (state) => {
            state.isLinksPage = false;
        },
    },
});

export const { changePageToLink, changePageToProfile } =
    currentPageSlice.actions;
export default currentPageSlice.reducer;

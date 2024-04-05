import { configureStore } from '@reduxjs/toolkit';
import practiceSlice from './features/createInvioce/PracticeSlice';
const store = configureStore({
    reducer: {
        practiceSlice,
    },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export default store;

store.subscribe(() => {
    console.log(store.getState());
});

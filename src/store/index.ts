import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BMIState {
  kg: number;
  cm: number;
  ft: number;
  ins: number;
  st: number;
  lbs: number;
  isMetric: boolean;
}

const initialState: BMIState = {
  kg: 0,
  cm: 0,
  ft: 0,
  ins: 0,
  st: 0,
  lbs: 0,
  isMetric: true,
};

const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    setKg(state, action: PayloadAction<number>) {
      state.kg = action.payload;
    },

    setCm(state, action: PayloadAction<number>) {
      state.cm = action.payload;
    },
    setFt(state, action: PayloadAction<number>) {
      state.ft = action.payload;
    },
    setIns(state, action: PayloadAction<number>) {
      state.ins = action.payload;
    },
    setSt(state, action: PayloadAction<number>) {
      state.st = action.payload;
    },
    setLbs(state, action: PayloadAction<number>) {
      state.lbs = action.payload;
    },
    setIsMetric(state, action: PayloadAction<boolean>) {
      state.isMetric = action.payload;
      if (state.isMetric) {
        state.ft = 0;
        state.ins = 0;
        state.st = 0;
        state.lbs = 0;
      } else {
        state.kg = 0;
        state.cm = 0;
      }
    },
  },
});

export const { setKg, setCm, setFt, setIns, setSt, setLbs, setIsMetric } =
  bmiSlice.actions;

const store = configureStore({
  reducer: bmiSlice.reducer,
});

export default store;

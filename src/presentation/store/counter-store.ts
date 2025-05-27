import {create} from 'zustand';

interface CounterState {
  count: number;
  incrementBy: (amount: number) => void;
  decrementBy: (amount: number) => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>()(set => ({
  count: 0,

  incrementBy: (amount: number) =>
    set(state => ({count: state.count + amount})),

  decrementBy: (amount: number) =>
    set(state => ({count: state.count - amount})),
  
  reset: () => set({count: 0}),
}));

import { create } from 'zustand';

const createSharedStore = (set) => ({
  test: null,
  setTest: (t) => set({ test: t }),
  test2: false,
  setTest2: () => set((state) => ({ test2: !state.test2 })),
});

const useSharedStore = create((...set) => ({
  ...createSharedStore(...set),
}));

export default useSharedStore;

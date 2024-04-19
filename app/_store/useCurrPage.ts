import { create } from "zustand";

interface CurrPageStore {
  id: number;
  setId: (e: number) => void;
}

const useCurrPage = create<CurrPageStore>((set) => ({
  id: 1,
  setId: (e: number) => set({ id: e }),
}));

export default useCurrPage;
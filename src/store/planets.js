import { defineStore } from "pinia";
import planetsData from "../data/data.json";

export const usePlanetsStore = defineStore("planets", {
  state: () => {
    return {
      planets: planetsData,
    };
  },
});

import { reactive } from "vue";
import planets from "../data/data.json";

const useFilterPlanet = () => {
  const state = reactive({
    planets: planets,
    selectPlanet: {},
  });

  const filterPlanette = (planetName) => {
    const filteredPlanetArr = planets.filter((currentPlanet) => {
      // to lowercase because it is capitalised in the data
      return currentPlanet.name.toLowerCase() === planetName;
    });
    state.selectPlanet = { ...filteredPlanetArr[0] };
  };
  return { state, filterPlanette };
};

export default useFilterPlanet;

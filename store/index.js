export const state = () => ({
   blades: []
});

export const mutations = {
   openBlade(state, blade) {
      const id = Math.random();
      state.blades.push({
         id,
         ...blade
      });
   },
   closeBlade(state) {
      state.blades.pop();
   },
   resetBlades(state) {
      state.blades = [];
   }
};

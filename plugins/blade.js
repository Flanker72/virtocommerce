export default ({ app }, inject) => {
   inject("blades", []);

   inject("bladeOpener", {
      open(blade) {
         console.log("Open new blade");
      },
      close(id) {
         console.log(`Close blade with id=${id}`);
      }
   });
};

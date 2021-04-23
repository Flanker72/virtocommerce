/**
 * Drawer story (for demo).
 * @author Yuri A Taranov <me@flanker72.ru>
 */
import VCDrawer from "~/components/Drawer";

export default {
   title: "Drawer",
   component: VCDrawer,
   argTypes: {
      collapse: { action: "collapse", name: "collapse" },
      expand: { action: "expand", name: "expand" }
   }
};

const Template = (args, { argTypes }) => ({
   components: { VCDrawer },
   props: Object.keys(argTypes),
   template: '<vc-drawer v-bind="$props" v-on="$props"></vc-drawer>'
});

export const Drawer = Template.bind({});
Drawer.args = {
   version: "0.0.1",
   logo: "assets/images/logo.svg",
   items: [
      {
         id: 1,
         title: "Another Item",
         icon: "star"
      }
   ]
};

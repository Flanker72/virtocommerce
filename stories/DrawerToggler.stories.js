/**
 * DrawerToggler story (for demo).
 * @author Yuri A Taranov <me@flanker72.ru>
 */
import VCDrawerToggler from "~/components/DrawerToggler";

export default {
   title: "Drawer Toggler",
   component: VCDrawerToggler,
   argTypes: {
      click: { action: "click", name: "click" }
   }
};

const Template = (args, { argTypes }) => ({
   components: { VCDrawerToggler },
   props: Object.keys(argTypes),
   template: '<vc-drawer-toggler v-bind="$props" v-on="$props"></vc-drawer-toggler>'
});

export const DrawerToggler = Template.bind({});
DrawerToggler.args = {};

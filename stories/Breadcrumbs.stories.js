/**
 * Breadcrumbs story (for demo).
 * @author Yuri A Taranov <me@flanker72.ru>
 */
import VCBreadcrumbs from "~/components/Breadcrumbs";

export default {
   title: "Breadcrumbs",
   component: VCBreadcrumbs
};

const Template = (args, { argTypes }) => ({
   components: { VCBreadcrumbs },
   props: Object.keys(argTypes),
   template: '<vc-breadcrumbs v-bind="$props" v-on="$props"></vc-breadcrumbs>'
});

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
   items: [
      {
         id: 0,
         title: "Back",
         icon: "arrow-left"
      },
      {
         id: 1,
         title: "Electronics"
      },
      {
         id: 2,
         title: "Desktop"
      }
   ]
};

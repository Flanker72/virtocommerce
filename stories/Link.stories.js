/**
 * Link story (for demo).
 * @author Yuri A Taranov <me@flanker72.ru>
 */
import VCLink from "~/components/Link";

export default {
   title: "Link",
   component: VCLink,
   argTypes: {
      click: { action: "click", name: "click" }
   }
};

const Template = (args, { argTypes }) => ({
   components: { VCLink },
   props: Object.keys(argTypes),
   template: '<vc-link v-bind="$props" v-on="$props">This is link</vc-link>'
});

export const Link = Template.bind({});
Link.args = {
   to: "/",
   disabled: false
};

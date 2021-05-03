/**
 * Checkbox story (for demo).
 * @author Yuri A Taranov <me@flanker72.ru>
 */
import VCCheckbox from "~/components/Checkbox";

export default {
   title: "Checkbox",
   component: VCCheckbox
};

const Template = (args, { argTypes }) => ({
   components: { VCCheckbox },
   props: Object.keys(argTypes),
   template: '<vc-checkbox v-bind="$props" v-on="$props"></vc-checkbox>'
});

export const Checkbox = Template.bind({});
Checkbox.args = {};

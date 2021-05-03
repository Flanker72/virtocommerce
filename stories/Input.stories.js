/**
 * Input story (for demo).
 * @author Yuri A Taranov <me@flanker72.ru>
 */
import VCInput from "~/components/Input";

export default {
   title: "Input",
   component: VCInput
};

const Template = (args, { argTypes }) => ({
   components: { VCInput },
   props: Object.keys(argTypes),
   template: '<vc-input v-bind="$props" v-on="$props"></vc-input>'
});

export const Input = Template.bind({});
Input.args = {
   placeholder: "Placeholder",
   clearable: true
};

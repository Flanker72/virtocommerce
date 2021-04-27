/**
 * Button story (for demo).
 * @author Yuri A Taranov <me@flanker72.ru>
 */
import VCButton from "~/components/Button";

export default {
   title: "Button",
   component: VCButton,
   argTypes: {
      variant: {
         options: ["primary", "secondary", "special"],
         control: { type: "radio" }
      }
   }
};

const Template = (args, { argTypes }) => ({
   components: { VCButton },
   props: Object.keys(argTypes),
   template: '<vc-Button v-bind="$props" v-on="$props"></vc-Button>'
});

export const Button = Template.bind({});
Button.args = {
   icon: "star",
   title: "I am a button",
   variant: "special",
   disabled: false,
   small: false
};

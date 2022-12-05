import { PageEnter, TPageEnterProps } from "./enter";
import { signInEnterForm } from "../../components/enter-form/models";
import { render } from "../../utils/render";

const props: TPageEnterProps = {
  title: `Sign In`,
  enterForm: signInEnterForm,
  attrs: {
    class: `enter-page`,
  },
};
const pageEnter = new PageEnter(props);

render(`.app`, pageEnter);

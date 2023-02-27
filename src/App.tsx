import { TextInputField } from "./components/TextInput";
import { newVertex } from "./components/utils";
import { Vertex } from "./components/Form";
import { BooleanInputField } from "./components/BooleanInput";

const App = () => {
  const meta = newVertex(0, ["Meta"], { id: "meta1", props: {enableThreeStateBehavior: false} });
  const vertex = newVertex(0, ["Vertex"], { id: "vertex1" });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(data);
  };

  return (
    <div>
      <TextInputField meta={meta} vertex={vertex} setValue={setValue} />

      Boolean:
      <BooleanInputField meta={meta} vertex={vertex} setValue={setValue} />
    </div>
  );
};

export default App;

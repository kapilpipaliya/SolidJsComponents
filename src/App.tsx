import { TextInputField } from "./components/TextInput";
import { newVertex } from "./components/utils";
import { Vertex } from "./components/Form";

const App = () => {
  const meta = newVertex(0, ["Meta"], { id: "meta1" });
  const vertex = newVertex(0, ["Vertex"], { id: "vertex1" });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(data);
  };

  return (
    <div>
      <TextInputField meta={meta} vertex={vertex} setValue={setValue} />
    </div>
  );
};

export default App;

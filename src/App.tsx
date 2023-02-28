import { TextInputField } from "./components/TextInputField";
import { newVertex } from "./components/utils";
import { Vertex } from "./components/Form";
import { BooleanInputField } from "./components/BooleanInputField";
import { NumberInputField } from "./components/NumberInputField";
import { TextAreaField } from "./components/TextAreaField";
import { DateInputField } from "./components/DateInputField";
import { SelectInputField } from "./components/SelectInputField";

const App = () => {
  const items = ['item1', 'item2', 'item3']
  const meta = newVertex(0, ["Meta"], { id: "meta1", props: {enableThreeStateBehavior: false}});
  const vertex = newVertex(0, ["Vertex"], { id: "vertex1" });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };

  return (
    <div>
      <TextInputField meta={meta} vertex={vertex} setValue={setValue} />

      Boolean:
      <BooleanInputField meta={meta} vertex={vertex} setValue={setValue} />

      Numerical
      <NumberInputField meta={meta} vertex={vertex} setValue={setValue} />

      TextArea
      <TextAreaField meta={meta} vertex={vertex} setValue={setValue} />

      DateInput
      <DateInputField meta={meta} vertex={vertex} setValue={setValue} />

      Select Input
      <SelectInputField meta={meta} vertex={vertex} setValue={setValue} items={items} />
    </div>
  );
};

export default App;

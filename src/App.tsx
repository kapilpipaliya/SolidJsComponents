import { TextInputField } from "./components/TextInputField";
import { newVertex } from "./components/utils";
import { Vertex } from "./components/Form";
import { BooleanInputField } from "./components/BooleanInputField";
import { NumberInputField } from "./components/NumberInputField";
import { TextAreaField } from "./components/TextAreaField";
import { DateInputField } from "./components/DateInputField";
import { SelectInputField } from "./components/SelectInputField";
import { SwitchField } from "./components/SwitchField";
import { AutocompleteField } from "./components/Autocomplete";
import { ColorBoxField } from "./components/ColorBox";
import { CalendarField } from "./components/Calendar";
import { TagBoxField } from "./components/TagBoxField";

import { names } from "./data/AutocompleteData";
import { treeProducts } from "./data/treeProducts";
import { customers } from "./data/customers";
import { employees } from "./data/employees";
import { DropDownBoxTreeField } from "./components/DropdownTree";
import { DropDownBoxField } from "./components/DropdownTry";
import { TreeViewField } from "./components/TreeViewField";
import { DropDownTry2 } from "./components/DropDownTry2";
import { DropDownGrid } from "./components/DropDownGrid";
import { ButtonGroupField } from "./components/ButtonGroup";
import FieldSetComponent from "./components/FieldSetComponent";
import { RadioGroupField } from "./components/RadioGroupField";

const App = () => {
  const items = ["item1", "item2", "item3"];
  const meta = newVertex(0, ["Meta"], {
    id: "meta1",
    props: { enableThreeStateBehavior: false },
  });
  const data = newVertex(0, ["Vertex"], { id: "vertex1" });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };

  return (
    <div>
      {/* <TextInputField meta={meta} data={data} setValue={setValue} />

      Boolean:
      <BooleanInputField meta={meta} data={data} setValue={setValue} />

      Numerical
      <NumberInputField meta={meta} data={data} setValue={setValue} />

      TextArea
      <TextAreaField meta={meta} data={data} setValue={setValue} />

      DateInput
      <DateInputField meta={meta} data={data} setValue={setValue} />

      Select Input
      <SelectInputField meta={meta} data={data} setValue={setValue} items={items} />

      Switch
      <SwitchField meta={meta} data={data} setValue={setValue} />

      Autocomplete
      <AutocompleteField meta={meta} data={data} setValue={setValue} names={names} />

      ColorBox
      <ColorBoxField meta={meta} data={data} setValue={setValue} />

      Calendar
      <CalendarField meta={meta} data={data} setValue={setValue} />

      Tag Box
      <TagBoxField meta={meta} data={data} setValue={setValue} items={items} /> */}
      {/* Drop down tree */}
      {/* <DropDownBoxTreeField meta={meta} data={data} setValue={setValue} items={customers} /> */}
      {/* Drop down try
      <DropDownBoxField meta={meta} data={data} setValue={setValue} /> */}
      {/* Tree View Demo
      <TreeViewField
        meta={meta}
        data={data}
        setValue={setValue}
        items={employees}
      /> */}
      {/* DropDown try 2
      <DropDownTry2 meta={meta} data={data} setValue={setValue} /> */}
      {/* Drop down grid
      <DropDownGrid
        meta={meta}
        data={data}
        setValue={setValue}
        items={customers}
      /> */}
      Button Group
      <ButtonGroupField meta={meta} data={data} setValue={setValue} />
      <br />
      Field Form Set
      <FieldSetComponent meta={meta} data={data} setValue={setValue} />

      <br />
      Radio Group Field
      <RadioGroupField meta={meta} data={data} setValue={setValue} />
    </div>
  );
};

export default App;

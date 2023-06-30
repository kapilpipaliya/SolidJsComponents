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
import { RangeSelector } from "./components/RangeSelector";
import { RangeSliderField } from "./components/RangeSlider";
import { ResponsiveBoxField } from "./components/ResponsiveBox";
import SortableKanban from "./components/SortableField";
import { ValidationTextInputField } from "./components/ValidationTextBox";
import { ValidationBooleanInputField } from "./components/ValidationBooleanField";
import {
  Accordion,
  AccordionComponent,
  AccordionField,
} from "./components/Accordion";
import ActionSheet from "devextreme/ui/action_sheet";
import { ActionSheetComponent } from "./components/ActionSheet";
import { BarGaugeComponent } from "./components/BarGauge";
import { BoxComponent } from "./components/Box";
import { BulletComponent } from "./components/Bullet";
import { ButtonComponent } from "./components/Button";
import { ChartComponent } from "./components/Chart";
import { CircularGaugeComponent } from "./components/CircularGauge";
import { ContextMenuComponent } from "./components/ContextMenu";
import { DropDownButtonComponent } from "./components/DropdownButton";
import { FileUploaderComponent } from "./components/FileUploader";
import { LinearGaugeComponent } from "./components/LinearGauge";
import { ListComponent } from "./components/List";
import { HTMLEditorComponent } from "./components/HTMLEditor";
import { LoadIndicatorComponent } from "./components/LoadIndicator";
import { LoadPanelComponent } from "./components/LoadPanel";
import { LookupComponent } from "./components/Lookup";
import { MapComponent } from "./components/Map";
import { MenuComponent } from "./components/Menu";
import { MultiViewComponent } from "./components/MultiView";
import { PieChartComponent } from "./components/PieChart";
import { PivotGridComponent } from "./components/PivotGrid";
import { PivotGridFieldChooserComponent } from "./components/PivotGridFieldChooser";
import { PolarChartComponent } from "./components/PolarChart";
import { PopOverComponent } from "./components/PopOver";
import { PopupComponent } from "./components/Popup";
import { ProgressBarComponent } from "./components/ProgressBar";
import { ScrollViewComponent } from "./components/ScrollView";
import { SliderComponent } from "./components/Slider";
import { SparkLineComponent } from "./components/SparkLine";
import { TabPanelComponent } from "./components/TabPanel";
import { TabsComponent } from "./components/Tabs";
import { ToastComponent } from "./components/Toast";
import { TooltipComponent } from "./components/Tooltip";
import { TreeListComponent } from "./components/TreeList";
import { TreeMapComponent } from "./components/TreeMap";
import { VectorMapComponent } from "./components/VectorMap";
import { DrawerComponent } from "./components/Drawer";
import { DiagramComponent } from "./components/Diagram";
import { FileManagerComponent } from "./components/FileManager";
import { SankeyComponent } from "./components/Sankey";
import { SpeedDialActionComponent } from "./components/SpeedDialAction";
import { TileViewComponent } from "./components/TileView";
import { SchedulerComponent } from "./components/Scheduler";
import { FunnelComponent } from "./components/Funnel";
import { GalleryComponent } from "./components/Gallery";
import { DataGridComponent } from "./components/DataGrid";
import { FilterBuilderComponent } from "./components/FilterBuilder";
import { GanttComponent } from "./components/Gantt";

// import "./assets/styles/dx.generic.custom-scheme.css";
import "./assets/styles/dx.material.custom-scheme.css";
import "./assets/styles/dx.material.orange-light.css";

import { ThemeForm } from "./components/ThemeForm";
import { ThemeButton } from "./components/ThemeButton";
import { createSignal } from "solid-js";
import { DropDownThemeField, ThemeSwitcherDropdown, dropdownThemeData } from "./components/ThemeSwitcherDropdown";

const App = () => {
  const [theme, setTheme] = createSignal("");
  const items = ["item1", "item2", "item3"];
  const meta = newVertex(0, ["Meta"], {
    id: "meta1",
    props: {
      enableThreeStateBehavior: false,
      validationRules: [
        { type: "required", message: "Email is required" },
        { type: "email", message: "Email is invalid" },
      ],
    },
    // props: { enableThreeStateBehavior: false, validationRules: ['required', 'email'] },
  });
  const data = newVertex(0, ["Vertex"], { id: "vertex1" });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };
  const meta2 = newVertex(0, ["Meta"], {
    id: "meta2",
    props: { mode: "password", validationRules: [{ type: "required" }] },
  });
  const meta3 = newVertex(0, ["Meta"], {
    id: "meta3",
    props: { validationRules: ["required"] },
  });
  const data3 = newVertex(0, ["Vertex"], { meta3: false });

  const metatheme = newVertex(0, ["Meta"], {
    id: "metatheme",
    props: {  },
  });

  const dataTheme = newVertex(0, ["Vertex"], { metatheme: dropdownThemeData });

  const setValueTheme = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
    setTheme(data.theme);
  };

  return (
    <div class={theme()}>
      {/* theme dropdown */}
      <DropDownThemeField
        meta={metatheme}
        data={dataTheme}
        setValue={setValueTheme}
      />

      <TextInputField meta={meta} data={data} setValue={setValue} />
      Validation Text Input
      <ValidationTextInputField meta={meta} data={data} setValue={setValue} />
      Validation Text Input Password
      <ValidationTextInputField meta={meta2} data={data} setValue={setValue} />
      Boolean:
      <BooleanInputField meta={meta} data={data} setValue={setValue} />
      Validation Boolean:
      <ValidationBooleanInputField
        meta={meta3}
        data={data3}
        setValue={setValue}
      />
      Numerical
      <NumberInputField meta={meta} data={data} setValue={setValue} />
      TextArea
      <TextAreaField meta={meta} data={data} setValue={setValue} />
      DateInput
      <DateInputField meta={meta} data={data} setValue={setValue} />
      Select Input
      <SelectInputField
        meta={meta}
        data={data}
        setValue={setValue}
        items={items}
      />
      Switch
      <SwitchField meta={meta} data={data} setValue={setValue} />
      Autocomplete
      <AutocompleteField
        meta={meta}
        data={data}
        setValue={setValue}
        names={names}
      />
      ColorBox
      <ColorBoxField meta={meta} data={data} setValue={setValue} />
      Calendar
      <CalendarField meta={meta} data={data} setValue={setValue} />
      Tag Box
      <TagBoxField meta={meta} data={data} setValue={setValue} items={items} />
      {/*Drop down tree*/}
      {/*<DropDownBoxTreeField meta={meta} data={data} setValue={setValue} items={customers} />*/}
      Drop down try
      <DropDownBoxField meta={meta} data={data} setValue={setValue} />
      Tree View Demo
      <TreeViewField
        meta={meta}
        data={data}
        setValue={setValue}
        items={employees}
      />
      {/*DropDown try 2*/}
      {/*<DropDownTry2 meta={meta} data={data} setValue={setValue} />*/}
      Drop down grid
      <DropDownGrid
        meta={meta}
        data={data}
        setValue={setValue}
        items={customers}
      />
      Button Group
      <ButtonGroupField meta={meta} data={data} setValue={setValue} />
      <br />
      Field Form Set
      <FieldSetComponent meta={meta} data={data} setValue={setValue} />
      <br />
      Radio Group Field
      <RadioGroupField meta={meta} data={data} setValue={setValue} />
      <br />
      Range Selector
      <RangeSelector meta={meta} data={data} setValue={setValue} />
      <br />
      Range Slider
      <RangeSliderField meta={meta} data={data} setValue={setValue} />
      <br />
      Responsive Box
      <ResponsiveBoxField meta={meta} data={data} setValue={setValue} />
      <br />
      Sortable
      <SortableKanban meta={meta} data={data} setValue={setValue} />
      <br />
      Accordion
      <AccordionComponent />
      <br />
      Action Sheet
      <br />
      <ActionSheetComponent />
      <br />
      Bar Gauge
      <BarGaugeComponent />
      <br />
      Box
      <BoxComponent />
      <br />
      Bullet
      <BulletComponent />
      <br />
      Button
      <ButtonComponent />
      Chart
      <ChartComponent />
      Circular Gauge
      <CircularGaugeComponent />
      Right click on ContextMenu
      <ContextMenuComponent />
      Dropdown Button
      <DropDownButtonComponent />
      File Uploader
      <FileUploaderComponent />
      Linear Gauge
      <LinearGaugeComponent />
      List
      <ListComponent />
      HTML Editor
      <HTMLEditorComponent />
      Load Indicator
      <LoadIndicatorComponent />
      Load Panel
      <LoadPanelComponent />
      Lookup
      <LookupComponent />
      Map
      <MapComponent />
      Menu
      <MenuComponent />
      MultiView
      <MultiViewComponent />
      Pie Chart
      <PieChartComponent />
      Pivot Grid
      <PivotGridComponent />
      Pivot Grid Field Chooser
      <PivotGridFieldChooserComponent />
      Polar Chart
      <PolarChartComponent />
      Pop Over
      <PopOverComponent />
      Pop up
      {/*<PopupComponent />*/}
      <br />
      Progress Bar
      <br />
      <br />
      <ProgressBarComponent />
      <br />
      Scroll View
      <ScrollViewComponent />
      <br />
      Slider
      <SliderComponent />
      <br />
      Spark Line
      <SparkLineComponent />
      <br />
      Tab Panel
      <TabPanelComponent />
      <br />
      Tabs
      <TabsComponent />
      <br />
      Toast
      {/*<ToastComponent />*/}
      {/*<br/>*/}
      {/*Tooltip*/}
      {/*<TooltipComponent />*/}
      <br />
      Tree List
      <TreeListComponent />
      <br />
      Tree Map
      <TreeMapComponent />
      <br />
      Vector Map
      <VectorMapComponent />
      <br />
      File Manager
      <FileManagerComponent />
      <br />
      Sankey
      <SankeyComponent />
      <br />
      Speed Dial Action
      <SpeedDialActionComponent />
      <br />
      TileView
      <TileViewComponent />
      <br />
      Scheduler
      <SchedulerComponent />
      <br />
      Funnel
      <FunnelComponent />
      <br />
      Gallery
      <GalleryComponent />
      <br />
      DataGrid
      <DataGridComponent />
      <br />
      Filter Buidler
      <FilterBuilderComponent />
      {/*<br/>*/}
      {/*Gantt*/}
      {/*<GanttComponent />*/}
      <br />
      Drawer
      <DrawerComponent />
      {/*<br/>*/}
      {/*Diagram*/}
      {/*<DiagramComponent />*/}
      {/* Theme builder */}
      Theme Form
      <ThemeForm />
      <br />
      theme button
      <ThemeButton />
    </div>
  );
};

export default App;

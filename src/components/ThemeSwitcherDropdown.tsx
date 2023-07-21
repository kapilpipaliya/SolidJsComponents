import {createEffect, For, Show} from "solid-js";
import {ComponentProps, Vertex} from "./Form";
import DropDownButton, {Properties} from "devextreme/ui/drop_down_button";
import {newVertex} from "./utils";
// @ts-ignore
import { dropdownThemeData } from "../data/dropdownThemeData";

export function ThemeSwitcherDropdown() {
  const meta = newVertex(0, ["Meta"], {
    id: "meta",
    props: { },
  });

  const data = newVertex(0, ["Vertex"], { meta: dropdownThemeData });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };

  return <DropDownThemeField meta={meta} data={data} setValue={setValue} theme={""} />
}
export function DropDownThemeField(props: ComponentProps & { theme: string}) {

  return (
    <div aria-labelledby={props["aria-labeledby"]}>
      <div
        ref={(el) => {
          const instance = new DropDownButton(el, {
            displayExpr: "name",
            items: props.data.properties[props.meta.properties.id],
            keyExpr: "id",
            stylingMode: "text",
            selectedItemKey: 0,
            useSelectMode: true,
            // 'Select Theme'

            // width: 200,
            onSelectionChanged: (e: any) => {
              props.setValue(props.meta, e.item);
            }
          });
          createEffect(() =>
            instance.option(
              "items",
              props.data.properties[props.meta.properties.id]
            )
          );
          createEffect(() => {
            console.log(props.theme);
            if(props.theme !== "") {
              console.log(props.data.properties[props.meta.properties.id]);
              props.data.properties[props.meta.properties.id].forEach((item: any) => {
                if(item.theme === props.theme) {
                  console.log(item, props.theme);
                  instance.option("selectedItemKey", item.id);
                }
              });
            }
            for (const property in props.meta.properties.props as Properties) {
              instance.option(property, props.meta.properties.props[property]);
            }
          });
        }}
      />
      <Show when={props.errors}>
        <For each={Object.values(props.errors!)}>
          {(errorMsg: string) => <small>{errorMsg}</small>}
        </For>
      </Show>
    </div>
  );
}

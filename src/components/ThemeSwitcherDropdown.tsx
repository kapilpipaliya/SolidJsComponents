import {createEffect, For, Show} from "solid-js";
import {ComponentProps, Vertex} from "./Form";
import DropDownButton, {Properties} from "devextreme/ui/drop_down_button";
import {newVertex} from "./utils";

export const dropdownThemeData = [
  {
    "id": 0,
    "name": "Select Theme",
    "theme": "",
    "dxTheme": ""
  },
  {
    "id": 1,
    "name": "Material Blue Light",
    "theme": "dx-swatch-custom-scheme",
    "dxTheme": "material.blue.light"
  },
  {
    "id": 2,
    "name": "Material Orange Light",
    "theme": "dx-swatch-orange-light",
    "dxTheme": "material.orange.light"
  },
  {
    "id": 3,
    "name": "General Light",
    "theme": "dx-swatch-light",
    "dxTheme": "generic.light"
  },
  {
    "id": 4,
    "name": "General Carmine",
    "theme": "dx-swatch-light-compact",
    "dxTheme": "generic.carmine"
  },
  {
    "id": 5,
    "name": "General Light Compact",
    "theme": "dx-swatch-light-compact",
    "dxTheme": "generic.light.compact"
  }
];
export function ThemeSwitcherDropdown() {
  const meta = newVertex(0, ["Meta"], {
    id: "meta",
    props: { },
  });

  const data = newVertex(0, ["Vertex"], { meta: dropdownThemeData });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };

  return <DropDownThemeField meta={meta} data={data} setValue={setValue} />
}
export function DropDownThemeField(props: ComponentProps) {
  return (
    <div aria-labelledby={props["aria-labeledby"]}>
      <div
        ref={(el) => {
          const instance = new DropDownButton(el, {
            displayExpr: "name",
            items: props.data.properties[props.meta.properties.id],
            keyExpr: "id",
            selectedItemKey: 0,
            stylingMode: "text",
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

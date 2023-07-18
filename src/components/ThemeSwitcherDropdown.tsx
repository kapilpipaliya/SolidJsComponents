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
    "name": "General Swatch Light",
    "theme": "dx-swatch-light",
    "dxTheme": "generic.light"
  },
  {
    "id": 2,
    "name": "General Swatch Dark",
    "theme": "dx-swatch-dark",
    "dxTheme": "generic.dark"
  },
  {
    "id": 3,
    "name": "General Swatch Carmine",
    "theme": "dx-swatch-carmine",
    "dxTheme": "generic.carmine"
  },
  {
    "id": 4,
    "name": "General Swatch Dark Moon",
    "theme": "dx-swatch-dark-moon-swatch",
    "dxTheme": ""
  },
  {
    "id": 5,
    "name": "General Swatch Dark Violet",
    "theme": "dx-swatch-dark-violet-swatch",
    "dxTheme": ""
  },
  {
    "id": 6,
    "name": "General Swatch Green Mist",
    "theme": "dx-swatch-green-mist-swatch",
    "dxTheme": ""
  },
  {
    "id": 7,
    "name": "General Swatch Soft Blue",
    "theme": "dx-swatch-soft-blue-swatch",
    "dxTheme": ""
  },
  {
    "id": 8,
    "name": "General Swatch Contrast",
    "theme": "dx-swatch-contrast",
    "dxTheme": ""
  },
  {
    "id": 9,
    "name": "General Compact Light",
    "theme": "dx-swatch-light-compact",
    "dxTheme": "generic.light.compact"
  },
  {
    "id": 10,
    "name": "General Compact Dark",
    "theme": "dx-swatch-dark-compact",
    "dxTheme": ""
  }
  // {
  //   "id": 1,
  //   "name": "Material Blue Light",
  //   "theme": "dx-swatch-custom-scheme",
  //   "dxTheme": "material.blue.light"
  // },
  // {
  //   "id": 2,
  //   "name": "Material Orange Light",
  //   "theme": "dx-swatch-orange-light",
  //   "dxTheme": "material.orange.light"
  // },
  // {
  //   "id": 3,
  //   "name": "General Light",
  //   "theme": "dx-swatch-light",
  //   "dxTheme": "generic.light"
  // },
  // {
  //   "id": 4,
  //   "name": "General Carmine",
  //   "theme": "dx-swatch-light-compact",
  //   "dxTheme": "generic.carmine"
  // },
  // {
  //   "id": 5,
  //   "name": "General Light Compact",
  //   "theme": "dx-swatch-light-compact",
  //   "dxTheme": "generic.light.compact"
  // },
  // {
  //   "id": 6,
  //   "name": "General Dark",
  //   "theme": "dx-swatch-dark",
  //   "dxTheme": "generic.dark"
  // },
  // {
  //   "id": 7,
  //   "name": "M"
  // }
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

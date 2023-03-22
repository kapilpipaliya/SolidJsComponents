import { ComponentProps } from "./Form";
import ButtonGroup, {
  Properties,
  ItemClickEvent,
} from "devextreme/ui/button_group";
import Notify from "devextreme/ui/notify";
import { createEffect, For, Show } from "solid-js";
import { alignments, fontStyles } from "../data/alignments";

export function ButtonGroupField(props: ComponentProps) {
  return (
    <div aria-labelledby={props["aria-labeledby"]}>
      <div
        style={{
          "margin-right": "10px",
        }}
        ref={(el) => {
          const instance = new ButtonGroup(el, {
            items: alignments,
            keyExpr: "alignment",
            stylingMode: "outlined",
            selectedItemKeys: ["left"],
            onItemClick: (e: ItemClickEvent) => {
              Notify(
                {
                  message: `You selected ${e.itemData.hint}`,
                  width: 320,
                },
                "success",
                1000
              );
              props.setValue(props.meta, e.itemData.alignment);
            },
          });
          createEffect(() =>
            instance.option(
              "value",
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

      <div
        ref={(el) => {
          const instance = new ButtonGroup(el, {
            items: fontStyles,
            keyExpr: "style",
            stylingMode: "outlined",
            selectionMode: "multiple",
            onItemClick: (e: any) => {
              Notify(
                {
                  message: `You selected ${e.itemData.hint}`,
                  width: 320,
                },
                "success",
                1000
              );
            },
          });
          createEffect(() =>
            instance.option(
              "value",
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

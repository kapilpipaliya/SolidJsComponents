import { ComponentProps } from "./Form";
import RadioGroup, { Properties } from "devextreme/ui/radio_group";
import Validator, {
    Properties as ValidatorProperties,
  } from "devextreme/ui/validator";
// @ts-ignore
import { priorities } from "../data/radioData";
import { createEffect, For, Show } from "solid-js";

export function ValidationRadioGroupField(props: ComponentProps) {
  return (
    <div aria-labeledby={props["aria-labeledby"]}>
      <div
        ref={(el) => {
          const instance = new RadioGroup(el, {
            items: priorities,
            value: priorities[0],
            onValueChanged: (e) => {
              props.setValue(props.meta, e.value);
            },
          });

          const validatorInstance = new Validator(el)

          createEffect(
            () =>
              props.data.properties[props.meta.properties.id] &&
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

          createEffect(() => {
            for (const property in props.meta.properties.props as ValidatorProperties) {
              validatorInstance.option(property, props.meta.properties.props[property]);
            }
          })
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

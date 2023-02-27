import { createEffect, For, Show } from "solid-js";

import TextBox, { Properties } from "devextreme/ui/text_box";
import { NativeEventInfo } from "devextreme/events";
import { Vertex } from "./Form";

export interface TextInputFieldProps extends Properties {
 meta: Vertex;
 vertex: Vertex;
 setValue(attribute: Vertex, data: any): void;

 errors?: string[];
 "aria-labeledby"?: string;
}

export function TextInputField(props: TextInputFieldProps) {
  return (
   <div aria-labeledby={props["aria-labeledby"]}>
    <div ref={el => {
     const instance = new TextBox(el, {
      onChange: (e: NativeEventInfo<TextBox, KeyboardEvent>) => {
       props.setValue(props.meta, e.component.option("value"));
      },
     });
     createEffect(() => instance.option("value", props.vertex.properties[props.meta.properties.id]));
     createEffect(() => {
      for (const property in props.meta.properties.props as Properties) {
       instance.option(property, props.meta.properties.props[property]);
      }
     });
    }} />

    <Show when={props.errors}>
     <For each={Object.values(props.errors!)}>{(errorMsg: string) =>
      <small>{errorMsg}</small>}</For>
    </Show>
   </div>
  );
}

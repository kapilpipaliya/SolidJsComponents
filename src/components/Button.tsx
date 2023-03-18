import {createEffect, For, Show} from "solid-js";
import {ComponentProps, Vertex} from "./Form";
import Button, {Properties} from "devextreme/ui/button";
import {newVertex} from "./utils";

export function ButtonComponent() {
  const meta = newVertex(0, ["Meta"], {
    id: "meta",
    props: { stylingMode: "contained", width: "120", type: "success" },
  });

  const data = newVertex(0, ["Vertex"], { meta: 'Button' });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };

  return <ButtonField meta={meta} data={data} setValue={setValue} />
}
export function ButtonField(props: ComponentProps) {
  return (
    <div aria-labeledby={props["aria-labeledby"]}>
      <div
        ref={(el) => {
          const instance = new Button(el, {
            text: props.data.properties[props.meta.properties.id],
            onClick: () => {
              props.setValue(props.meta, "Click");
            }
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
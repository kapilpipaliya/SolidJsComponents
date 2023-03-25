import {createEffect, For, Show} from "solid-js";
import {ComponentProps, Vertex} from "./Form";
import ProgressBar, {Properties} from "devextreme/ui/progress_bar";
import {newVertex} from "./utils";

export function ProgressBarComponent() {
  const meta = newVertex(0, ["Meta"], {
    id: "meta",
    props: { },
  });

  const data = newVertex(0, ["Vertex"], { meta: 50 });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };

  return <ProgressBarField meta={meta} data={data} setValue={setValue} />
}
export function ProgressBarField(props: ComponentProps) {
  return (
    <div aria-labelledby={props["aria-labeledby"]}>
      <div
        ref={(el) => {
          const instance = new ProgressBar(el, {
            min: 0,
            max: 100,
            width: '90%',
            statusFormat(ratio) {
              return `Loading: ${ratio * 100}%`;
            },
            onComplete(e) {
              props.setValue(props.meta, 'completed');
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
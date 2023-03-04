import ColorBox, { Properties } from "devextreme/ui/color_box";
import { createEffect, For, Show } from "solid-js";
import { Vertex } from "./Form";


export interface ColorBoxProps extends Properties {
    meta: Vertex;
    data: Vertex;
    errors?: string[];
    "aria-labeledby"?: string;

    setValue(attribute: Vertex, data: any): void;
}

export function ColorBoxField(props: ColorBoxProps) {
    return (
        <div aria-labeledby={props["aria-labeledby"]}>
            <div ref={el => {
                const instance = new ColorBox(el, {
                    applyButtonText: "Apply",
                    cancelButtonText: "Cancel",
                    onValueChanged: (e) => {
                        props.setValue(props.meta, (e.value));
                    }
                });
                createEffect(() => instance.option("value", props.data.properties[props.meta.properties.id]));
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

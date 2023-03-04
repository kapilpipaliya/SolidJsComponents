import TagBox, { Properties } from "devextreme/ui/tag_box";
import { createEffect, For, Show } from "solid-js";
import { Vertex } from "./Form";


export interface TagBoxFieldProps extends Properties {
    meta: Vertex;
    data: Vertex;
    items: any[];
    errors?: string[];
    "aria-labeledby"?: string;

    setValue(attribute: Vertex, data: any): void;
}

export function TagBoxField(props: TagBoxFieldProps) {
    return (
        <div aria-labeledby={props["aria-labeledby"]}>
            <div ref={el => {
                const instance = new TagBox(el, {
                    items: props.items,
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

import { createEffect, For, Show } from "solid-js";
import { Vertex } from "./Form";
import SelectBox, { Properties } from "devextreme/ui/select_box";


export interface SelectInputFieldProps extends Properties {
    meta: Vertex;
    vertex: Vertex;
    items: any[];
    errors?: string[];
    "aria-labeledby"?: string;

    setValue(attribute: Vertex, data: any): void;
}

export function SelectInputField(props: SelectInputFieldProps) {
    return (
        <div aria-labeledby={props["aria-labeledby"]}>
            <div ref={el => {
                const instance = new SelectBox(el, {
                    items: props.items,
                    placeholder: "Select now...",
                    dataSource: [...props.items, 'item4'],
                    // disabled: true,
                    readOnly: true,
                    onValueChanged: (e: any) => {
                        props.setValue(props.meta, e.value);
                    }
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

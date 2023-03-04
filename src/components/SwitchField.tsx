import Switch, { Properties } from "devextreme/ui/switch";
import { createEffect, For, Show } from "solid-js";
import { Vertex } from "./Form";


export interface SwitchFieldProps extends Properties {
    meta: Vertex;
    data: Vertex;
    errors?: string[];
    "aria-labeledby"?: string;

    setValue(attribute: Vertex, data: any): void;
}

export function SwitchField(props: SwitchFieldProps) {
    return (
        <div aria-labeledby={props["aria-labeledby"]}>
            <div ref={el => {
                const instance = new Switch(el, {
                    // disabled: true,
                    // readOnly: true,
                    onValueChanged: (e) => {
                        props.setValue(props.meta, (e.value));
                        e.value && alert('Switch value changed to ' + e.value)
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

import Calendar, { Properties } from "devextreme/ui/calendar";
import { createEffect, For, Show } from "solid-js";
import { Vertex } from "./Form";


export interface CalendarFieldProps extends Properties {
    meta: Vertex;
    data: Vertex;
    errors?: string[];
    "aria-labeledby"?: string;

    setValue(attribute: Vertex, data: any): void;
}

export function CalendarField(props: CalendarFieldProps) {
    return (
        <div aria-labeledby={props["aria-labeledby"]}>
            <div ref={el => {
                const instance = new Calendar(el, {
                    onValueChanged: (e) => {
                        props.setValue(props.meta, (e.value));
                        e.value && alert('Calendar value changed to ' + e.value)
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
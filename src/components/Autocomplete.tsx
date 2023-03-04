import Autocomplete, {Properties} from "devextreme/ui/autocomplete";
import { createEffect, For, Show } from "solid-js";
import { Vertex } from "./Form";


export interface AutoCompleteProps extends Properties {
    meta: Vertex;
    data: Vertex;
    errors?: string[];
    names: string[];
    "aria-labeledby"?: string;

    setValue(attribute: Vertex, data: any): void;
}

export function AutocompleteField(props: AutoCompleteProps) {
    return (
        <div aria-labeledby={props["aria-labeledby"]}>
            <div ref={el => {
                const instance = new Autocomplete(el, {
                    dataSource: props.names,
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

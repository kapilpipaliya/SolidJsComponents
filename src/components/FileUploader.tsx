import { createEffect, createSignal, For, Show } from "solid-js";
import { ComponentProps, Vertex } from "./Form";
import FileUploader, { Properties } from "devextreme/ui/file_uploader";
import { newVertex } from "./utils";
import dxButton from "devextreme/ui/button";

export function FileUploaderComponent() {
  const meta = newVertex(0, ["Meta"], {
    id: "meta",
    props: {},
  });

  const data = newVertex(0, ["Vertex"], { meta: "" });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };

  return <FileUploaderField meta={meta} data={data} setValue={setValue} />;
}
export function FileUploaderField(props: ComponentProps) {
  const [file, setFile] = createSignal() as any;

  return (
    <div aria-labelledby={props["aria-labeledby"]}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('flie', file());
          let formData = new FormData();
          formData.append(
            "",
            file(),
            file().name
          );

          let requestOptions = {
            method: "POST",
            body: formData,
            redirect: "follow",
            mode: "cors",
          };

          fetch("http://49.12.190.36:1201/api/upload", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        }}
      >
        <div
          ref={(el) => {
            const instance = new FileUploader(el, {
              selectButtonText: "Select file",
              labelText: "",
              accept: "image/*",
              uploadMode: "useForm",
              onValueChanged: (e) => {
                props.setValue(props.meta, e.component._files[0].value);
                setFile(e.component._files[0].value);
              },
            });

            createEffect(() => {
              for (const property in props.meta.properties
                .props as Properties) {
                instance.option(
                  property,
                  props.meta.properties.props[property]
                );
              }
            });
          }}
        />
        {/* button */}

        <button
          type="submit"
          class="dx-button dx-button-success dx-button-mode-contained"
          aria-label="Upload"
        >
          Upload
        </button>

        <Show when={props.errors}>
          <For each={Object.values(props.errors!)}>
            {(errorMsg: string) => <small>{errorMsg}</small>}
          </For>
        </Show>
      </form>
    </div>
  );
}

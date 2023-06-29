import { createEffect, For, Show } from "solid-js";

import Form, { Properties } from "devextreme/ui/form";
import { ComponentProps } from "./Form";
import { newVertex } from "./utils";

export function ThemeForm() {
  const companies = [
    {
      ID: 1,
      Name: "Super Mart of the West",
      Address: "702 SW 8th Street",
      City: "Bentonville",
      State: "Arkansas",
      ZipCode: 72716,
      Phone: "(800) 555-2797",
      Fax: "(800) 555-2171",
      Website: "",
      Active: true,
    },
    {
      ID: 2,
      Name: "Electronics Depot",
      Address: "2455 Paces Ferry Road NW",
      City: "Atlanta",
      State: "Georgia",
      ZipCode: 30339,
      Phone: "(800) 595-3232",
      Fax: "(800) 595-3231",
      Website: "",
      Active: true,
    },
    {
      ID: 3,
      Name: "K&S Music",
      Address: "1000 Nicllet Mall",
      City: "Minneapolis",
      State: "Minnesota",
      ZipCode: 55403,
      Phone: "(612) 304-6073",
      Fax: "(612) 304-6074",
      Website: "",
      Active: true,
    },
    {
      ID: 4,
      Name: "Tom's Club",
      Address: "999 Lake Drive",
      City: "Issaquah",
      State: "Washington",
      ZipCode: 98027,
      Phone: "(800) 955-2292",
      Fax: "(800) 955-2293",
      Website: "",
      Active: true,
    },
  ];

  const employee = {
    name: "John Heart",
    position: "CEO",
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    phone: "+1(213) 555-9392",
    skype: "jheart_DX_skype",
    email: "jheart@dx-email.com",
    notes: "John has been in the Audio/Video industry since 1990.",
  };

  const meta = newVertex(0, ["Meta"], {
    id: "meta",
    props: {},
  });

  const data = newVertex(0, ["Vertex"], {
    meta: employee,
    items: [
      "name",
      "officeNumber",
      {
        dataField: "hireDate",
        editorOptions: {
          disabled: true,
        },
      },
    ],
  });

  const setValue = (attribute: any, data: any) => {
    console.log(attribute, data);
  };

  return <FormComponent meta={meta} data={data} setValue={setValue} />;
}

export function FormComponent(props: ComponentProps) {
  return (
    <div aria-labelledby={props["aria-labeledby"]}>
      <div
        class="dx-swatch-custom-scheme"
        ref={(el) => {
          // const instance = new Form(el, {
          //   formData: props.data.properties[props.meta.properties.id],
          //   colCount: 2,
          //   labelLocation: "top",
          //   items: props.data.properties.items as Properties[],
          //   onFieldDataChanged: (e: any) => {
          //     props.setValue(e.dataField, e.value);
          //   },
          // });

          const instance = new Form(el, {
            labelMode: "floating",
            formData: {
              ID: 1,
              Name: "Super Mart of the West",
              Address: "702 SW 8th Street",
              City: "Bentonville",
              State: "Arkansas",
              ZipCode: 72716,
              Phone: "(800) 555-2797",
              Fax: "(800) 555-2171",
              Website: "",
              Active: true,
            },
            readOnly: false,
            showColonAfterLabel: true,
            labelLocation: "left",
            minColWidth: 300,
            colCount: 2,
          });

          // createEffect(() =>
          //   instance.option(
          //     "items",
          //     props.data.properties[props.meta.properties.id]
          //   )
          // );

          // createEffect(() => {
          //   for (const property in props.meta.properties.props as Properties) {
          //     instance.option(property, props.meta.properties.props[property]);
          //   }
          // });
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

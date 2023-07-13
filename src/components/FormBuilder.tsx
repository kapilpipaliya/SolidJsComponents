import { createEffect, createSignal, For, Show } from "solid-js";
import { ComponentProps, Vertex } from "./Form";
import Tabs, { Properties } from "devextreme/ui/tabs";
import { newVertex } from "./utils";

export function FormBuilder() {
  const meta = newVertex(0, ["Meta"], {
    id: "meta",
    props: {},
  });

  const data = newVertex(0, ["Vertex"], { meta: "Button" });
  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };

  const employees: any = {
    ID: 1,
    FirstName: "John",
    LastName: "Heart",
    CompanyName: "Super Mart of the West",
    Position: "CEO",
    OfficeNo: "901",
    BirthDate: new Date(1964, 2, 16),
    HireDate: new Date(1995, 0, 15),
    Address: "351 S Hill St.",
    City: "Los Angeles",
    State: "CA",
    Zipcode: "90013",
    Phone: "+1(213) 555-9392",
    Email: "jheart@dx-email.com",
    Skype: "jheart_DX_skype",
  };

  const showItemsList = [
    {
      itemType: "group",
      caption: "System Information",
      items: [
        "ID",
        "FirstName",
        "LastName",
        "HireDate",
        "Position",
        "OfficeNo",
      ],
    },
    {
      itemType: "group",
      caption: "Personal Data",
      items: [
        "BirthDate",
        {
          itemType: "group",
          caption: "Home Address",
          items: ["Address", "City", "State", "Zipcode"],
        },
      ],
    },
    {
      itemType: "group",
      caption: "Contact Information",

      items: [
        {
          itemType: "tabbed",
          tabPanelOptions: {
            deferRendering: false,
          },
          tabs: [
            {
              title: "Phone",
              items: ["Phone"],
            },
            {
              title: "Skype",
              items: ["Skype"],
            },
            {
              title: "Email",
              items: ["Email"],
            },
          ],
        },
      ],
    },
  ];

  const renderInputElement = (item: any) => {
    if (!employees[item]) return null;

    let type = "text";

    if (typeof employees[item] === "number") type = "number";
    if (typeof employees[item] === "object" && employees[item] instanceof Date)
      type = "date";

    return (
      <>
        <label
          style={{
            "font-size": "14px",
            "font-weight": "400",
            "margin-bottom": "10px",
            color: "#111",
            display: "table-cell",
            "vertical-align": "middle",
            "padding-right": "10px",
            width: "30%",
            "line-height": "1.35715",
          }}
        >
          {item.replace(/([A-Z][a-z])/g, " $1").replace(/(\d)/g, " $1")}
        </label>
        <input
          style={{
            display: "table-cell",
            "vertical-align": "top",
            width: "50%",
            "line-height": "1.35715",
            "border-radius": "4px",
            border: "1px solid #ddd",
            "outline-color": "#337ab7",
            margin: 0,
            padding: "7px 9px 8px",
            // "min-height": "34px",
            "font-size": "14px",
            color: "#333",
          }}
          type={type}
          value={
            type === "date"
              ? employees[item].toISOString().split("T")[0]
              : employees[item]
          }
        />
      </>
    );
  };

  const renderFields = (groupItemsList: Array<any>) => {
    // console.log(groupItemsList, "called");

    const [selectedTab, setSelectedTab] = createSignal("");

    return (
      <For each={groupItemsList}>
        {(item) => (
          <>
            {typeof item === "string" && <>{renderInputElement(item)}</>}

            {typeof item === "object" &&
              (item.itemType === "group" ? (
                <>
                  <h2
                    style={{
                      "font-weight": 500,
                      "font-size": "20px",
                      "margin-bottom": "20px",
                    }}
                  >
                    {item.caption}
                  </h2>
                  <br />
                  {renderFields(item.items)}
                </>
              ) : (
                item.itemType === "tabbed" && (
                  <>
                    <h2
                      style={{
                        "font-weight": 500,
                        "font-size": "20px",
                        "margin-bottom": "20px",
                      }}
                    >
                      {item.caption}
                    </h2>
                    <br />
                    <div
                      ref={(el) => {
                        const instance = new Tabs(el, {
                          dataSource: item.tabs.map((tab, index) => {
                            if (index === 0) setSelectedTab(tab.title);

                            return tab.title;
                          }),
                          width: "42vw",
                          selectedIndex: 0,
                          onSelectionChanged(e) {
                            setSelectedTab(e.addedItems[0]);
                          },
                        });
                      }}
                    />
                    <br />
                    <For each={item.tabs}>
                      {(tab) => (
                        <>
                          {selectedTab() === tab.title &&
                            renderFields(tab.items)}
                        </>
                      )}
                    </For>
                  </>
                )
              ))}
          </>
        )}
      </For>
    );
  };

  return (
    <div
      style={{
        "font-family":
          "'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana",
      }}
    >
      <For each={showItemsList}>
        {(groupItem) => (
          <div>
            <h1
              style={{
                "font-weight": 200,
                "font-size": "28px",
                "margin-bottom": "20px",
              }}
            >
              {groupItem.caption}
            </h1>
            <div
              style={{
                // format the items in table format with labels and input fields aligned
                display: "grid",
                "grid-template-columns": "20% 40%",
                "grid-column-gap": "20px",
                "grid-row-gap": "10px",
              }}
            >
              {renderFields(groupItem.items)}
            </div>
          </div>
        )}
      </For>
    </div>
  );
}

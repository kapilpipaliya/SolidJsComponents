import { createSignal, For } from "solid-js";
import { Vertex } from "./Form";
import Tabs from "devextreme/ui/tabs";
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
      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(1, 1fr)",
        }}
      >
        <label
          style={{
            "font-size": "14px",
            "font-weight": "400",
            "margin-bottom": "10px",
            color: "#111",
            "vertical-align": "middle",
            "padding-right": "10px",
            "line-height": "1.35715",
          }}
        >
          {item.replace(/([A-Z][a-z])/g, " $1").replace(/(\d)/g, " $1")}
        </label>
        <input
          style={{
            "vertical-align": "top",
            "line-height": "1.35715",
            "border-radius": "4px",
            border: "1px solid #ddd",
            "outline-color": "#337ab7",
            margin: 0,
            padding: "7px 9px 8px",
            "font-size": "14px",
            color: "#333",
            "margin-bottom": "10px",
          }}
          type={type}
          value={
            type === "date"
              ? employees[item].toISOString().split("T")[0]
              : employees[item]
          }
        />
      </div>
    );
  };

  const renderFields = (groupItemsList: Array<any>) => {
    // console.log(groupItemsList, "called");

    const [selectedTab, setSelectedTab] = createSignal("");

    return (
      <>
        <For each={groupItemsList}>
          {(item) => (
            <>
              {typeof item === "string" && <>{renderInputElement(item)}</>}

              {typeof item === "object" &&
                (item.itemType === "group" ? (
                  <div
                    style={{
                      "padding-left": "20px",
                    }}
                  >
                    <h2
                      style={{
                        "font-weight": 500,
                        "font-size": "20px",
                      }}
                    >
                      {item.caption}
                    </h2>
                    <br />
                    {renderFields(item.items)}
                  </div>
                ) : (
                  item.itemType === "tabbed" && (
                    <div
                      style={{
                        "padding-left": "20px",
                      }}
                    >
                      <h2
                        style={{
                          "font-weight": 500,
                          "font-size": "20px",
                        }}
                      >
                        {item.caption}
                      </h2>
                      <br />
                      <div
                        ref={(el) => {
                          const instance = new Tabs(el, {
                            dataSource: item.tabs.map(
                              (
                                tab: {
                                  title: any;
                                },
                                index: Number
                              ) => {
                                if (index === 0) setSelectedTab(tab.title);

                                return tab.title;
                              }
                            ),
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
                    </div>
                  )
                ))}
            </>
          )}
        </For>
      </>
    );
  };

  return (
    <div
      style={{
        "font-family":
          "'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana",
        display: "grid",
        "grid-template-columns": "repeat(2, 1fr)",
        "grid-gap": "20px",
      }}
    >
      <For each={showItemsList}>
        {(groupItem) => (
          <div>
            <h1
              style={{
                "font-weight": 500,
                "font-size": "28px",
                "margin-bottom": "20px",
              }}
            >
              {groupItem.caption}
            </h1>
            {renderFields(groupItem.items)}
          </div>
        )}
      </For>
    </div>
  );
}

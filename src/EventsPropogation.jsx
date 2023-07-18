import React from "react";
function EventPropogation() {
  return (
    <div
      onClick={() => {
        alert("You Clicked On Div");
      }}
    >
      <button onClick={() => alert("You Clicked On Button")}>Click Me</button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("You Clicked On Button(Event Propogation stoped.)");
        }}
      >
        Click Me(Event not propogate to parent)
      </button>
    </div>
  );
}
export { EventPropogation };

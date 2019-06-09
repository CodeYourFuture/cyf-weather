import React from "react";

function form() {
  return (
    <div>
      <form onSubmit>
        <input type="text" name="city" placeholder="City..." />

        <button className="weatherbutton">Find Weather!</button>
      </form>
    </div>
  );
}

export default form;

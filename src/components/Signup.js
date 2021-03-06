import React from "react";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton";
import FormField from "./FormField";

function Signup() {
  return (
    <div>
    <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
        <FormField
          label="E-Mail"
          type="email"
          placeholder="e.g. alex@smith.com"
        />
        <FormField label="Password" type="password" />

        <CoolButton isPrimary type="submit">
          Submit
        </CoolButton>
      </form>
    </div>
  );
}

export default Signup

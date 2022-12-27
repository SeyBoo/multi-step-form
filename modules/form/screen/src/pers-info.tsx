import { FunctionComponent } from "react";

export const PersoInfo: FunctionComponent = () => {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email Address</label>
        <input type="email" name="email" />
        <label>Phone Number</label>
        <input type="tel" name="tel" id="" />
      </form>
    </div>
  )
};

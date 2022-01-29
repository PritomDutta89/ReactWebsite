import React from "react";
import { FirstName, LastName } from "../App";

const CompC = () => {
  return (
    <>
      {/* js part write in curly braces in jsx */}
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;

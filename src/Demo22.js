import React from 'react'
let m = [{ name: "Arvind", branch: "CSE" }, { name: "Aman", branch: "CSDS" }, { name: "Aman", branch: "CSE" }, { name: "Gaurav", branch: "CSE" }];
export default function Demo22() {
  return (
    <div>
      {
        m.map(
          (obj) => {
            return (
              <p>Student name is {obj.name} and branch is {obj.branch}</p>

            )
          }
        )
      }
    </div>

  )
}

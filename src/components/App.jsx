import React, { useState } from "react";

function App()
{

    const[info, setInfo]=useState(
        {
            fName:" ",
            lName:" "
        }
    );

    function handleChange(event)
    {
        const {name , value} =event.target;

        setInfo(preValue => (
            {
                ...preValue,
                [name]:value
            }));
    }
    return (
        <div className="container">
          <h1 className="Display">
            Hello {info.fName} {info.lName}!
          </h1>
          <form>
            <input
            onChange={handleChange}
              name="fName"
              value={info.fName}
              placeholder="First Name"
            />
            <input
              onChange={handleChange}
              name="lName"
              value={info.lName}
              placeholder="Last Name"
            />
            <input
              name="email"
              placeholder="Email"
              type={"email"}
            />
            <input
                name="password"
                placeholder="Password"
                type={"password"}
            />
            <button>Login</button>
          </form>
        </div>
      );
}

export default App;
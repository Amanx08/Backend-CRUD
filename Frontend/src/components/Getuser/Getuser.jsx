import React, { useEffect, useState } from 'react'
import '../Getuser/Getuser.css'
import axios from 'axios'

function Getuser() {

  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:4000/api/getall")
      setUser(response.data);
    }

    fetchdata();

  }, [])
  return (
    <>
      <div class="container">
        <h1>Responsive Table</h1>
        <table class="rwd-table">
          <tbody>
            <tr>
              <th>S.no.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Due Date</th>
              <th>Net Amount</th>
              <th></th>
            </tr>
            {
              users.map((user, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td data-th="Supplier Code">
                      {user.fname}
                    </td>
                    <td data-th="Supplier Name">
                    {user.lname}
                    </td>
                    <td data-th="Invoice Number">
                    {user.email}
                    </td>
                    <td data-th="Invoice Date">
                    {user.password}
                    </td>
                    <td data-th="Due Date">
                      12/25/2016
                    </td>
                    <td data-th="Net Amount">
                      $8,322.12
                    </td>
                    <td>

                      <button>add</button>
                      <button>remove</button>
                      <button>update</button>
                      <button>view</button>

                    </td>
                  </tr>
                )
              })
            }


          </tbody>
        </table>
      </div>
    </>
  )
}

export default Getuser

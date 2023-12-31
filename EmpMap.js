import React from 'react';
class EmpMap extends React.Component {
    render() {
             var employees = [
               { empId: 1234, name: 'John', designation:'SE' },
               { empId: 4567, name: 'Tom', designation:'SSE'},
               { empId: 8910, name: 'Kevin',designation:'TA'}
             ]
            
            return (<React.Fragment>
                    <table style={{width:'60%'}} className='table'>
                         <thead className="thead-light">
                             <tr>
                                  <th>EmpID</th>
                                  <th>Name</th>
                                  <th>Designation</th>
                             </tr>
                         </thead>
                         <tbody>
                              {employees.map(employee => {
                                     return (<tr>
                                             <td>{employee.empId}</td>
                                             <td>{employee.name}</td>
                                             <td>{employee.designation}</td>
                                     </tr>)
                             })
                             }
                         </tbody>
                    </table>
            </React.Fragment>)  
    }
}
export default EmpMap;

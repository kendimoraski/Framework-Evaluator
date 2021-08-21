/* eslint-disable semi */
import React from 'react'

// We eventually want these to be replaced by what the user inputs in the textarea and incorporate auto-suggest
// const FRAMEWORKS = ['facebook/react', 'angular/angular.js', 'emberjs/ember.js']

function Dashboard(props) {
  // const [ascending, setAscending] = useState(false);
  // const [descending, setDescending] = useState(false);
  // const [datapoint, setDatapoint] = useState('');
  // const { info } = props;

  // if (ascending || descending) {
  //   info.sort((a, b) => (a[datapoint] < b[datapoint] ? -1 : 1));
  //   // reverse the order if it's marked as descending
  //   if (descending) {
  //     info.reverse();
  //   }
  // }

  return (
    <div>
      <button className='btn btn-primary rounded-full'>
        Click Me I'm the Table Header
      </button>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Framework</th>
              <th>Forks</th>
              <th>Stargazers</th>
              <th>Open Issues</th>
            </tr>
          </thead>
          <tbody>
            {props.apiData.map(framework => (
              <React.Fragment key={framework.name}>
                <tr className='hover'>
                  <th scope='row'>
                    {' '}
                    {framework.name[0].toUpperCase() +
                      framework.name.slice(1)}{' '}
                  </th>
                  <td> {framework.forks} </td>
                  <td> {framework.stargazers} </td>
                  <td> {framework.openIssues} </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard

/* eslint-disable semi */
import React from 'react'
import Card from './Card'

// We eventually want these to be replaced by what the user inputs in the textarea and incorporate auto-suggest
// const FRAMEWORKS = ['facebook/react', 'angular/angular.js', 'emberjs/ember.js']

function Dashboard({
  apiData,
  mostForksNumber,
  mostForksName,
  mostStarsNumber,
  mostStarsName,
  leastIssuesNumber,
  leastIssuesName,
}) {
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
      <div className='card bordered'>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr className='hover'>
                <th>Framework</th>
                <th>Forks</th>
                <th>Stargazers</th>
                <th>Open Issues</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map(({ name, forks, stargazers, openIssues }) => (
                <React.Fragment key={name}>
                  <tr className='hover'>
                    <th> {name[0].toUpperCase() + name.slice(1)} </th>
                    <td> {forks} </td>
                    <td> {stargazers} </td>
                    <td> {openIssues} </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Card
        title={'Most Forks'}
        name={mostForksName}
        number={mostForksNumber}
      />
      <Card
        title={'Most Stars'}
        name={mostStarsName}
        number={mostStarsNumber}
      />
      <div>
        <Card
          title={'Least Open Issues'}
          name={leastIssuesName}
          number={leastIssuesNumber}
        />
      </div>
    </div>
  )
}

export default Dashboard

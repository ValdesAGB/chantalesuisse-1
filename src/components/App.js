import React, { useEffect, useState } from 'react'
import Header from './Header'
import Menu from './Menu'
import Price from './Price'
import Scores from './Scores'
import Table from './Table'
import Twitter from './Twitter'

function App() {
  const [data, setData] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)

  const getData = () => {
    setDataLoading(true)
    fetch('scoring_jsonPDFSample.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (result) {
        setData(result)
        setDataLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <React.Fragment>
      <Header data={data} isDataLoading={isDataLoading} />
      <Menu data={data} isDataLoading={isDataLoading} />
      <div className="d-flex justify-content-center">
        <Table data={data} isDataLoading={isDataLoading} />
        <Scores data={data} isDataLoading={isDataLoading} />
        <Price data={data} isDataLoading={isDataLoading} />
        <Twitter data={data} isDataLoading={isDataLoading} />
      </div>
    </React.Fragment>
  )
}

export default App

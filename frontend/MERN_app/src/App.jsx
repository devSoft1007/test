import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/table/Table'
import axios from 'axios'

function App() {
  const [state, setState] = useState({
    data:[],
    cols:['UserId', 'Id', 'Title', 'Body'],
    rows:[]
  })

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(res => {
      let rows = res.data.map(item => {
        return [item.userId, item.id, item.title, item.body]
      })
      setState(s => ({...s, rows: rows, data: res.data}))
    }).catch(e => {
      console.error(e)
    })
  },[])

  const handleClick = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/add',
      headers:{
        "Content-Type":'application/json'
      },
      data:state.data
    }).then(res => {
      alert(res.data.message)
    }).catch(e => {
      alert('Error while adding data')
      console.error(e)
    })
  }

  return (
    <>
    <button onClick={handleClick}>Add To Database</button>
     <Table rows={state.rows} cols={state.cols} />
    </>
  )
}

export default App

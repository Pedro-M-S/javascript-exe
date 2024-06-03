
import { useEffect, useState } from "react";
import axios from 'axios';
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
const initialState ={
  hits:[],
  loading: false,  
  error: null
};
function App() {
  const [state, setState] = useState(initialState);
  const {hits, loading, error} = state;
  const fetchData = ()=>{
    setState({...state,loading: true, error: null});
    axios.get(API + DEFAULT_QUERY)
    .then(result => setState({...state,hits: result.data.hits, loading: false}))
    .catch(err => setState({...state, error:err,loading: false }));
  }
  useEffect(()=>{
    fetchData();
  },[]);
  if(loading === true){
    return <h1>Loading</h1>
  }
  if(error !== null){
    return <h1>{error.message}</h1>
  }
  return (
    <ul>
    {hits.map(hit =>
      <li key={hit.objectID}>
      <a href={hit.url}>{hit.title}</a>
      </li>
      )}
    </ul>
  );
}
export default App;


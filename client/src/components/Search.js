import React from 'react'

const Search = (props) => {
	//console.log("Search: "+props.searchTerm)
  return(
    <div className="ui input">
    <form onSubmit={props.handleSubmit}>
      <input type={"text"} placeholder={"Search topic"} value={props.searchTerm} onChange={props.handleChange}/>
    </form>
    </div>
  )
}

export default Search

import React from 'react'

const SearchStartDate = (props) => {
	console.log("SearchStartDate: "+props.startDate)
  return(
    <div className="ui input">
    <form onSubmit={props.handleSubmit}>
      <input type={"text"} placeholder={"YYYYMMDD"} value={props.startDate} onChange={props.handleChangeStartDate}/>
    </form>
    </div>
  )
}

export default SearchStartDate


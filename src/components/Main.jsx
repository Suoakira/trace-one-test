import React, { useState, useEffect } from 'react'

import ListItem from "./ListItem"
import "../styles/Main.scss"

export default function Main() {


    const [events, setEvents] = useState([])




    const fetchData = (url) =>
        fetch(url, { mode: 'no-cors' })
            .then((resp) => {
                console.log(resp)
                console.log("response", resp.text())

            })
            .then((data) => {
                console.log(data);
            });


    const mapListItems = () => events.map(event => <ListItem event={event} />)



    return (
        <div className="main">
            <button onClick={() => fetchData('../assets/data/events.json')}>fetchData</button>
            {events.length}


            <h1>Hello with from main</h1>

            {mapListItems()}



        </div>
    )
}

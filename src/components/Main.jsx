import React, { useState, useEffect } from 'react'

import ListItem from "./ListItem"
import eventsData from "./../assets/data/events.js"

import "../styles/Main.scss"


const placeholdImage = "https://images.pexels.com/photos/545014/pexels-photo-545014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

export default function Main() {


    const [events, setEvents] = useState([])


    // set data on component load
    useEffect(() => {

        setEvents(() => eventsData)

    }, [])


    // map through list items
    const mapListItems = () => events.map((event) => {
        console.log(event)
        //
        return <ListItem event={event} key={event.id} url={placeholdImage} />
    })



    return (
        <div className="main">

            <h5>UserData</h5>
            {mapListItems()}

        </div>
    )
}

import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {

    const response = useLoaderData();

    // if (response.isError) {
    //     return <p>{response.message}</p>
    // }

    const events = response.events;

    return (
        <>
            {<EventsList events={events} />}
        </>
    )
}

export default EventsPage;

export async function loader() {
    /* we cant use react hooks in loader functions but we can use everything else
    in javascript and default browser setting in loaders */

    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // return { isError: true, message: "Could not fetch events." };
        throw new Error("Could not fetch events.");
        // throw { message : "We could throw error this way too"}

    } else {
        return response;
    }
}
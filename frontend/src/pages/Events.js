import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
    const events = useLoaderData();

    return (
        <>
            {<EventsList events={events} />}
        </>
    )
}

export default EventsPage;

export async function loader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // I will look at this later
    } else {
        const responseData = await response.json();
        return responseData.events;
    }
}
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";


import EventsList from "../components/EventsList";

function EventsPage() {

    const { events } = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents() {
    /* we cant use react hooks in loader functions but we can use everything else
    in javascript and default browser setting in loaders */

    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // return { isError: true, message: "Could not fetch events." };
        // throw { message : "We could throw error this way too"}

        // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
        //     status: 500,
        // });

        throw json(
            { message: "Could not fetch events." },
            {
                status: 500,
            }
        )

    } else {
        return response;
    }
}

export function loader() {

    return defer({
        events: loadEvents()
    });

}
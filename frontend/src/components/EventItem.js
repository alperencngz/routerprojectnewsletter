import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {

  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      /* the data we pass to this submit as the first parameter will be wrapped in a Form 
      component and we will be able to use it with request.formData() as in NewEventPage.js*/

      /* we can also use the second parameter as { method: "delete", action: "/somepath" } if
      our action will be defined on an another path, in this case it is defined in the same
      route () which this components belong-rendered in the end so we don't need it. Both 
      will be in the EventDetailPage.js*/
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

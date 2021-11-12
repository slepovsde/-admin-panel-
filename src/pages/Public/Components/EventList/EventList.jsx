import EventCard from "../EventCard/EventCard";
import { useEffect, useState, useMemo } from "react";
import { Row } from "react-bootstrap";
import EventService from "../../../../API/EventService";
import Circlespinner from "../UI/CircleSpinner/CircleSpinner";
import { useFetching } from "../../../../hooks/useFetching";
import Select from "../../Components/Select/Select";
import Search from "../../Components/Search/Search";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [fetchData, isEventsLoading, eventError] = useFetching(async () => {
    const events = await EventService.getAll();
    setEvents(events);
  });
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedEvents = useMemo(() => {
    if (selectedSort) {
      return [...events].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return events;
  }, [selectedSort, events]);

  const searchedEvents = useMemo(() => {
    return sortedEvents.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedEvents]);

  const sortEvents = (sort) => {
    setSelectedSort(sort);
  };
  return (
    <div>
      <div>
        <Select
          value={selectedSort}
          onChange={sortEvents}
          defaultValue="Сортировка"
          options={[
            { value: "date", name: "По дате" },
            { value: "title", name: "По названию" },
          ]}
        />
        <Search
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск"
        />
      </div>
      <Row xs={1} md={2} className="g-4">
        {eventError && <h1>{eventError}</h1>}
        {isEventsLoading ? (
          <Circlespinner></Circlespinner>
        ) : (
          searchedEvents.map((event) => {
            return (
              <EventCard
                title={event.title}
                description={event.description}
                tickets={event.tickets}
                date={event.date}
                id={event._id}
              />
            );
          })
        )}
      </Row>
    </div>
  );
};

export default EventList;

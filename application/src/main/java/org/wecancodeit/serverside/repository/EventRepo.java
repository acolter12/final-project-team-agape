package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Event;


import java.util.Optional;

public interface EventRepo extends CrudRepository<Event, Long> {

//    Optional<Event> findEventByLocation(String eventLocation);

}

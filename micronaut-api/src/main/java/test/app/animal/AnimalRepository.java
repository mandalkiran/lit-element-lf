package test.app.animal;

import io.micronaut.data.annotation.Repository;
import io.micronaut.data.repository.CrudRepository;

@Repository
public interface AnimalRepository extends CrudRepository<Animal, Long> { }
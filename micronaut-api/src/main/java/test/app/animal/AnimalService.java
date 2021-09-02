package test.app.animal;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class AnimalService {

    @Inject
    private AnimalRepository animalRepository;

    public Iterable<Animal> findAll() {
        return animalRepository.findAll();
    }

    public Animal add(Animal animal) {
        return animalRepository.save(animal);
    }
}

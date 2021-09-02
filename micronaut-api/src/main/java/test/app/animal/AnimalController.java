
package test.app.animal;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.*;

import javax.inject.Inject;

@Controller("/api/animals")
public class AnimalController {

    @Inject
    private AnimalService animalService;

    @Get("/")
    public HttpResponse findAll() {
        return HttpResponse.ok(animalService.findAll());
    }

    @Post("/")
    public HttpResponse add(@Body Animal animal) {
        return HttpResponse.ok(animalService.add(animal));
    }
}

package test.app.task;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.*;

import javax.inject.Inject;

@Controller("/api/tasks")
public class TaskController {

    @Inject
    private TaskService taskService;

    @Get("/")
    public HttpResponse findAll() {
        return HttpResponse.ok(taskService.findAll());
    }

    @Post("/")
    public HttpResponse add(@Body Task task) {
        return HttpResponse.ok(taskService.add(task));
    }

    @Delete("/{id}")
    public HttpResponse delete( Long id ) {
        return HttpResponse.ok(taskService.delete(id));
    }
}
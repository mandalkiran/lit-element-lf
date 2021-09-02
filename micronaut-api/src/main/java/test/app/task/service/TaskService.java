package test.app.task;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class TaskService {

    @Inject
    private TaskRepository taskRepository;

    public Iterable<Task> findAll() {
        return taskRepository.findAll();
    }

    public Task add(Task task) {
        return taskRepository.save(task);
    }

    public Boolean delete(Long taskId) {
        try{
            taskRepository.deleteById(taskId);
            return true;
        } catch(Exception e) {
            return false;
        }
    }
}

import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "done",
  pure: true
})

export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {
    console.log('selected task: ', args[1]);
    var desireDoneState = args[0];
    if(desireDoneState === "done") {
      return input.filter(function(task) {
        return task.done;
      });
    } else if(desireDoneState === "notDone") {
      return input.filter(function(task) {
        return !task.done;
      });
    } else {
      return input;
    }
  }
}

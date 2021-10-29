export class Task {
    taskId : number;
    taskName: string;
    project : string;
    comments : string;
    constructor () {
      this.taskName = '';
      this.project = '';
      this.comments = '';
    }
}

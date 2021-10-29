import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from './../class/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  displayedColumns: string[] = ['taskId', 'taskName', 'project', 'comments', 'edit', 'delete'];
  dataSource: MatTableDataSource<any>;
  task = new Task();
  listTask = [];
  taskid: string;
  newTask: any;
  tempTask= [];
  projects = ['Angular', 'Java', '.NET'];

  constructor(private modalService: NgbModal) {
    this.task = new Task();
    this.task.taskId ='1';
    this.task.taskName = "Task Name 1";
    this.task.comments ="Task Name 1";
    this.task.project ="Java";
    this.listTask.push(this.task);
    this.task = new Task();
    this.task.taskId ='2';
    this.task.taskName = "Task Name 2";
    this.task.comments ="Task Name 2";
    this.task.project ="Angular";
    this.listTask.push(this.task);
    this.dataSource = new MatTableDataSource(this.listTask);
  }

  deleteTask(index) {
    this.listTask.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.listTask);
  }
  ngOnInit(): void {
  }
  editTask(index, content) {
    this.tempTask = JSON.parse(JSON.stringify(this.listTask));
    let arr = this.listTask.splice(index, 1);
    this.newTask = arr[0];
    this.modalService.open(content, { centered: true });
  }
  modalDismiss(){
    if (this.tempTask.length) {
      this.listTask = this.tempTask;
      this.dataSource = new MatTableDataSource(this.listTask);
      this.tempTask = [];
    }
    this.modalService.dismissAll();
    this.newTask = new Task();
  }
  addTask() {
    this.modalService.dismissAll();
    this.listTask.push(this.newTask);
    this.dataSource = new MatTableDataSource(this.listTask);
    this.newTask = new Task();
  }
  open(content) {
    this.newTask = new Task();
    this.modalService.open(content, { centered: true });
  }
}

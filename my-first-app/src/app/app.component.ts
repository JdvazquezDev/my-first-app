import { DataService } from './data.service';
import { Component } from "@angular/core";



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "John Carter";
  age: number = 28;
  posts = [];
  users = ["Ryan", "John", "Pepe"];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(dataService => {
      this.posts = dataService;
    });
  }

  deleteUser(user) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = "";
    newUser.focus();

    return false;
  }


}

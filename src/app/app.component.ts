import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "my-dream-app";

  model = {
    left: true,
    middle: false,
    right: false
  };
}

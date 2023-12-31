import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Trip } from "../models/trip";

@Component({
  selector: "app-trip-card",
  templateUrl: "./trip-card.component.html",
  styleUrls: ["./trip-card.component.css"]
})
export class TripCardComponent implements OnInit {

  @Input("trip") trip: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    // localStorage.setItem("tripLength", trip.length);
    // localStorage.setItem("tripStart", trip.start.toString());
    // localStorage.setItem("tripResort", trip.resort);
    // localStorage.setItem("tripPerPerson", trip.perPerson);
    // localStorage.setItem("tripImage", trip.image);
    // localStorage.setItem("tripDescription", trip.description);
    this.router.navigate(["edit-trip"]);
  }
}
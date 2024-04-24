import { Airplane } from "../airplane/airplane";
import { Seat } from "../airplane/seat";
import { dateTime } from "../tickets/date";
import { Ticket } from "../tickets/ticket";
export class Flight {
  private flight_number: string;
  private take_off_date: dateTime;
  private airplane: Airplane;
  private seat_number: string;
  private crew_schedule: boolean;
  constructor(flight_number: string, take_off_date: dateTime) {
    this.flight_number = flight_number;
    this.take_off_date = take_off_date;
  }
  public assignSeat(ticket: Ticket): void {
    this.airplane.getSeat().forEach((seat: Seat) => {
      if (seat.getSeatType() == ticket.getSeat().getSeatType()) {
        this.seat_number = seat.getSeatNumber();
      }
    });
  }
  public assignAirplane(airplane: Airplane) {
    this.airplane = airplane;
  }
  public getSeat(): string {
    return this.seat_number;
  }
  public setCrewSchedule(status: boolean): void {
    this.crew_schedule = status;
  }
  public getFlightNumber(): string {
    return this.flight_number;
  }
  public getTakeOffDate(): dateTime {
    return this.take_off_date;
  }
  public getCrewSchedule(): boolean {
    return this.crew_schedule;
  }
  public getAirplane(): Airplane {
    return this.airplane;
  }
}

// import { TotalPrice } from "@autospacce/util";

type TotalPrice = {
  parkingCharge: number
  valetChargeDropoff: number
  valetChargePickup: number
}

import { CreateBookingInput } from "src/models/bookings/graphql/dtos/create-booking.input"

export class CreateStripeDto {
  uid: string
  totalPriceObj: TotalPrice
  bookingData: CreateBookingInput
}

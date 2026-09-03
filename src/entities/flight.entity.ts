import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Airline } from './airline.entity';
import { Airplane } from './airplane.entity';
import { Airport } from './airport.entity';
import { Reservation } from './reservation.entity';

@Entity('flights')
export class Flight {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Airline, (airline) => airline.flights, { nullable: false })
    @JoinColumn({ name: 'airline_id' })
    airline!: Airline;

    @ManyToOne(() => Airplane, (airplane) => airplane.flights, { nullable: false })
    @JoinColumn({ name: 'airplane_id' })
    airplane!: Airplane;

    @ManyToOne(() => Airport, (airport) => airport.flights, { nullable: false })
    @JoinColumn({ name: 'airport_in_id' })
    airport_in!: Airport;

    @ManyToOne(() => Airport, (airport) => airport.flights_out, { nullable: false })
    @JoinColumn({ name: 'airport_out_id' })
    airport_out!: Airport;

    @ManyToOne(() => Reservation, (reservation) => reservation.flights)
    @JoinColumn({ name: 'flight_id' })
    reservation!: Reservation;

    @Column({ name: 'flight_number' })
    flightNumber!: string;

    @Column({ name: 'flight_order' })
    flightOrder!: string;

    @Column({ name: 'departure_date' })
    departureDate!: Date;

    @Column({ name: 'arrived_date', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    arrivedDate!: Date;

    @Column()
    capacity!: number;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    uodatedAt!: Date;
}

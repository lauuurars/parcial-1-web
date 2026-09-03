import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Passenger } from './passenger.entity';
import { Flight } from './flight.entity';

@Entity('reservations')
export class Reservation {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: 'reservation_code' })
    reservationCode!: string;

    @Column({ name: 'purchase_date', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    purchaseDate!: Date;

    @ManyToOne(() => Passenger, (passenger) => passenger.reservations)
    @JoinColumn({ name: 'passenger_id' })
    passenger!: Passenger;

    @OneToMany(() => Flight, (flight) => flight.reservation)
    flights!: Flight[];
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Reservation } from './reservation.entity';

@Entity('passengers')
export class Passenger {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    fullname!: string;

    @Column({ name: 'document_number' })
    documentNumber!: number;

    @Column({ name: 'document_type' })
    documentType!: string;

    @Column()
    email!: string;

    @Column({ name: 'phone_number' })
    phoneNumber!: string;

    @Column({ name: 'register_date', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    registerDate!: string;

    @Column({ name: 'status_active' })
    statusActive!: boolean;

    @OneToMany(() => Reservation, (reservation) => reservation.passenger)
    reservations!: Reservation[];
}

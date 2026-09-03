import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Flight } from './flight.entity';

@Entity('airports')
export class Airport {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    city!: string;

    @Column()
    country!: string;

    @Column()
    status_active!: boolean;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt!: Date;

    @OneToMany(() => Flight, (flight) => flight.airport_in)
    flights!: Flight[];

    @OneToMany(() => Flight, (flight) => flight.airport_out)
    flights_out!: Flight[];
}

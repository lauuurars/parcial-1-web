import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Flight } from './flight.entity';

@Entity('airlines')
export class Airline {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    origin_country!: string;

    @Column({ name: 'IATA_code' })
    IATACode!: string;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt!: Date;

    @OneToMany(() => Flight, (flight) => flight.airline)
    flights!: Flight[];
}

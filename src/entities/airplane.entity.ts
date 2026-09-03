import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Flight } from './flight.entity';

@Entity('airplanes')
export class Airplane {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    model!: string;

    @Column({ name: 'registration_number' })
    registrationNumber!: number;

    @Column()
    capacity!: number;

    @Column({ name: 'incorporation_date' })
    incorporationDate!: Date;

    @Column({ name: 'updated_at' })
    updatedAt!: Date;

    @OneToMany(() => Flight, (flight) => flight.airplane)
    flights!: Flight[];
}

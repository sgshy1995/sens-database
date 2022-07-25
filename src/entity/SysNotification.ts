import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('sys_notifications')
export class SysNotification {
    @PrimaryColumn('varchar')
    id: string;

    @Column('varchar')
    title: string;

    @Column('varchar')
    content: string;

    @Column('timestamp')
    publish_time: Date;

    @Column('int')
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
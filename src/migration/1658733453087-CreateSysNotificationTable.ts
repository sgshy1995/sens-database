import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSysNotificationTable1658733453087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'sys_notifications',
            columns: [
                /* 通知id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '通知id'
                },
                /* 通知标题 */
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                    comment: '通知标题'
                },
                /* 通知内容 */
                {
                    name: 'content',
                    type: 'varchar',
                    isNullable: false,
                    comment: '通知内容'
                },
                /* 发布时间 */
                {
                    name: 'publish_time',
                    type: 'timestamp',
                    isNullable: false,
                    comment: '发布时间'
                },
                /* 通知状态 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '信息状态'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()'
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sys_notifications');
        console.log('回滚 sys_notifications 表 完成')
    }

}

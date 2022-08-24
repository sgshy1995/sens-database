import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateNotificationTable1658733707987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'notifications',
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
                /* 用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 通知类型 */
                {
                    name: 'notification_type',
                    type: 'int',
                    isNullable: false,
                    comment: '通知类型'
                },
                /* 系统通知id */
                {
                    name: 'sys_notification_id',
                    type: 'varchar',
                    isNullable: true,
                    comment: '系统通知id'
                },
                /* 通知标题 */
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: true,
                    comment: '通知标题'
                },
                /* 通知内容 */
                {
                    name: 'content',
                    type: 'varchar',
                    isNullable: true,
                    comment: '通知内容'
                },
                /* 发布时间 */
                {
                    name: 'publish_time',
                    type: 'timestamp',
                    isNullable: false,
                    comment: '发布时间'
                },
                /* 阅读状态 */
                {
                    name: 'read',
                    type: 'int',
                    isNullable: false,
                    comment: '阅读状态'
                },
                /* 通知状态 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '通知状态'
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
        await queryRunner.dropTable('notifications');
        console.log('回滚 notifications 表 完成')
    }

}

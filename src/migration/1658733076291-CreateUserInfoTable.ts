import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserInfoTable1658733076291 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user_infos',
            columns: [
                /* 信息id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '信息id'
                },
                /* 用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 积分 */
                {
                    name: 'integral',
                    type: 'int',
                    isNullable: false,
                    comment: '积分'
                },
                /* 余额 */
                {
                    name: 'balance',
                    type: 'varchar',
                    isNullable: false,
                    comment: '余额'
                },
                /* 年龄 */
                {
                    name: 'age',
                    type: 'int',
                    isNullable: true,
                    comment: '年龄'
                },
                /* 既往伤病史 */
                {
                    name: 'injury_history',
                    type: 'varchar',
                    isNullable: true,
                    comment: '既往伤病史'
                },
                /* 近期伤病描述 */
                {
                    name: 'injury_recent',
                    type: 'varchar',
                    isNullable: true,
                    comment: '近期伤病描述'
                },
                /* 出院小结 */
                {
                    name: 'discharge_abstract',
                    type: 'varchar',
                    isNullable: true,
                    comment: '出院小结'
                },
                /* 影像资料 */
                {
                    name: 'image_data',
                    type: 'varchar',
                    isNullable: true,
                    comment: '影像资料'
                },
                /* 信息状态 */
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
        await queryRunner.dropTable('user_infos');
        console.log('回滚 user_infos 表 完成')
    }

}

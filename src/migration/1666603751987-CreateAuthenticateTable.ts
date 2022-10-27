import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAuthenticateTable1666603751987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'authenticates',
            columns: [
                /* 认证id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '认证id'
                },
                /* 用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 认证名 */
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                    comment: '认证名'
                },
                /* 认证联系电话 */
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: false,
                    comment: '认证联系电话'
                },
                /* 认证性别 1 男 0 女 */
                {
                    name: 'gender',
                    type: 'int',
                    isNullable: false,
                    comment: '认证性别'
                },
                /* 认证机构组织 */
                {
                    name: 'organization',
                    type: 'varchar',
                    isNullable: false,
                    comment: '认证机构组织'
                },
                /* 身份证正面照 */
                {
                    name: 'identity_card_front',
                    type: 'varchar',
                    isNullable: false,
                    comment: '身份证正面照'
                },
                /* 身份证反面照 */
                {
                    name: 'identity_card_back',
                    type: 'varchar',
                    isNullable: false,
                    comment: '身份证反面照'
                },
                /* 执业证照 */
                {
                    name: 'practicing_certificate',
                    type: 'varchar',
                    isNullable: false,
                    comment: '执业证照'
                },
                /* 工作证照 */
                {
                    name: 'employee_card',
                    type: 'varchar',
                    isNullable: false,
                    comment: '工作证照'
                },
                /* 认证简介 */
                {
                    name: 'fcc',
                    type: 'varchar',
                    isNullable: false,
                    comment: '认证简介'
                },
                /* 审核意见 */
                {
                    name: 'audit_info',
                    type: 'varchar',
                    isNullable: true,
                    comment: '审核意见'
                },
                /* 有效期 */
                {
                    name: 'validity_time',
                    type: 'datetime',
                    isNullable: true,
                    comment: '有效期'
                },
                /* 认证状态 3 审核通过 2 待审核 1 驳回 0 失效 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '认证状态'
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
        await queryRunner.dropTable('authenticates');
        console.log('回滚 authenticates 表 完成')
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTable1658731476578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                /* 用户id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 用户名 */
                {
                    name: 'username',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户名'
                },
                /* 用户姓名 */
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: true,
                    comment: '用户姓名'
                },
                /* 用户头像 */
                {
                    name: 'avatar',
                    type: 'varchar',
                    isNullable: true,
                    comment: '用户头像'
                },
                /* 用户背景 */
                {
                    name: 'background',
                    type: 'varchar',
                    isNullable: true,
                    comment: '用户背景'
                },
                /* 用户性别 */
                {
                    name: 'gender',
                    type: 'int',
                    isNullable: true,
                    comment: '用户性别'
                },
                /* 用户手机号 */
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户手机号'
                },
                /* 用户身份 */
                {
                    name: 'identity',
                    type: 'int',
                    isNullable: false,
                    comment: '用户身份'
                },
                /* 用户认证 2 已通过认证 1 认证审核中 0 未通过认证 */
                {
                    name: 'authenticate',
                    type: 'int',
                    isNullable: false,
                    comment: '用户认证'
                },
                /* 是否有讲师权限 1 是 0 否 */
                {
                    name: 'if_lecture_auth',
                    type: 'int',
                    isNullable: false,
                    comment: '是否有讲师权限'
                },
                /* 用户微信唯一标识 */
                {
                    name: 'wx_unionid',
                    type: 'varchar',
                    isNullable: true,
                    comment: '用户微信唯一标识'
                },
                /* 用户微信昵称 */
                {
                    name: 'wx_nickname',
                    type: 'varchar',
                    isNullable: true,
                    comment: '用户微信昵称'
                },
                /* 最近登录时间 */
                {
                    name: 'recent_login_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '最近登录时间'
                },
                /* 是否为admin权限 1 是 0 否 */
                {
                    name: 'is_admin',
                    type: 'int',
                    isNullable: false,
                    comment: '是否为admin权限'
                },
                /* 冻结原因 */
                {
                    name: 'freeze_reason',
                    type: 'varchar',
                    isNullable: true,
                    comment: '冻结原因'
                },
                /* 用户状态 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '用户状态'
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
        await queryRunner.dropTable('users');
        console.log('回滚 users 表 完成')
    }

}

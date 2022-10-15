import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAddressTable1665724274597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'addresses',
            columns: [
                /* 收货地址id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '收货地址id'
                },
                /* 用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 省编号 */
                {
                    name: 'province_code',
                    type: 'varchar',
                    isNullable: false,
                    comment: '省编号'
                },
                /* 市编号 */
                {
                    name: 'city_code',
                    type: 'varchar',
                    isNullable: false,
                    comment: '市编号'
                },
                /* 区县编号 */
                {
                    name: 'area_code',
                    type: 'varchar',
                    isNullable: false,
                    comment: '区县编号'
                },
                /* 省市区文本 */
                {
                    name: 'detail_text',
                    type: 'varchar',
                    isNullable: false,
                    comment: '省市区文本'
                },
                /* 全部文本 */
                {
                    name: 'all_text',
                    type: 'varchar',
                    isNullable: false,
                    comment: '全部文本'
                },
                /* 联系电话 */
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: false,
                    comment: '联系电话'
                },
                /* 联系人 */
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                    comment: '联系人'
                },
                /* 标签 */
                {
                    name: 'tag',
                    type: 'varchar',
                    isNullable: true,
                    comment: '标签'
                },
                /* 收货地址状态 1 正常 0 删除 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '收货地址状态'
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
        await queryRunner.dropTable('addresses');
        console.log('回滚 addresses 表 完成')
    }

}

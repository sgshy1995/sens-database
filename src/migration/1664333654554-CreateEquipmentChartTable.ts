import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEquipmentChartTable1664333654554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'equipment_charts',
            columns: [
                /* 商品id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '商品id'
                },
                 /* 用户id */
                 {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                 /* 器材id */
                 {
                    name: 'equipment_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '器材id'
                },
                 /* 型号id */
                 {
                    name: 'equipment_model_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '型号id'
                },
                /* 添加数量 */
                {
                    name: 'add_num',
                    type: 'int',
                    isNullable: false,
                    comment: '添加数量'
                },
                /* 商品状态 1 正常 0 删除 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '商品状态'
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
        await queryRunner.dropTable('equipment_charts');
        console.log('回滚 equipment_charts 表 完成')
    }

}

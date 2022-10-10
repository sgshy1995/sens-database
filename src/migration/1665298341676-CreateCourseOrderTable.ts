import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCourseOrderTable1665298341676 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'course_orders',
            columns: [
                /* 订单id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '订单id'
                },
                 /* 用户id */
                 {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                 /* 课程id集合 逗号隔开 */
                 {
                    name: 'course_ids',
                    type: 'text',
                    isNullable: false,
                    comment: '课程id集合'
                },
                /* 课程类型集合 1 直播课 0 视频课 逗号隔开 */
                {
                    name: 'course_types',
                    type: 'varchar',
                    isNullable: false,
                    comment: '课程类型集合'
                },
                /* 购买价格集合 逗号隔开 */
                {
                    name: 'order_prices',
                    type: 'varchar',
                    isNullable: false,
                    comment: '购买价格集合'
                },
                /* 订单号（28位）编号规则：系统ID（6位）+系统交易日期（8位：YYYYMMDD)+系统交易时间戳(6位：HHmmss)+订单序号（8位，保证当天唯一） */
                {
                    name: 'order_no',
                    type: 'varchar',
                    isNullable: false,
                    comment: '订单号'
                },
                /* 下单时间 */
                {
                    name: 'order_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '下单时间'
                },
                /* 支付流水号（32位）编号规则：系统ID（6位）+系统交易日期（8位：YYYYMMDD)+系统交易时间戳(6位：HHmmss)+支付流水序号（12位，保证当天唯一） */
                {
                    name: 'payment_no',
                    type: 'varchar',
                    isNullable: false,
                    comment: '支付流水号'
                },
                /* 支付类型 0 余额支付 1 微信支付 2 支付宝支付 3 Apple支付 */
                {
                    name: 'payment_type',
                    type: 'int',
                    isNullable: false,
                    comment: '支付类型'
                },
                /* 支付时间 */
                {
                    name: 'payment_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '支付时间'
                },
                /* 支付金额 */
                {
                    name: 'payment_num',
                    type: 'varchar',
                    isNullable: false,
                    comment: '支付金额'
                },
                /* 订单状态 2 已完成 1 待支付 0 取消/关闭 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '订单状态'
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
        await queryRunner.dropTable('course_orders');
        console.log('回滚 course_orders 表 完成')
    }

}

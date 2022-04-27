import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1651047488102 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photo" RENAME COLUMN "name" TO "title"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

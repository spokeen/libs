import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1651047734150 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photo" RENAME COLUMN "title" TO "name"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

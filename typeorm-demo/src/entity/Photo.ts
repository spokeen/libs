import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
} from "typeorm";
import { PhotoMetadata } from "./PhotoMetadata";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 100,
  })
  title: string;
  @Column("text")
  description: string;
  @Column()
  filename: string;
  @Column("double")
  views: number;
  @Column()
  isPublished: boolean;
  @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo)
  metadata: PhotoMetadata;
}

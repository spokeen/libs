import { AppDataSource } from "../data-source";
import { Photo } from "../entity/Photo";

export default async function () {
  const savedPhotos = await AppDataSource.manager.find(Photo);
  console.log("All photos from the db: ", savedPhotos);
}

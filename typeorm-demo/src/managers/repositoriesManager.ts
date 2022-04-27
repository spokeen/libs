import { AppDataSource } from "../data-source";
import { Photo } from "../entity/Photo";

export default async function () {
  const photoRepository = AppDataSource.getRepository(Photo);
  // 查询数据
  const allPhotos = await photoRepository.find();
  console.log("All photos from the db: ", allPhotos);

  const firstPhoto = await photoRepository.findOneBy({
    id: 1,
  });
  console.log("First photo from the db: ", firstPhoto);

  const meAndBearsPhoto = await photoRepository.findOneBy({
    name: "Me and Bears",
  });
  console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

  const allViewedPhotos = await photoRepository.findBy({ views: 1 });
  console.log("All viewed photos: ", allViewedPhotos);

  const allPublishedPhotos = await photoRepository.findBy({
    isPublished: true,
  });
  console.log("All published photos: ", allPublishedPhotos);

  const [photos, photosCount] = await photoRepository.findAndCount();
  console.log("All photos: ", photos);
  console.log("Photos count: ", photosCount);

  // 更新数据
  const photoToUpdate = await photoRepository.findOneBy({
    id: 1,
  });
  photoToUpdate.name = "Me, my friends and polar bears";
  await photoRepository.save(photoToUpdate);

  // 删除数据
  const photoToRemove = await photoRepository.findOneBy({
    id: 1,
  });
  await photoRepository.remove(photoToRemove);
}

import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";
import { entityManager, repositoriesManager } from "./managers";
const process = require("process");

console.log(process.cwd());
AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");

    console.log(await AppDataSource.query("SELECT name FROM photo"));
    // const user = createUser();
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
    // const users = await AppDataSource.manager.find(User);
    // console.log("Loaded users: ", users);

    // // 插入一条数据
    // let photo = createPhoto();
    // await AppDataSource.manager.save(photo);
    // console.log("Photo has been saved. Photo id is", photo.id);
    // //
    // entityManager();

    // repositoriesManager();

    // await createPhotoMetadata();
  })
  .catch((error) => console.log(error));

// function createPhoto(): Photo {
//   let photo = new Photo();
//   photo.title = "Me and Bears";
//   photo.description = "I am near polar bears";
//   photo.filename = "photo-with-bears.jpg";
//   photo.views = 1;
//   photo.isPublished = true;
//   return photo;
// }

// function createUser(): User {
//   const user = new User();
//   user.firstName = "Timber";
//   user.lastName = "Saw";
//   user.age = 25;
//   return user;
// }

// async function createPhotoMetadata() {
//   // create a photo
//   const photo = new Photo();
//   photo.title = "Me and Bears";
//   photo.description = "I am near polar bears";
//   photo.filename = "photo-with-bears.jpg";
//   photo.views = 1;
//   photo.isPublished = true;

//   // create a photo metadata
//   const metadata = new PhotoMetadata();
//   metadata.height = 640;
//   metadata.width = 480;
//   metadata.compressed = true;
//   metadata.comment = "cybershoot";
//   metadata.orientation = "portrait";
//   metadata.photo = photo; // this way we connect them

//   // get entity repositories
//   const photoRepository = AppDataSource.getRepository(Photo);
//   const metadataRepository = AppDataSource.getRepository(PhotoMetadata);

//   // first we should save a photo
//   await photoRepository.save(photo);

//   // photo is saved. Now we need to save a photo metadata
//   await metadataRepository.save(metadata);

//   // done
//   console.log(
//     "Metadata is saved, and the relation between metadata and photo is created in the database too"
//   );
// }

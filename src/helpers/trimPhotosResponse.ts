import { PhotosResponse, TrimmedPhotosResponse } from "../models/PhotosResponse";

const trimPhotosResponse = (photosResponse: PhotosResponse): TrimmedPhotosResponse => {
    return {
        photos: photosResponse.photos.map((photo) => {return {
            id: photo.id,
            sol: photo.sol,
            earth_date: photo.earth_date,
            img_src: photo.img_src
        }})
    }
}

export default trimPhotosResponse;
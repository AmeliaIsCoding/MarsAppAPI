import trimPhotosResponse from "../helpers/trimPhotosResponse";
import isCameraValid from "../helpers/validateCamera";
import { Camera } from "../models/Camera";
import { PhotosResponse } from "../models/PhotosResponse";
import { Rover } from "../models/Rover";

const apiKey = "jK1FXMLG8SI1sZmjf7V9rbflBnMrQ8diZpgUdL26";

const getPhotos = async (rover: Rover, camera: Camera) => {
  if (isCameraValid(camera, rover)) {
  try {
    const nasaResponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=${camera}&api_key=${apiKey}`, {method: 'GET'});
    const nasaResponseJson = await nasaResponse.json() as PhotosResponse;
    return trimPhotosResponse(nasaResponseJson);
  }
  catch (error) {
    return `error: ${error}`;
  }}
  else {
    return 'error: invalid camera and rover combination'
  }
};

export default getPhotos;
 
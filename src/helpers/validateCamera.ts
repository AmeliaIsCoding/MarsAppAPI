import { Camera } from "../models/Camera";
import { Rover } from "../models/Rover"; 
import { RoversResponse } from "../models/RoversResponse";
import getRovers from "../routes/rovers";

export const getRoverCameras = async (): Promise<{rover: Rover, cameras: Camera[]}[]> => {
    const roversResponse = (await getRovers()) as RoversResponse;
    return roversResponse.rovers.map((rover) => {return {rover: rover.name, cameras: rover.cameras.map((camera) => {return camera.name})}});
};
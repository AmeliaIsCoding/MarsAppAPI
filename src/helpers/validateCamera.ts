import { Camera } from "../models/Camera";
import { Rover } from "../models/Rover"; 
const isCameraValid = (camera: Camera, rover: Rover): boolean => {
    const validCameras = (camera: Camera, rover: Rover): Camera[] => {
    switch (rover) {
        case "Curiosity":
            return ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];
        case "Opportunity":
            return ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];
        case "Spirit":
            return ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];
        default:
            return [];
    }}
    return validCameras(camera, rover).includes(camera);
    }

export default isCameraValid;
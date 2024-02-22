import { Camera } from "../models/Camera";
import { Rover } from "../models/Rover"; 

const roverCameras: Record<Rover, Camera[]> = {
    "Curiosity": ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
    "Opportunity": ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
    "Spirit": ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']
}

const isCameraValid = (camera: Camera, rover: Rover): boolean => (
    roverCameras[rover].includes(camera)
)

export default isCameraValid;
import { ProjectData } from "../../../components/Projects/ProjectData";
export default function handler(req, res) {
    console.log(ProjectData);
    res.status(200).json(ProjectData);
}
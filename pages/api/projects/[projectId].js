import { ProjectData } from "../../../components/Projects/ProjectData";

export default function handler({ query: { projectId } }, res) {
    //   const { propertyId } = req.query;
      const project = ProjectData.find((project) => project.id === projectId);
      res.status(200).json(project);
    
    }
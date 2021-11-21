
const projectData = [{
    id: "qtax-multiservices",
    title: "Qtax Multiservices",
    url: "https://www.qtaxmultiservices.com/",
    
}]
export default function handler({ query: { projectId } }, res) {
  //   const { propertyId } = req.query;
  const property = projectData.find((project) => project.id === projectId);
  res.status(200).json(project);
}

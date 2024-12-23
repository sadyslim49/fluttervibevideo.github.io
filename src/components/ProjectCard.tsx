import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    budget: number;
    submissions: number;
    status: string;
    deadline: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "review":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Link to={`/project/${project.id}`}>
      <Card className="bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-white">{project.title}</CardTitle>
            <Badge className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-gray-300">
            <div className="flex justify-between">
              <span>Budget:</span>
              <span>${project.budget}</span>
            </div>
            <div className="flex justify-between">
              <span>Submissions:</span>
              <span>{project.submissions}</span>
            </div>
            <div className="flex justify-between">
              <span>Deadline:</span>
              <span>{new Date(project.deadline).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  category: string;
  description?: string;          
  image: string;
  year?: string;
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Card
      className="
        group h-full overflow-hidden transition-all duration-300
        hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1
        border border-border bg-card text-card-foreground
      "
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={`${project.title} – ${project.category} project`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg leading-tight line-clamp-2">
            {project.title}
          </CardTitle>

          <span className="inline-flex shrink-0 items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-950/60 dark:text-orange-300">
            {project.category}
          </span>
        </div>

        {/* Safely render description only if it exists */}
        {project.description && (
          <CardDescription className="mt-1.5 line-clamp-2">
            {project.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Clock, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  materials: number;
  lastUpdated: string;
  students?: number;
}

export const CourseCard = ({ title, description, materials, lastUpdated, students }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-surface to-surface-elevated border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-text-secondary line-clamp-2">
              {description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="text-xs">
            Active
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-text-secondary">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <FileText className="h-4 w-4" />
                <span>{materials} materials</span>
              </div>
              {students && (
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{students} students</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{lastUpdated}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 bg-surface-elevated hover:bg-accent border-border/70"
            >
              <FileText className="h-4 w-4 mr-2" />
              View Materials
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:bg-accent"
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
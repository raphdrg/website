import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Upload, Calendar, Clock, Calculator } from "lucide-react";

const materials = [
  {
    title: "Chapter 1: Complex Functions and Series",
    type: "PDF",
    size: "3.2 MB",
    uploadDate: "2024-01-12",
    downloads: 22,
  },
  {
    title: "Problem Set 1: Series Convergence",
    type: "PDF",
    size: "1.6 MB",
    uploadDate: "2024-01-15",
    downloads: 20,
  },
  {
    title: "Lecture Notes: Measure Theory Introduction",
    type: "PDF",
    size: "2.8 MB",
    uploadDate: "2024-01-18",
    downloads: 18,
  },
  {
    title: "Assignment 2: Complex Integration",
    type: "PDF",
    size: "2.1 MB",
    uploadDate: "2024-01-22",
    downloads: 19,
  },
];

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-surface-elevated">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4">
            <Calculator className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Analysis III</h1>
              <p className="text-lg text-primary-foreground/90 mt-2">
                Advanced mathematical analysis and complex functions
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <Badge variant="secondary" className="text-sm">
                  Winter 2024
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Materials */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-text-primary">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Course Materials
                  </CardTitle>
                  <Button variant="outline" size="sm" className="bg-surface-elevated hover:bg-accent border-border/70">
                    Sort by Topic
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {materials.map((material, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-surface hover:bg-accent transition-all duration-200 border border-border/30"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-text-primary">{material.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-text-secondary mt-1">
                            <span>{material.type} • {material.size}</span>
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {material.uploadDate}
                            </span>
                            <span>{material.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:bg-accent">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
                <CardTitle className="text-text-primary">Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Instructor:</span>
                  <span className="text-text-primary font-medium">Professor Johnson</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Credits:</span>
                  <span className="text-text-primary">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Prerequisites:</span>
                  <span className="text-text-primary">Analysis II</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Materials:</span>
                  <span className="text-text-primary">{materials.length} files</span>
                </div>
              </CardContent>
            </Card>

            {/* Topics Covered */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-text-primary">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Topics Covered
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Complex Functions",
                  "Series Convergence",
                  "Measure Theory",
                  "Integration Theory",
                  "Functional Analysis"
                ].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded bg-surface">
                    <span className="text-text-primary">{topic}</span>
                    <Badge variant="outline">Week {index + 1}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
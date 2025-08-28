import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Upload, Calendar, FolderPlus, ExternalLink } from "lucide-react";

const materials = [
  {
    title: "Mathematical Software Guide (MATLAB & Mathematica)",
    type: "PDF",
    size: "5.2 MB",
    uploadDate: "2024-01-08",
    downloads: 35,
    category: "Software"
  },
  {
    title: "Research Papers Collection - Control Theory",
    type: "ZIP",
    size: "12.4 MB",
    uploadDate: "2024-01-12",
    downloads: 18,
    category: "Research"
  },
  {
    title: "Study Tips for Advanced Mathematics",
    type: "PDF",
    size: "1.8 MB",
    uploadDate: "2024-01-15",
    downloads: 42,
    category: "Study Guide"
  },
  {
    title: "Online Resources and References",
    type: "PDF",
    size: "2.1 MB",
    uploadDate: "2024-01-18",
    downloads: 28,
    category: "References"
  },
  {
    title: "Career Paths in Applied Mathematics",
    type: "PDF",
    size: "3.6 MB",
    uploadDate: "2024-01-20",
    downloads: 31,
    category: "Career"
  },
];

const resources = [
  {
    title: "Khan Academy - Linear Algebra",
    description: "Free online courses and practice exercises",
    url: "https://khanacademy.org",
    type: "External"
  },
  {
    title: "MIT OpenCourseWare",
    description: "Free lecture notes and problem sets",
    url: "https://ocw.mit.edu",
    type: "External"
  },
  {
    title: "Wolfram Alpha",
    description: "Computational mathematics engine",
    url: "https://wolframalpha.com",
    type: "Tool"
  },
];

const ExtraMaterial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-surface-elevated">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4">
            <FolderPlus className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Extra Material</h1>
              <p className="text-lg text-primary-foreground/90 mt-2">
                Additional resources, study guides, and supplementary content
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <Badge variant="secondary" className="text-sm">
                  {materials.length} Resources Available
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  All Courses
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
            {/* Extra Materials */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-text-primary">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Available Materials
                </CardTitle>
                  <Button variant="outline" size="sm" className="bg-surface-elevated hover:bg-accent border-border/70">
                    Filter by Category
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
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-text-primary">{material.title}</h3>
                            <Badge variant="outline">{material.category}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-text-secondary">
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

            {/* External Resources */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-text-primary">
                  <ExternalLink className="h-5 w-5 mr-2 text-primary" />
                  External Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-surface hover:bg-accent transition-all duration-200 border border-border/30"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <ExternalLink className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-text-primary">{resource.title}</h3>
                            <Badge variant="outline">{resource.type}</Badge>
                          </div>
                          <p className="text-sm text-text-secondary">{resource.description}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:bg-accent">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
                <CardTitle className="text-text-primary">Material Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Software Guides", count: 1 },
                  { name: "Research Papers", count: 1 },
                  { name: "Study Guides", count: 1 },
                  { name: "References", count: 1 },
                  { name: "Career Resources", count: 1 }
                ].map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded bg-surface">
                    <span className="text-text-primary">{category.name}</span>
                    <Badge variant="outline">{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
                <CardTitle className="text-text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-surface-elevated hover:bg-accent border-border/70">
                  <FileText className="h-4 w-4 mr-2" />
                  Browse by Category
                </Button>
                <Button variant="outline" className="w-full justify-start bg-surface-elevated hover:bg-accent border-border/70">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  External Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraMaterial;
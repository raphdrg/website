import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Upload, Calendar, Clock, Book } from "lucide-react";

const materials = [
  {
    title: "Lecture 1: Introduction to Control Systems",
    type: "PDF",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    downloads: 28,
  },
  {
    title: "Problem Set 1: Basic Control Theory",
    type: "PDF", 
    size: "1.8 MB",
    uploadDate: "2024-01-18",
    downloads: 25,
  },
  {
    title: "Lab Assignment 1: MATLAB Basics",
    type: "ZIP",
    size: "4.2 MB", 
    uploadDate: "2024-01-20",
    downloads: 22,
  },
  {
    title: "Lecture 2: Transfer Functions",
    type: "PDF",
    size: "3.1 MB",
    uploadDate: "2024-01-22",
    downloads: 24,
  },
];

const announcements = [
  {
    title: "Midterm Exam Schedule",
    content: "The midterm exam will be held on February 15th, covering chapters 1-4.",
    date: "2024-01-25",
  },
  {
    title: "Office Hours Update",
    content: "Office hours this week will be moved to Thursday 2-4 PM.",
    date: "2024-01-23",
  },
];

const ControlSystems = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-surface-elevated">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4">
            <Book className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Control Systems I</h1>
              <p className="text-lg text-primary-foreground/90 mt-2">
                Fundamentals of control theory and system analysis
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <Badge variant="secondary" className="text-sm">
                  28 Students Enrolled
                </Badge>
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
                    Sort by Date
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
                  <span className="text-text-primary font-medium">Professor Smith</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Credits:</span>
                  <span className="text-text-primary">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Duration:</span>
                  <span className="text-text-primary">15 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Materials:</span>
                  <span className="text-text-primary">{materials.length} files</span>
                </div>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-text-primary">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Recent Announcements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="p-3 rounded-lg bg-surface border border-border/30">
                    <h4 className="font-medium text-text-primary mb-2">{announcement.title}</h4>
                    <p className="text-sm text-text-secondary mb-2">{announcement.content}</p>
                    <span className="text-xs text-text-secondary">{announcement.date}</span>
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

export default ControlSystems;
import { CourseCard } from "@/components/CourseCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Bell, TrendingUp, Users, FileText } from "lucide-react";

const courses = [
  {
    title: "Control Systems I",
    description: "Fundamentals of control theory, system analysis, and feedback control design for engineering applications.",
    materials: 12,
    lastUpdated: "2 days ago",
    students: 28,
  },
  {
    title: "Analysis III",
    description: "Advanced mathematical analysis including complex functions, series convergence, and measure theory.",
    materials: 18,
    lastUpdated: "1 week ago",
    students: 22,
  },
  {
    title: "Linear Algebra II",
    description: "Advanced topics in linear algebra including eigenvalues, vector spaces, and linear transformations.",
    materials: 15,
    lastUpdated: "3 days ago",
    students: 31,
  },
];

const recentActivity = [
  { type: "upload", content: "New lecture notes uploaded to Control Systems I", time: "2 hours ago" },
  { type: "assignment", content: "Assignment 3 due date extended for Analysis III", time: "1 day ago" },
  { type: "announcement", content: "Office hours updated for this week", time: "2 days ago" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-surface-elevated">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Welcome to Your Course Portal
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Access all your course materials, assignments, and resources in one organized platform
            </p>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <Badge variant="secondary" className="text-base px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                81 Active Students
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                <FileText className="h-4 w-4 mr-2" />
                45 Course Materials
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Courses Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-text-primary flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-primary" />
                  Your Courses
                </h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                Quick Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <p className="text-text-secondary">Active Courses</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">45</div>
                    <p className="text-text-secondary">Total Materials</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">81</div>
                    <p className="text-text-secondary">Total Students</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-text-primary">
                  <Bell className="h-5 w-5 mr-2 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-surface hover:bg-accent transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm text-text-primary">{activity.content}</p>
                      <p className="text-xs text-text-secondary">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-surface-elevated to-surface border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-text-primary">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-surface-elevated hover:bg-accent border-border/70">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload New Material
                </Button>
                <Button variant="outline" className="w-full justify-start bg-surface-elevated hover:bg-accent border-border/70">
                  <Bell className="h-4 w-4 mr-2" />
                  Send Announcement
                </Button>
                <Button variant="outline" className="w-full justify-start bg-surface-elevated hover:bg-accent border-border/70">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Students
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
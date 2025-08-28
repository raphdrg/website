import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Home, Calculator, TrendingUp, Library, FolderPlus } from "lucide-react";

const navigationItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/control-systems", label: "Control Systems I", icon: TrendingUp },
  { path: "/analysis", label: "Analysis III", icon: Calculator },
  { path: "/linear-algebra", label: "Linear Algebra II", icon: BookOpen },
  { path: "/extra-material", label: "Extra Material", icon: FolderPlus },
];

export const Navigation = () => {
  return (
    <nav className="border-b border-divider bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Library className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-text-primary">Course Portal</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-text-secondary hover:text-text-primary hover:bg-accent"
                      )
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
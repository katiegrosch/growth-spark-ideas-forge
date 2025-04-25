
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState } from "react";

interface IdeaCardProps {
  title: string;
  description: string;
  category: string;
}

export const IdeaCard = ({ title, description, category }: IdeaCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
            className={`transition-colors ${isFavorite ? "text-yellow-500" : "text-gray-400"}`}
          >
            <Star className="h-5 w-5" />
          </Button>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          Category: {category}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

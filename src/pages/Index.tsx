
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IdeaCard } from "@/components/IdeaCard";
import { plgIdeas } from "@/data/plgIdeas";
import { Sparkles } from "lucide-react";

const getRandomIdea = () => {
  const randomCategory = plgIdeas[Math.floor(Math.random() * plgIdeas.length)];
  const randomIdea = randomCategory.ideas[Math.floor(Math.random() * randomCategory.ideas.length)];
  return { ...randomIdea, category: randomCategory.category };
};

const Index = () => {
  const [currentIdeas, setCurrentIdeas] = useState([getRandomIdea()]);

  const generateNewIdea = () => {
    const newIdea = getRandomIdea();
    setCurrentIdeas([newIdea, ...currentIdeas].slice(0, 3));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background animate-gradient">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Product Led Growth Idea Generator
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Generate innovative PLG strategies for your product's growth
          </p>
          <Button
            onClick={generateNewIdea}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Generate New Idea
          </Button>
        </div>

        <div className="grid gap-6 max-w-2xl mx-auto">
          {currentIdeas.map((idea, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-1"
            >
              <IdeaCard
                title={idea.title}
                description={idea.description}
                category={idea.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { achievementInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: achievementInterface[];
}

function getIconForType(type: string) {
  switch (type) {
    case "Achievement":
      return Icons.star;
    case "Certification":
      return Icons.checkCircle;
    case "Involvement":
      return Icons.users;
    default:
      return Icons.star;
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "Achievement":
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    case "Certification":
      return "text-green-600 bg-green-50 border-green-200";
    case "Involvement":
      return "text-blue-600 bg-blue-50 border-blue-200";
    default:
      return "text-gray-600 bg-gray-50 border-gray-200";
  }
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {contributions.map((item, id) => {
        const IconComponent = getIconForType(item.type);
        const typeColor = getTypeColor(item.type);
        
        const CardContent = (
          <div className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground transition-all duration-200">
            {item.link && (
              <Icons.externalLink
                size={35}
                className="absolute bottom-3 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground"
              />
            )}
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6 sm:h-[200px]">
              <div className="space-y-3">
                <div className="flex flex-row justify-between items-start">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${typeColor}`}>
                    {item.type}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {item.year}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <IconComponent size={20} className="mt-0.5 flex-shrink-0" />
                  <h3 className="font-bold text-sm leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground flex space-x-1 items-center">
                    <Icons.work size={12} />
                    <span className="truncate">{item.organization}</span>
                  </p>
                  {item.location && (
                    <p className="text-xs text-muted-foreground">
                      📍 {item.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

        return item.link ? (
          <Link href={item.link} target="_blank" key={id}>
            {CardContent}
          </Link>
        ) : (
          <div key={id}>
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}
import { MapPin } from 'lucide-react';
import type { GetLocationDto } from '@api/model';

interface LocationCardProps {
  location: GetLocationDto;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 transition-colors hover:bg-accent/50">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold leading-none">{location.name}</h3>
          <p className="text-sm text-muted-foreground">ID: {location.id}</p>
          <p className="text-sm text-muted-foreground">
            Adresse-ID: {location.addressId}
          </p>
        </div>
      </div>
    </div>
  );
}

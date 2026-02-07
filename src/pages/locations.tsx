import { AlertCircle } from 'lucide-react';
import { useLocationControllerGetAllLocations } from '@api/locations/locations';
import { LocationCard } from '@features/locations/components/location-card';
import { LocationCardSkeleton } from '@features/locations/components/location-card-skeleton';

export default function LocationsPage() {
  const { data, isLoading, isError, error } =
    useLocationControllerGetAllLocations();

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Standorte</h1>
          <p className="text-muted-foreground">
            Verwalten Sie Ihre Standorte und deren Informationen.
          </p>
        </div>
      </div>

      {isLoading && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <LocationCardSkeleton key={i} />
          ))}
        </div>
      )}

      {isError && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <div>
              <h3 className="font-semibold text-destructive">
                Fehler beim Laden
              </h3>
              <p className="text-sm text-destructive/90">
                {error instanceof Error
                  ? error.message
                  : 'Die Standorte konnten nicht geladen werden.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {!isLoading && !isError && data?.data && data.data.length === 0 && (
        <div className="rounded-lg border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Noch keine Standorte vorhanden.
          </p>
        </div>
      )}

      {!isLoading && !isError && data?.data && data.data.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      )}
    </div>
  );
}

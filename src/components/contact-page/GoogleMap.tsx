
"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

interface GoogleMapProps {
  apiKey: string;
}

export function GoogleMap({ apiKey }: GoogleMapProps) {
  const position = { lat: 34.052235, lng: -118.243683 }; // Example: Los Angeles

  if (!apiKey) {
    return (
      <div className="w-full h-64 bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Google Maps API Key is missing.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-64 md:h-80">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={position}
          defaultZoom={12}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId="codecanvas_map" // Optional: for cloud-based map styling
        >
          <AdvancedMarker position={position} title={"CodeCanvas HQ"} />
        </Map>
      </APIProvider>
    </div>
  );
}

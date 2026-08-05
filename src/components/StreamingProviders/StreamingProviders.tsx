import type { StreamingProvider } from "../../types/streaming";

interface StreamingProvidersProps {
  providers: StreamingProvider[];
}

function StreamingProviders({ providers }: StreamingProvidersProps) {
  if (!providers.length) {
    return (
      <p className="streaming-providers__empty">
        Streaming availability not found
      </p>
    );
  }

  return (
    <div className="streaming-providers">
      <h4>Available on:</h4>

      <div className="streaming-providers__list">
        {providers.map((provider) => (
          <div
            key={provider.provider_name}
            className="streaming-provider"
          >
            {provider.logo_path && (
              <img
                src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                alt={provider.provider_name}
              />
            )}

            <span>{provider.provider_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StreamingProviders;
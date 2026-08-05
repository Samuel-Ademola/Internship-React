import type { StreamingProvider } from "../../types/streaming";

interface StreamingProvidersProps {
  providers: StreamingProvider[];
}

const providerLinks: Record<string, string> = {
  Netflix: "https://www.netflix.com",
  "Amazon Prime Video": "https://www.primevideo.com",
  "Prime Video": "https://www.primevideo.com",
  "Disney Plus": "https://www.disneyplus.com",
  "Disney+": "https://www.disneyplus.com",
  Hulu: "https://www.hulu.com",
  "Apple TV Plus": "https://tv.apple.com",
  "Apple TV": "https://tv.apple.com",
  Max: "https://www.max.com",
  "HBO Max": "https://www.max.com",
  "Paramount Plus": "https://www.paramountplus.com",
  "Paramount+": "https://www.paramountplus.com",
  Peacock: "https://www.peacocktv.com",
  Crunchyroll: "https://www.crunchyroll.com",
  YouTube: "https://www.youtube.com",
};

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
        {providers.map((provider) => {
          const link = providerLinks[provider.provider_name];

          const content = (
            <>
              {provider.logo_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                  alt={provider.provider_name}
                />
              )}

              <span>{provider.provider_name}</span>
            </>
          );

          return link ? (
            <a
              key={provider.provider_id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="streaming-provider"
            >
              {content}
            </a>
          ) : (
            <div
              key={provider.provider_id}
              className="streaming-provider"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StreamingProviders;
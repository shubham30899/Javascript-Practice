import { ErrorBoundary } from "react-error-boundary";

function BuggyComponent() {
  throw new Error("💥 Oops, I crashed!");
  return <div>Hello</div>;
}

// Custom fallback UI
function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function ReactErrorBoundary() {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={(error, info) => {
        console.error("Caught error:", error, info);
      }}
    >
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default ReactErrorBoundary;

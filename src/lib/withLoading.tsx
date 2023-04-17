import React from 'react';

export default function WithLoading<T>(LoadingComponent: React.FC, ResultComponent: React.FC<T>) {
  const Component: React.FC<{ loading: true } | (T & { loading?: boolean })> = props => {
    if (props.loading) return <LoadingComponent />;
    return <ResultComponent {...props} />;
  };

  return Component;
}

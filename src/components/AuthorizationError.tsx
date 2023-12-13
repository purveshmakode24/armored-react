import React from 'react';

type AuthorizationErrorProps = {};

const AuthorizationError = (props: AuthorizationErrorProps) => {
  return (
    <div>401: You do not have permission to view this content.</div>
  );
};

export default AuthorizationError;
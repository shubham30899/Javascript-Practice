function withAuth(WrappedComponent) {
  return function Authenticated(props) {
    // props.isLoggedIn = true; // pretend login check
    if (!props.isLoggedIn) {
      return <h2>Access Denied</h2>;
    }
    return <WrappedComponent {...props} />;
  };
}

function Dashboard() {
  return <h2>Welcome to your dashboard!</h2>;
}

const ProtectedDashboard = withAuth(Dashboard);

export default function HOC() {
  return <ProtectedDashboard isLoggedIn={false}/>;
}

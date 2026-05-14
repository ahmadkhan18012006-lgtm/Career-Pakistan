import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-page py-20">
          <div className="glass-card p-8 text-center">
            <h1 className="text-2xl font-black dark:text-white">Something went wrong</h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">Refresh the page or return to the home page.</p>
            <button type="button" className="btn-primary mt-5" onClick={() => window.location.assign("/")}>
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

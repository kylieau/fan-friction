export function YouScreen({ onShowTips }: { onShowTips: () => void }) {
  return (
    <div className="screen page">
      <div className="you-header">
        <span className="avatar" aria-hidden>K</span>
        <h1 className="page-title">You</h1>
      </div>
      <div className="card empty-card">
        <div className="card-title">Your plans and nights live here.</div>
        <div className="card-body">
          Up next, Your nights (with your real logs), team and sport filters, and plain stats arrive
          in step 5.
        </div>
      </div>
      <div className="settings">
        <div className="settings-heading">Settings</div>
        <button type="button" className="settings-row" onClick={onShowTips}>
          Show the three tips again
        </button>
      </div>
    </div>
  );
}

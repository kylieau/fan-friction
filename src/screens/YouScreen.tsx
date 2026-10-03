export function YouScreen({ onShowTips }: { onShowTips: () => void }) {
  return (
    <div className="screen page">
      <div className="you-header">
        <span className="avatar" aria-hidden>K</span>
        <h1 className="page-title">You</h1>
      </div>
      <div className="card empty-card">
        <div className="card-title">Your nights will live here.</div>
        <div className="card-body">Nights you mark "I was there" will collect here, along with plain stats about them.</div>
      </div>
      <div className="settings">
        <div className="settings-heading">Settings</div>
        <button type="button" className="settings-row" onClick={onShowTips}>
          Show the tips again
        </button>
      </div>
    </div>
  );
}

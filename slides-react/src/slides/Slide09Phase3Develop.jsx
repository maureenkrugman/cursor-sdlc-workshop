const Slide09Phase3Develop = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 3: Develop • 20 min</span>
    </div>
    <h2>
      Develop{' '}
      <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
        (EACH person)
      </span>
    </h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Tell Cursor to sync and create your branch</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Sync my fork with upstream, pull the latest,
                <br />
                and create a branch called
                <br />
                [your-name]/[feature]"
              </code>
            </div>
          </div>
        </div>

{/* IN CURSOR */}
          <div className="check-group work section1">
            <div className="check-group-label">In Cursor</div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Run the project</strong> — make sure the base MVP works
              first
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Use Plan Mode</strong> to design YOUR section from the PRD
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Implement your feature</strong> using Tab completion +
              Cmd+K
            </div>
          </div>
        </div>

        {/* Git FINISH */}
        <div className="check-group git">
          <div className="check-group-label">Git: Finish</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Tell Cursor to commit, push, and open a PR</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Commit my changes with the message
                <br />
                'Add [feature]', push to my fork,
                <br />
                and open a PR to the original repo"
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide09Phase3Develop

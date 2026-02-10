const Slide14Section2Step3 = () => (
  <>
    <div className="section-header">
      <span className="section-badge section2">Section 2</span>
      <span className="phase-badge">Step 3: Add a Feature • 10 min</span>
    </div>
    <h2>Build Something New</h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Tell Cursor to create a branch</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">Ask Cursor:</span>
                <br />
                "Create a new branch called
                <br />
                [your-team]/adds-[feature]"
              </code>
            </div>
          </div>
        </div>

{/* IN CURSOR */}
          <div className="check-group work section2">
            <div className="check-group-label">In Cursor</div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Decide on a feature</strong> — something small but visible
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Use Plan Mode</strong> — try different models for
              different perspectives
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Implement the feature</strong>
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
                {' '}— then watch BugBot review your code
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
      <div className="emphasis-box orange">
        <strong>Section 2 Complete</strong> — You've used BugBot, Hooks, Skills,
        Agents, and Ask Mode.
      </div>
    </div>
  </>
)

export default Slide14Section2Step3

const TruthSlide = () => (
  <section className="slide" id="s5">
    <div className="slide-n">v — The Truth Problem</div>
    <h2 className="luna-h2">
      There are three kinds of truth.
      <br />
      ERPs own one. <span className="luna-accent">Agents need all three.</span>
    </h2>

    <div className="truth-grid">
      <div className="truth-col tc-record">
        <div className="truth-head">
          <div className="truth-type">System of Record Truth</div>
          <div className="truth-name">The Ledger</div>
        </div>
        <div className="truth-body">
          <ul>
            <li>GL trial balance — Yardi, MRI, Anaplan</li>
            <li>Authoritative for compliance and audit</li>
            <li>Reliable: <em>what happened and when</em></li>
            <li>Format: batch, static, period-end</li>
          </ul>
        </div>
      </div>

      <div className="truth-col tc-semantic">
        <div className="truth-head">
          <div className="truth-type">Semantic Layer Truth</div>
          <div className="truth-name">Shared Meaning</div>
        </div>
        <div className="truth-body">
          <ul>
            <li>Business ontology: assets, funds, leases, investors</li>
            <li>Firm-specific definition of every metric</li>
            <li>Reliable: <em>what this means in our context</em></li>
            <li>Format: governed, queryable, versioned</li>
          </ul>
        </div>
      </div>

      <div className="truth-col tc-event">
        <div className="truth-head">
          <div className="truth-type">Event Stream Truth</div>
          <div className="truth-name">Truth in Motion</div>
        </div>
        <div className="truth-body">
          <ul>
            <li>IoT sensors, payment posts, lease execution</li>
            <li>Temporal resolution — deltas, sequences</li>
            <li>Reliable: <em>what is happening right now</em></li>
            <li>Format: continuous, event-driven</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="callout">
      <div className="callout-title">Governance Implication</div>
      <div className="callout-text">
        <strong>Truth arbitration becomes a governance function.</strong> Which truth type is authoritative for compliance? Which is fit for an agent to act on without human review? When can event-driven truth override system truths? Who is accountable when three truths produce three different answers?
      </div>
    </div>
  </section>
);

export default TruthSlide;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_BASE_URL = 'https://netlog-dev-backend.zzlee-tw.workers.dev'; // Your deployed backend URL

const CreateEvent: React.FC = () => {
  const [eventSourceName, setEventSourceName] = useState<string>('');
  const [eventContent, setEventContent] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/event-logs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event_source_name: eventSourceName, content: eventContent }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(`Event log created successfully! ID: ${data.id}`);
      setEventSourceName('');
      setEventContent('');
    } catch (e: any) {
      setError(`Failed to create event log: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {message && <div className="alert alert-success" role="alert">{message}</div>}
              {error && <div className="alert alert-danger" role="alert">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="eventSourceName" className="form-label">Event Source Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="eventSourceName"
                    value={eventSourceName}
                    onChange={(e) => setEventSourceName(e.target.value)}
                    placeholder="e.g., UserActivity, SystemError"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="eventContent" className="form-label">Event Content</label>
                  <textarea
                    className="form-control"
                    id="eventContent"
                    rows={5}
                    value={eventContent}
                    onChange={(e) => setEventContent(e.target.value)}
                    placeholder="e.g., User logged in, Failed to process payment"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Event'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;

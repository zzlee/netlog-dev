#!/bin/bash
# Script to create a new event log

echo "Creating event log for 'my-test-source'..."
curl -X POST http://localhost:8787/event-logs \
     -H "Content-Type: application/json" \
     -d '{"event_source_name": "my-test-source", "content": "This is a test log entry from curl."}'

echo -e "\nCreating another event log for 'my-test-source'..."
curl -X POST http://localhost:8787/event-logs \
     -H "Content-Type: application/json" \
     -d '{"event_source_name": "my-test-source", "content": "Another log entry."}'

echo -e "\nCreating event log for 'another-source'..."
curl -X POST http://localhost:8787/event-logs \
     -H "Content-Type: application/json" \
     -d '{"event_source_name": "another-source", "content": "Log for another source."}'

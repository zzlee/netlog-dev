#!/bin/bash
# Script to retrieve a specific event log by its ID

# IMPORTANT: Replace <EVENT_LOG_ID> with an actual ID from your database
# You can get IDs by running get_all_event_logs.sh first.
EVENT_LOG_ID="1" # Example ID, change this!

echo "Retrieving event log with ID: $EVENT_LOG_ID..."
curl http://localhost:8787/event-logs/$EVENT_LOG_ID

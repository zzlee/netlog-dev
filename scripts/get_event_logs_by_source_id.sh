#!/bin/bash
# Script to retrieve all event logs for a specific event source ID

# IMPORTANT: Replace <EVENT_SOURCE_ID> with an actual ID from your database
# You can get IDs by running get_all_event_sources.sh first.
EVENT_SOURCE_ID="1" # Example ID, change this!

echo "Retrieving event logs for event source ID: $EVENT_SOURCE_ID..."
curl http://localhost:8787/event-logs/source/$EVENT_SOURCE_ID

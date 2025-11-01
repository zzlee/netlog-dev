#!/bin/bash
# Script to retrieve a specific event source by its ID

# IMPORTANT: Replace <EVENT_SOURCE_ID> with an actual ID from your database
# You can get IDs by running get_all_event_sources.sh first.
EVENT_SOURCE_ID="1" # Example ID, change this!

echo "Retrieving event source with ID: $EVENT_SOURCE_ID..."
curl http://localhost:8787/event-sources/$EVENT_SOURCE_ID

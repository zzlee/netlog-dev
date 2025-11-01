#!/bin/bash
# Script to retrieve all event logs

echo "Retrieving all event logs..."
curl http://localhost:8787/event-logs

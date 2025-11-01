#!/bin/bash
# Script to create a new event source or retrieve an existing one

echo "Creating event source 'my-test-source'..."
curl -X POST http://localhost:8787/event-sources \
     -H "Content-Type: application/json" \
     -d '{"name": "my-test-source"}'

echo -e "\nCreating event source 'another-source'..."
curl -X POST http://localhost:8787/event-sources \
     -H "Content-Type: application/json" \
     -d '{"name": "another-source"}'

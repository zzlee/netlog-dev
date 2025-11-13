#!/bin/bash

# /usr/sbin/netlog_event.sh

IFACE=$1
IP_ADDRESS=$2
STATE=$3

exec > /var/log/netlog-event-${IFACE}.log 2>&1
set -x

API_BASE_URL="https://netlog-dev-backend.yuan88yuan-tw.workers.dev"
source_name=`hostname`
content="$IFACE: $IP_ADDRESS ($STATE)"

while true; do
    synced=$(timedatectl show -p NTPSynchronized --value)
    if [ "$synced" = "yes" ]; then
        echo "NTP synchronized."
        break
    fi
    echo "Waiting for NTP..."
    sleep 2
done

curl --max-time 3 --retry 2 --silent \
	-X POST "${API_BASE_URL}/event-logs" \
	-H "Content-Type: application/json" \
	-d "{\"event_source_name\": \"${source_name}\", \"content\": \"${content}\"}"

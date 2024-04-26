!/bin/bash
# script that sends a JSON POST request to a URL passed as the first argumense.
curl -s "$1" -d "@$2" -X POST -H "Content-Type: application/json"

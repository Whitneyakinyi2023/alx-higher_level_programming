#!/bin/bash 
# script that sends a request to a URL passed as an argument, and displays only the status code 
curl -s -L -X HEAD -w "%{http_code}" "$1"

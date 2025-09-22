#!/bin/bash

# Check if there are no arguments
if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  # Loop through arguments, with a maximum of 3
  for arg in "$@"; do
    echo "$arg"
  done
fi

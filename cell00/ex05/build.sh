
#!/bin/bash

# Check if no arguments are supplied
if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  for arg in "$@"
  do
    mkdir "ex$arg"
  done
fi

#!/bin/bash

# Directory to watch
WATCH_DIR="./src/assets/story"

# Command to run when a file changes
COMMAND="inklecate -o ./src/assets/story/story.json ./src/assets/story/main.ink"

# Function to execute the command
execute_command() {
  echo "Detected change in a .ink file, running command..."
  $COMMAND
}

# Watch for changes
inotifywait -m -e modify,create,delete --format "%w%f" "$WATCH_DIR" | while read FILE
do
  if [[ "$FILE" == *.ink ]]; then
    execute_command
  fi
done


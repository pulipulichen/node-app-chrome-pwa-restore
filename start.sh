#!/bin/bash

# Get the directory of the script
script_dir="$(cd "$(dirname "$0")" && pwd)"

# Move to the script's directory
cd "$script_dir"

npm run start

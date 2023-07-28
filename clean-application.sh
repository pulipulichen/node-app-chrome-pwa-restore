#!/bin/bash

dir="~/.local/share/applications/"
prefix="chrome-"
suffix="-Default.desktop"
days_threshold=10

# Use find to locate the files and remove them
find "$dir" -type f -name "${prefix}*${suffix}" -mtime +$days_threshold -exec rm -f {} \;

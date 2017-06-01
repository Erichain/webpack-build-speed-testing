#!/bin/bash
function get_vendor_js() {
  vendor_js_file_path=$(find . -path '*dist*' -iname 'vendor.js')
  vendor_js_directory_path=$(dirname "$vendor_js_file_path")
  entry_files_path=$(dirname $(find . -path '*dist*' -iname 'main.js'))

  echo "Moving vendor.js to dist folder: $entry_files_path..."
  mv "$vendor_js_file_path" "$entry_files_path"

  echo "Delete vendor.js folder: $vendor_js_directory_path..."
  rm -rf "$vendor_js_directory_path"
}

echo "Clean previous releases..."
rm -rf dist-*

webpack --progress -p --config webpack.dll.js
webpack --progress -p --config webpack.config.js
get_vendor_js
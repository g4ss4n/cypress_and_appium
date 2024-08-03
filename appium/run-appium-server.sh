#!/bin/bash

# Navigate to the directory containing the node_modules folder
cd ../

# Start the Appium server with specified options
./node_modules/.bin/appium server -p 4723 -a 0.0.0.0 -pa /wd/hub --relaxed-security --allow-insecure=none --deny-insecure=none &



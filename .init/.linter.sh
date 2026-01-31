#!/bin/bash
cd /home/kavia/workspace/code-generation/dt3-interactive-experience-43282-43291/dt3_website_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


#!/usr/bin/env bash

PROJECT_NAME=morando-junto-api

echo ${PROJECT_NAME}
if [[  "$(docker ps -qa -f name=postgres-${PROJECT_NAME})" ]]; then
       docker start postgres-${PROJECT_NAME}
else
      docker run \
        -d \
        --name postgres-${PROJECT_NAME} \
        -e POSTGRES_USER=postgres \
        -e POSTGRES_PASSWORD=postgres \
        -e POSTGRES_DB=${PROJECT_NAME} \
        -p 5432:5432 \
        postgres
fi

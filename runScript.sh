#!/bin/bash

if [ "$1" = "build" ]
then
  echo "Building docker containers"
  # Build containers and run then 
  docker-compose up --build

  if [ $? = 0 ]
  then
    echo "Succesfully run building and running proces"
  else
    echo "There was problems during building and running process"
  fi
fi


# setting git-config
# git config --global user.name "Nicolai Christensen"
# git config --global user.email "nicolai.bjornbo@hotmail.com"
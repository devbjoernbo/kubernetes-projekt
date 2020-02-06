#!/bin/bash

if [ "$1" = "docker" ]
then
  if [ "$2" = "build" ]
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
fi


# setting git-config
# git config --global user.name "Nicolai Christensen"
# git config --global user.email "nicolai.bjornbo@hotmail.com"

# Add file changes and new files, and commit to git
if [ "$1" = "git" ]
then
  if [ "$2" = "commit" ]
  then
    echo "Adding new files and file changes to commit-stage"
    # Build containers and run then 
    git add .

    if [ $? = 0 ]
    then
      echo "Succesfully added files and changes"
      echo "Commiting files to git repository"

      git commit -m "$3"

      if [ $? = 0 ]
      then
        echo "Succesfully commited files"
    
      else
        echo "There was a problem during commiting process"
      fi
    else
      echo "There was a problem during adding process"
    fi
  fi
fi
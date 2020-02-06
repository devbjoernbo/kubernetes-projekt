#!/bin/bash

# Commands
# ./runScript.sh docker build
# ./runScript.sh git commit name_of_commit

# Docker
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

# Git
# Add file changes and new files, commit to git and push to git-remote
if [ "$1" = "git" ]
then
  if [ "$2" = "commit" ]
  then
    echo "Adding new files and file changes to commit-stage"
    # add files to git-local
    git add .

    if [ $? = 0 ]
    then
      echo "Succesfully added files and changes"
      echo "Commiting files to git repository"

      # commit files to git-local 
      git commit -m "$3"

      if [ $? = 0 ]
      then
        echo "Succesfully commited files"

        # push files to git-remote 
        git push origin master

        if [ $? = 0 ]
        then
          echo "Succesfully pushed files to git-remote"
        else
          echo "There was a problem during pushing process"
        fi
      else
        echo "There was a problem during commiting process"
      fi
    else
      echo "There was a problem during adding process"
    fi
  fi
fi
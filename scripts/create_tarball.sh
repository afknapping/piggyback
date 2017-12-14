if [[ -f "node_modules.tar.gz" ]]; then
  # do your thing for the directory
  echo "found an old node_modules.tar.gz, replacing..."
  rm node_modules.tar.gz
else
  # do the other thing for the file
  echo " "
fi

tar -czf node_modules.tar.gz node_modules && echo "created fresh node_modules.tar.gz"
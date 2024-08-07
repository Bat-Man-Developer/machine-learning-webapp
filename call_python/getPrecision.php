<?php
$pythonExePath = "c:/Users/user/AppData/Local/Programs/Python/Python312/python.exe"; // Replace with the actual path
$pythonScript = "../python/precision.py";
$escapedPythonScript = escapeshellarg($pythonScript);
$command = $pythonExePath . " " . $escapedPythonScript . " -c ";
$output = shell_exec($command);
  echo $output;